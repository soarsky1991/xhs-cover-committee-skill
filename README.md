# XHS Cover Committee Skill

An open experiment on Xiaohongshu cover design: 74+ iterations, 100+ process images, many visible failures, and a skill that turns those failures into a reusable review workflow.

![Iteration board v74](assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v74.jpg)

This repository is not a "perfect cover generator". It is a public lab for one stubborn problem:

> Why do AI-made social covers often feel like text pasted on a photo, even when the text is big, colorful, and technically readable?

The answer we reached after many rejected versions: cover titles need image regions, subject boundaries, information density, and contour-aware typography. A pretty font is not enough.

## What Is Inside

- `skills/xhs-cover-committee/SKILL.md` - the reusable Codex skill.
- `docs/iteration-story.md` - the story of the 74-version experiment.
- `docs/method.md` - the review method distilled from the failures.
- `docs/gallery.md` - image index for iteration panels, debug panels, edge evidence, and current covers.
- `assets/iteration-panels/` - 73 iteration boards from v2-v74.
- `assets/debug-panels/` - 72 debug boards showing region maps and collision checks.
- `assets/current-covers/` - the current v74 covers, kept as critique material, not as "solved" examples.
- `assets/edge-evidence/` - contour evidence boards used to reason about subject boundaries.

## The Honest Status

The latest version is still not the end state. Some layouts remain stiff, and some contour decisions are too mechanical. That is exactly why the repository exists: the process is more valuable when the misses are visible.

The current direction is:

- Do not rely on bottom boxes, UI chips, or generic label piles.
- Detect the human face, companion character, hands, tools, crystal object, and usable blank areas before placing titles.
- Size title text from available area and information density, not from a fixed template.
- Let each issue's title shape follow that issue's subject, instead of reusing one big-font style.
- Export both normal covers and debug maps so contributors can argue from evidence.

## Quick Start

Install or copy the skill folder:

```bash
cp -R skills/xhs-cover-committee ~/.codex/skills/
```

Then ask Codex to use `xhs-cover-committee` when reviewing or designing a cover.

For maintainers:

```bash
npm run check
```

This verifies that the repository has the required docs, skill file, image evidence, and no accidental reference screenshots.

## Why Open Source This

The experiment began as a rejected cover-making task. The useful part was not the final image. The useful part was the trail of 145 visible process images:

- what looked awkward,
- what the user rejected,
- what rule was added,
- what image evidence was needed,
- what still failed after a "pass".

If more people update the method, add better region detectors, or contribute stronger title layout examples, this can become a practical public skill for AI-assisted cover design.

Start with [the iteration story](docs/iteration-story.md), then read [the method](docs/method.md).
