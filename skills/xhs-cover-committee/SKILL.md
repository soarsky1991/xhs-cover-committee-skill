---
name: xhs-cover-committee
description: Build and review Xiaohongshu-style AI cover title systems from references, deterministic HTML layouts, debug maps, edge evidence, and reusable version notes. Use when creating or improving Chinese social cover titles, especially when the title must avoid faces/objects and attach to image contours.
---

# XHS Cover Committee

Use this skill to turn cover design from "prompt a pretty image" into a repeatable title-layout system.

## When To Use

Use for:

- Xiaohongshu/RedNote cover title systems;
- Chinese title overlays on AI-generated portraits or creator IP images;
- reference-learning without copying third-party screenshots;
- deterministic HTML/CSS cover layout;
- debug maps, forbidden zones, carrier zones, and edge evidence;
- versioned cover experiments that should become reusable rules.

Do not use this skill to directly publish to any platform. Stop at candidate packages, validation, and manual handoff unless the user explicitly asks for publishing steps.

## Inputs

Collect or infer:

- target platform and aspect ratio, usually Xiaohongshu 3:4;
- cover theme and one-sentence hook;
- base image or image-generation direction;
- fixed IP elements that must remain visible;
- reference-account observations, summarized as patterns only;
- current renderer/check scripts if the project already has them.

## Workflow

1. Learn the reference grammar.
   - Summarize title structure, not private screenshots.
   - Record stable traits: font weight, outline, contrast, label rhythm, subject depth.
   - Record variation traits: top-heavy, around-head, object-shaped, number hammer, article card.

2. Build the base-image contract.
   - Identify title carriers before title layout.
   - If the image has no carrier, regenerate or refine the base image first.
   - Name carriers by visible object: `paper-surface-title-carrier`, not `left-safe`.

3. Mark zones.
   - Hard zones: human face, fox face, crystal, hands, important tools.
   - Soft zones: shoulders, sleeves, background, carrier edges.
   - Allow-zones only when a foreground cutout will restore depth.

4. Place deterministic titles.
   - Final Chinese title text belongs in HTML/CSS or another controllable layer.
   - Do not ask the image model to render final Chinese title words.
   - Main title mass comes before small labels.
   - Change title structure per theme; do not reuse one layout skeleton.
   - Keep side and lower text straight unless it follows a visible named contour.
   - Treat v59 as an important no-frame straight-axis reference.
   - Treat v74 as a caution: contour-aware does not mean every line should curve.
   - Treat v75 as the current correction: main title follows the crown/task contour; side and lower text return to straight axes.

5. Export ordinary and debug boards.
   - Every serious version should produce a normal board and a debug/map board.
   - Debug boards should show carriers, hard zones, and title boxes.
   - Edge evidence is useful when rectangles no longer explain the visual boundary.

6. Validate and review.
   - Run the local layout checker when available.
   - Review at full size and thumbnail size.
   - If title, subject, and carrier do not all work, write the failure clearly and iterate.

7. Preserve the story.
   - Save image boards with stable version names.
   - Add a short note: failure, user feedback, rule upgrade, representative image.
   - Promote repeatable discoveries into the learning library or skill.

## Review Checklist

- First glance: the main title is readable.
- Subject glance: face, companion, crystal, hands, and tools remain intact.
- Structure glance: the title attaches to a real object carrier.
- Density glance: large title mass, few small labels.
- Debug glance: title boxes do not collide with hard zones.
- Story glance: this version teaches something future versions can reuse.
- Family glance: the version declares one of the six layout families from `docs/layout-schemes.md`.
- Progress glance: the version updates `docs/project-plan.md` if it changes scope, status, or remaining work.

## Output Shape

For a repo-ready or team-readable pass, produce:

- ordinary comparison board;
- debug/map board;
- optional edge evidence board;
- version note;
- updated method rule if the version revealed a reusable pattern;
- manual publishing handoff only when the user asks for platform work.
