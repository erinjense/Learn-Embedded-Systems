"""MkDocs hook: count checklist items per page and emit site/progress.json.

The site's checklist.js reads this file to draw the "Your progress" panel on
the home page without hard-coding page lists anywhere. Pages can opt out with
`progress: false` in their front matter.
"""
import json
import os
import re

_PAGES = {}
_ORDER = []
_TASK_RE = re.compile(r'class="task-list-item"')


def on_nav(nav, config, files):
    _ORDER.clear()
    _ORDER.extend(p.url for p in nav.pages)


def on_page_content(html, page, config, files):
    if page.meta.get("progress", True) is False:
        return html
    total = len(_TASK_RE.findall(html))
    if total:
        section = page.ancestors[-1].title if page.ancestors else ""
        _PAGES[page.url] = {
            "url": page.url,
            "title": page.title,
            "section": section,
            "total": total,
        }
    return html


def on_post_build(config):
    ordered = [_PAGES[u] for u in _ORDER if u in _PAGES]
    ordered += [p for u, p in _PAGES.items() if u not in _ORDER]
    out = os.path.join(config["site_dir"], "progress.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump({"pages": ordered}, f, indent=1)
    _PAGES.clear()
