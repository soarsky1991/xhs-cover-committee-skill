# Contributing

This package is meant to grow through evidence. A new cover experiment should add images, a version note, and the rule it taught.

## Add a New Version

1. Add the ordinary comparison board to `assets/iteration-panels/`.
2. Add the debug/map board to `assets/debug-panels/`.
3. If edge evidence was used, add it to `assets/edge-evidence/`.
4. Update `docs/gallery.md` if the image is a useful milestone.
5. Update `docs/iteration-story.md` and `docs/iteration-story.zh-CN.md` if the version changes the method.
6. Declare the layout family from `docs/layout-schemes.md`.
7. Run:

```bash
node scripts/check-package.mjs
```

## Version Note Format

Use this short format when adding a milestone:

```md
## vNN: Short Name

Problem:

- What looked wrong?

Change:

- What changed in image, title, zones, or checking?

Evidence:

- Ordinary board: `assets/iteration-panels/...`
- Debug board: `assets/debug-panels/...`

Rule promoted:

- What should future versions reuse?
```

## Asset Rules

- Do not commit third-party Xiaohongshu screenshots.
- Do not commit Disney/Zootopia or other copyrighted character materials.
- Do not imply endorsement by referenced creators or platforms.
- Use original/generated experiment images, debug boards, and written observations.
- If a reference screenshot is needed for private learning, keep it outside the open repo.

## Good Pull Requests

A good PR usually includes:

- one clear experiment goal;
- ordinary and debug evidence;
- a before/after explanation;
- one reusable rule;
- no unrelated visual churn.

## Bilingual Rule

User-facing narrative docs should keep Chinese and English entry points in sync. At minimum, update the matching `*.zh-CN.md` file when the English story/method/gallery changes.
