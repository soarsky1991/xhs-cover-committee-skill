# Reproduce the Experiment

This package is a repo-ready snapshot. The original renderer and scripts live in the HyperFrames workspace that produced it.

## Original Workspace Paths

- Renderer: `assets/publish/hyperframes-2026-05-31/cover-committee/work/ai-theme-cover-preview.html`
- Layout checker: `workflows/codex-hermes-video/scripts/check-zoned-cover-layout.mjs`
- Source previews: `assets/publish/hyperframes-2026-05-31/cover-committee/theme-previews/`
- Learning notes:
  - `knowledge/xhs-learning-library/patterns/atutun-cover-title-systems-2026-06-03.md`
  - `knowledge/xhs-learning-library/patterns/2026-06-03-atutun-region-aware-cover.md`

## Local Verification

From this package root:

```bash
node scripts/check-package.mjs
```

From the original HyperFrames workspace, after editing any composition HTML:

```bash
npm run check
```

The HyperFrames preview server is long-running. If you need preview mode, keep it alive in the background instead of running it as a one-shot command.

## Reproduction Loop

1. Choose a theme and write the cover promise in one sentence.
2. Generate or select a base image with clear title carriers.
3. Mark hard zones, soft zones, and carriers.
4. Place Chinese title in deterministic HTML/CSS.
5. Export ordinary cover and debug map together.
6. Run the layout checker.
7. Review full-size, thumbnail, and debug board.
8. Write a short version note: what failed, what changed, what rule was added.
9. Copy the new board into `assets/iteration-panels/` and the debug board into `assets/debug-panels/`.
10. Update `docs/iteration-story.md`, `docs/gallery.md`, and their `*.zh-CN.md` mirrors when the version teaches a new rule.
11. Declare which family from `docs/layout-schemes.md` the new version explores.

## Image-2 / Img2img Road

Future base-image correction should prefer image-to-image refinement when references already exist. Use generated/refined base images to create better carriers, then keep final Chinese title placement in deterministic HTML.
