# Iteration Story

This project did not start as a neat design system. It started with an uncomfortable verdict:

> "Still awkward. The title does not understand the subject, the people, or the element contours. It feels stiff and pasted on."

That critique became the spine of the project. Instead of hiding the failed versions, we keep the boards visible so others can see how the method changed.

## Version Map

| Phase | Versions | What We Tried | What Broke | Rule That Survived |
| --- | --- | --- | --- | --- |
| Overlay titles | v2-v10 | Large colorful Chinese titles, labels, stickers | Looked like text pasted on a photo | Big text alone is not cover design |
| Carrier objects | v11-v19 | Sticky notes, paper, monitor, whiteboard, cards | Some covers improved, but the rhythm became repetitive | Titles need a subject-specific carrier |
| Dense title structure | v20-v44 | Bigger title blocks, stronger hierarchy, fewer small chips | More readable, but still not contour-aware | Density must come from title words, not bottom frames |
| Alignment repair | v45-v61 | Left axes, consistent row direction, less decoration | Cleaner but sometimes too rigid | Each group needs internal order |
| Region-aware review | v62-v66 | Face, companion, hand, crystal, tool, and text zones | Passing checks did not guarantee beauty | Debug maps are necessary but not sufficient |
| Center-person layout | v67-v73 | Head-top title, left/right/lower zones, edge evidence | Better structure, still too mechanical | Title zones must anchor to real subject regions |
| No-frame contour-path test | v74 | Remove boxes, make title paths follow contours | Still not solved, but the failure is clearer | The next step must improve actual image understanding |

## Milestone Images

Early boards exposed the pasted-on-text problem:

![v2 board](../assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v2.jpg)

Carrier objects made the title feel less detached:

![v17 board](../assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v17.jpg)

Alignment repair made each title group less chaotic:

![v52 board](../assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v52.jpg)

Region maps made the invisible mistakes debatable:

![v66 debug board](../assets/debug-panels/ai-cover-title-layout-sculpt-v66-map-debug.jpg)

The later versions moved toward head-top, side, and lower information zones:

![v73 board](../assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v73.jpg)

The current v74 experiment removes frames and uses contour paths, but it is kept as critique material, not as a final success:

![v74 board](../assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v74.jpg)

## What The Rejections Taught

1. A cover can pass collision checks and still feel wrong.
2. "No overlap" is only the floor. The title must explain why it belongs there.
3. Reusing the same big-title style across topics makes a series feel dead.
4. Small labels, chips, and rectangles make the page busy without making it strong.
5. The subject matters: face, hand, companion, tool, crystal, screen, paper, and desk all need separate treatment.
6. Debug maps should show named regions, not generic rectangles.
7. A public repository should show the failures because that is where contributors can help.

## Open Challenge

The next contributor should not merely add prettier fonts. The hard problem is:

> Given a cover image, identify the real subject contours and generate title regions that feel intentional at both full size and thumbnail size.

That means better subject segmentation, better text-shape planning, and better aesthetic review than the current deterministic checks.

