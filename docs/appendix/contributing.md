# Contributing

Thank you. The guide is better for every corrected link and every sharper explanation. Please read this first; it is short.

## The one rule

**Do not make it longer without making it better.** Learners quit when a page becomes a wall of links. If you add a resource to a "Learn" list, consider what it replaces. New resources usually belong in "Go deeper." New topics usually belong in an existing module, not a new one.

## What we welcome

- **Dead or moved links.** Fix them. Run `python tools/check_links.py` first; it tells you what is broken.
- **Better resources.** Free beats paid, current beats old (except timeless classics), authoritative beats popular, short beats long when they teach the same thing. Say in the pull request why yours is better than what it replaces.
- **Checkpoint improvements.** If a checkpoint was unclear, impossible on the stated hardware, or missed something important, fix it.
- **Clarity.** Shorter sentences. Plain words. An analogy that finally made something click.
- **Board notes.** A one-line note on how a checkpoint differs on another common board is welcome. A parallel track for another board is not.

## What we decline

- Link dumps and "awesome list" style additions without curation.
- Content that requires a specific paid course or tool with no free path.
- Marketplace or affiliate links. Link the author or publisher.
- Rewrites of the philosophy. Learn it yourself first, then use every tool, including AI.

## Resource format

Every resource in a module uses this shape so the tags and times stay consistent:

```markdown
- [ ] <span class="les-tag">Type</span> **[Title](https://example.com)** by Author <span class="les-time">~time</span><br>One sentence on why this one earned its place.
```

Types: Video, Article, Book, Course, Docs, Interactive, Tool, Podcast, Community. Add `<span class="les-tag les-paid">Paid</span>` after the type for anything that costs money.

## Working locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open the local address it prints. Checkboxes and the progress panel work locally.

## Checking links

```bash
python tools/check_links.py
```

YouTube links are checked through the oEmbed endpoint, which reports removed and private videos correctly. Some sites block scripts; the checker lists those for a human to open.

## Process

1. Fork, branch, edit, run the link checker, open a pull request.
2. Explain the *why* in one paragraph.
3. Be patient; this is maintained by volunteers.

By contributing you agree your text is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) like the rest of the guide.
