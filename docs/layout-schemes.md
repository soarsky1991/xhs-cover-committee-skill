# Six Layout Schemes / 六种布局方案

This document records the six cover-title families that should be maintained beyond one final version.

这份文档记录六种应该持续维护的封面标题方案。它们不是一次性模板，而是后续迭代的结构库。

## 1. Headline Crown / 头顶压顶主标题

Use when the person is centered or center-right and there is real space above the hairline.

适用于人物居中或偏右，头顶有真实可用空间的封面。

- Good evidence: v67-v73 and the corrected v75.
- Rule: the main title may follow the head/hairline contour.
- Warning from v74: only the main title should curve here; side and lower text should not curve without another contour reason.
- Current correction: v75 keeps the crown curve and restores straight side/lower groups.

## 2. Straight Axis No-Frame / 无底框直排轴线

Use when the image has a natural wall/desk/paper pocket and the title should feel clean instead of decorative.

适用于自然场景里有墙面、桌面、纸面留白，但不想加便签、底框或小长条的版本。

- Good evidence: v58-v59.
- Rule: same-group text shares x-axis or angle; side/lower text stays straight.
- Why it matters: v59 is one of the important user-recognized directions.

## 3. Object Carrier / 物件承载标题

Use when the base image includes a sticky note, paper surface, monitor, whiteboard, role card, or light board.

适用于底图里有便签、纸面、屏幕、白板、角色卡、光板等明确承载物的封面。

- Good evidence: v7-v19.
- Rule: title belongs to the carrier object, not a generic safe rectangle.
- Risk: if every theme uses a carrier board, the series becomes repetitive.

## 4. Side Pocket / 主体两侧口袋

Use when the person, tool, fox, crystal, and negative space form left/right title pockets.

适用于人物、工具、狐狸、水晶和留白形成左右两侧文字口袋的封面。

- Good evidence: v67-v73 and v75.
- Rule: side text can be straight, diagonal, or lightly shaped, but it must have a subject-side reason.
- Risk: too many side labels make the cover loose.

## 5. Lower Information Band / 下方信息带

Use when desk, chest-below area, laptop, paper, or crystal leaves room for a second title layer.

适用于桌面、胸部以下、电脑、纸面或水晶旁边有空间承接第二层标题的封面。

- Good evidence: v72-v73 and v75.
- Rule: use medium-large words, not bottom frames or chip rows.
- Warning from v74: lower text should normally stay straight unless it follows a real desk/object contour.

## 6. Article Card / 黑底文章卡与观点型封面

Use for reflective essays, dense opinion posts, or literary/AI thinking topics where a photo-first cover is not necessary.

适用于深度观点、文学/AI 思考、长文型内容；这类封面不一定要人物照片做主体。

- Status: documented from reference learning, not fully implemented in this package yet.
- Next step: create a deterministic article-card renderer with strong Chinese hierarchy and minimal imagery.
- Risk: it can look too plain if the title rhythm is weak.

## Maintenance Rule / 维护规则

Every new version should declare which scheme it belongs to. A version may combine two schemes, such as `headline crown + lower information band`, but it should not silently invent a new structure without a note.

每个新版本都要声明自己属于哪一种方案。可以组合，例如“头顶压顶主标题 + 下方信息带”，但不能悄悄换结构却不写版本说明。
