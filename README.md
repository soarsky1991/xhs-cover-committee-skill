# XHS Cover Committee Skill

中文说明：见 [README.zh-CN.md](README.zh-CN.md)。

![v75 cover comparison](assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v75.jpg)

This repository-ready package documents a real cover-system experiment: 75+ deterministic HTML layout passes, 147 ordinary/debug process images, edge evidence images, source code, and a reusable agent skill for making Xiaohongshu-style cover titles without copying third-party screenshots or licensed characters.

The work started with a simple problem: AI-generated covers looked polished, but the Chinese title layer still felt pasted on. The experiment became a cover committee: learn the title grammar from strong creator accounts, draw forbidden regions, test object-shaped title carriers, generate debug maps, and keep iterating until the title became part of the image structure.

## What Is Inside

- `assets/iteration-panels/` - ordinary comparison boards through v75, including v59 and other user-recognized directions.
- `assets/debug-panels/` - map/debug boards through v75.
- `assets/final-covers/` - five v73 single-cover exports preserved as a consolidation checkpoint.
- `assets/current-covers/` - v75 corrected current covers plus preserved v74 critique material.
- `assets/layout-schemes/` - six visual samples for the maintained layout families.
- `assets/edge-evidence/` - edge-detection evidence from v68, including the combined board.
- `src/` - open-source renderer/check/export code copied from the original HyperFrames experiment.
- `docs/project-plan.md` - the bilingual scope/progress/control table for this living project.
- `docs/iteration-story.md` / `docs/iteration-story.zh-CN.md` - the version story: what failed, what changed, and why the rules kept upgrading.
- `docs/layout-schemes.md` - six cover-layout families and their implementation status.
- `docs/gallery.md` - image index for the milestone boards, debug boards, final covers, and edge evidence.
- `docs/method.md` - the reusable methodology: zones, forbidden regions, contour evidence, title density, alignment, and review.
- `docs/reproduce.md` - how to reproduce the experiment in the original HyperFrames workspace.
- `skills/xhs-cover-committee/SKILL.md` - an installable/reusable agent skill.
- `scripts/check-package.mjs` - validates key files, image counts, and Markdown links before publishing.

## Why So Many Versions

The important lesson is that cover-title design is not just prompt writing. In this experiment, the model could create a nice person, fox companion, screen, paper, or whiteboard, but the cover only became readable when the title system had its own rules:

- large title mass first, small labels second;
- title shapes tied to objects, not generic left-safe rectangles;
- hard no-cover zones for faces, hands, fox face, crystal, and important tools;
- debug maps for every serious layout pass;
- edge evidence when hand-drawn rectangles were no longer enough;
- deterministic HTML for Chinese title placement, so generated text never decides final wording.

The boards are intentionally kept in the package because the failed versions are the proof. The repo is not just a template; it is the trace of learning.

## Quick Start

```bash
node scripts/check-package.mjs
```

Read the package in this order:

1. `docs/iteration-story.md`
2. `docs/project-plan.md`
3. `docs/method.md`
4. `docs/gallery.md`
5. `skills/xhs-cover-committee/SKILL.md`

If you want to continue the experiment, follow `docs/reproduce.md` from the original HyperFrames workspace and add your version notes through `CONTRIBUTING.md`.

## Important Checkpoints

v59 is preserved as an important direction because it removed the bottom-frame feeling and kept side/lower text mostly straight:

![v59 comparison](assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v59.jpg)

v74 is preserved as critique material. The lesson is narrower than "curve everything": only the main title should follow a meaningful head/task contour; side and lower text should stay straight unless there is a real object contour reason.

![v74 comparison](assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v74.jpg)

v75 is the current correction: keep the main title on the head/task contour, then restore straight side and lower text from the v73 rule.

![v75 comparison](assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v75.jpg)

## Representative v75 Covers

![coding cover](assets/current-covers/ai-coding-xhs-cover-sculpt-v75-1080x1440.jpg)
![paper cover](assets/current-covers/ai-paper-xhs-cover-sculpt-v75-1080x1440.jpg)
![video workflow cover](assets/current-covers/ai-video-workflow-xhs-cover-sculpt-v75-1080x1440.jpg)
![workbench cover](assets/current-covers/ai-workbench-xhs-cover-sculpt-v75-1080x1440.jpg)
![agent cover](assets/current-covers/ai-agent-xhs-cover-sculpt-v75-1080x1440.jpg)

## Source Boundary

This package uses original/generated experiment images from the local cover committee. It does not include third-party Xiaohongshu screenshots, creator profile images, Disney/Zootopia materials, or other copyrighted references. Learning sources are summarized as design observations only. See `NOTICE/ASSET_RIGHTS.md`.

## Status

Published/open-source package with source code, bilingual documentation entry points, process assets, and a reusable skill. The visual system is still a living experiment, not a final solved template.
