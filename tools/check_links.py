#!/usr/bin/env python3
"""Check every link in the guide.

Usage:
    python tools/check_links.py            # report
    python tools/check_links.py --fail-on-dead

Web pages are fetched with a browser-like User-Agent. YouTube videos and
playlists are checked through the oEmbed endpoint, which returns 404 for
removed videos and 401 for private ones (a plain GET on youtube.com returns
200 even for dead videos). A 403 from oEmbed usually means the video exists
but the uploader disabled embedding, so it is reported as "unclear", not dead.
Many vendor sites block scripts with 403 or are too slow to answer; those are
listed for a human to spot-check rather than reported as dead. YouTube channel
URLs are fetched directly since oEmbed does not support them.
"""
import concurrent.futures
import json
import re
import ssl
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
}
LINK_RE = re.compile(r"\]\((https?://[^)\s]+)\)")
SLOW_HOSTS = {"www.st.com", "wiki.st.com", "www.embedded.com", "www.greenend.org.uk", "www.littelfuse.com", "betterembsw.blogspot.com", "gustedt.gitlabpages.inria.fr"}
CTX = ssl.create_default_context()


def collect():
    seen, out = set(), []
    for path in [ROOT / "README.md", *sorted((ROOT / "docs").rglob("*.md"))]:
        text = path.read_text(encoding="utf-8", errors="ignore")
        for m in LINK_RE.finditer(text):
            url = m.group(1).rstrip(".,")
            if url not in seen:
                seen.add(url)
                out.append((url, path.relative_to(ROOT).as_posix()))
    return out


def fetch(url, timeout=30):
    req = urllib.request.Request(url, headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=CTX) as r:
            return r.status, r.geturl()
    except urllib.error.HTTPError as e:
        return e.code, url
    except Exception as e:  # noqa: BLE001
        return -1, f"{type(e).__name__}: {e}"[:100]


def check(item):
    url, src = item
    host = urllib.parse.urlparse(url).netloc
    is_channel = "youtube.com" in host and ("/@" in url or "/channel/" in url or "/c/" in url)
    if ("youtube.com" in host or "youtu.be" in host) and not is_channel:
        oe = "https://www.youtube.com/oembed?format=json&url=" + urllib.parse.quote(url, safe="")
        code, _ = fetch(oe)
        verdict = {200: "ok", 404: "dead", 401: "dead (private)", 400: "dead (bad id)", 403: "unclear (embedding off)"}.get(code, f"unclear ({code})")
        return {"url": url, "src": src, "code": code, "verdict": verdict, "final": ""}
    code, final = fetch(url)
    if code == 200:
        verdict = "ok"
    elif code == 403:
        verdict = "blocked (spot-check by hand)"
    elif code == -1 and host in SLOW_HOSTS:
        verdict = "slow host, timed out (spot-check by hand)"
    elif code in (404, 410):
        verdict = "dead"
    elif code == -1:
        verdict = "error"
    else:
        verdict = f"unclear ({code})"
    return {"url": url, "src": src, "code": code, "verdict": verdict, "final": final if final != url and code == 200 else ""}


def main():
    items = collect()
    print(f"Checking {len(items)} unique links...", file=sys.stderr)
    with concurrent.futures.ThreadPoolExecutor(12) as ex:
        results = list(ex.map(check, items))
    dead = [r for r in results if r["verdict"].startswith("dead")]
    other = [r for r in results if not r["verdict"].startswith(("ok", "dead"))]
    redirected = [r for r in results if r["final"]]
    for r in dead:
        print(f"DEAD     {r['url']}   ({r['src']})")
    for r in other:
        print(f"{r['verdict'].upper():8} {r['url']}   ({r['src']})")
    for r in redirected:
        print(f"REDIRECT {r['url']} -> {r['final']}")
    print(f"\n{len(results)} links: {len(results) - len(dead) - len(other)} ok, {len(dead)} dead, {len(other)} need a human look, {len(redirected)} redirected.")
    (ROOT / "tools" / "last-link-check.json").write_text(json.dumps(results, indent=1), encoding="utf-8")
    if "--fail-on-dead" in sys.argv and dead:
        sys.exit(1)


if __name__ == "__main__":
    main()
