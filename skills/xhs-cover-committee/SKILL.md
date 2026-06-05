---
name: xhs-cover-committee
description: Use when designing, reviewing, or iterating Xiaohongshu/RedNote cover images where title text must align with image regions, subject contours, creator identity, companion elements, and thumbnail readability. Especially useful when a cover feels stiff, pasted-on, cluttered, or too template-like.
---

# XHS Cover Committee

Use this skill to review and improve Xiaohongshu cover layouts. The goal is not to make one pretty overlay. The goal is to make title, subject, and image regions feel intentionally composed.

## Workflow

1. **Inspect the image first.** Name regions before placing text: human face, hairline, companion face, hands, tools, crystal/object anchor, screen/paper/board/wall/desk, and clutter.
2. **Define hard no-cover zones.** Face, eyes, mouth, companion face, important hands, and key product/object surfaces are protected unless a deliberate foreground-depth effect is proven.
3. **Estimate title area and text quantity.** If the main title is too short for the available area, add meaningful secondary title words instead of chips, bottom boxes, or UI labels.
4. **Choose a topic-specific title shape.** Coding, paper, video, workbench, and agent covers should not share the same title skeleton.
5. **Use contours only when meaningful.** A title path must follow a real subject or object boundary, such as head top, shoulder, hand path, paper edge, screen edge, microphone, companion ears, crystal, or desk.
6. **Export normal and debug views.** Normal view checks aesthetic read; debug view checks region names, collisions, density, and contour evidence.
7. **Convert critique into rules.** If a user says the cover is stiff, loose, blocked, or fake-contour, record the failure and update the review gate.

## Review Gates

- The main title is the first read at thumbnail size.
- The subject and companion remain visible on second read.
- No bottom box, chip row, or small-rectangle pile is used as the main density solution.
- Every title group has a reason to be where it is.
- Same-group title lines share direction or follow the same contour.
- No title covers the human face, companion face, key hand gesture, main tool, or crystal/object anchor.
- A contour title has evidence from the actual image, not a decorative arc.

## Output

When reporting a review, include:

- pass/fail status,
- the strongest visual problem,
- the named region causing it,
- the fix direction,
- whether the fix requires image regeneration, title-only layout changes, or a new debug rule.

Keep the review honest. A layout can pass geometry checks and still fail aesthetically.

