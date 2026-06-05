# Project Plan / 项目总控表

Last updated: 2026-06-05

更新日期：2026-06-05

This repository is a living cover-system project, not a one-shot final-cover dump. The goal is to preserve the process, the visual evidence, the rules learned from failure, the reusable skill, and the source code.

这个仓库不是只交付“最后一版封面”，而是维护一套可继续迭代的封面系统：过程、证据、规则、Skill 和源码都要保留下来。

## Scope / 范围

1. Preserve the v2-v75 visual iteration chain, including v59, v73, v74, and v75.
2. Keep v75 as the current correction: only the main title follows the meaningful head/task contour; side and lower text remains straight unless a real object contour justifies bending.
3. Maintain six layout families instead of one final template.
4. Publish bilingual documentation and open-source renderer/check/export code.
5. Keep a separate maintenance thread for future versions and story updates.

1. 保留 v2-v75 的视觉迭代链，包括 v59、v73、v74、v75。
2. 将 v75 作为当前修正版：只让主标题跟随有意义的人物头顶/任务轮廓，左右和下方文本没有真实物体轮廓时保持直排。
3. 维护六种布局方案，而不是只追一个最终模板。
4. 发布中英文文档，并开源渲染、检查、导出代码。
5. 为后续版本和故事更新保留单独维护对话。

## Progress / 当前进度

| Area | Status | Evidence | Remaining |
| --- | --- | --- | --- |
| v75 visual correction | Done | `assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v75.jpg`, `assets/debug-panels/ai-cover-title-layout-sculpt-v75-map-debug.jpg` | Future taste review by user |
| v59/v73/v74 preservation | Done | Gallery and iteration story keep all three as checkpoints | Keep adding notes when the user names another good earlier version |
| Six layout families | Mostly done | `docs/layout-schemes.md` defines six families and `assets/layout-schemes/` stores visual samples | Article-card family has a prototype sample but not a full deterministic renderer |
| Bilingual iteration story | Partial | `docs/iteration-story.md`, `docs/iteration-story.zh-CN.md` | Keep adding future versions; tighten story after more user review |
| Open-source code | Done locally | `src/hyperframes/`, `src/scripts/` | Run package check after docs finish |
| GitHub publish | Pending | Local repo connected to GitHub | Commit and push after validation |

| 模块 | 状态 | 证据 | 剩余工作 |
| --- | --- | --- | --- |
| v75 视觉修正 | 已完成 | `assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v75.jpg`、`assets/debug-panels/ai-cover-title-layout-sculpt-v75-map-debug.jpg` | 等用户继续做审美判断 |
| v59/v73/v74 保留 | 已完成 | 图库和迭代故事都保留为关键节点 | 后续如果用户指出早期好版本，继续补注释 |
| 六种布局方案 | 基本完成 | `docs/layout-schemes.md` 已定义六类，`assets/layout-schemes/` 已有样张 | 黑底文章卡已有原型样张，但还没有完整 renderer |
| 双语迭代故事 | 部分完成 | `docs/iteration-story.md`、`docs/iteration-story.zh-CN.md` | 后续版本继续维护；用户复审后再收紧叙事 |
| 代码开源 | 本地完成 | `src/hyperframes/`、`src/scripts/` | 文档完成后跑包检查 |
| GitHub 发布 | 待完成 | 本地仓库已连接 GitHub | 验证后提交并推送 |

## Work Rhythm / 推进节奏

Each future version should follow this order:

1. Write the intent and target layout family.
2. Change the renderer or layout rules.
3. Export normal board and debug board.
4. Review v59/v73/v74/v75 lessons before declaring success.
5. Update the gallery, story, method, and project plan.
6. Run package validation.
7. Commit and push.

后续每一版按这个顺序走：

1. 先写清楚意图和所属布局方案。
2. 再修改 renderer 或布局规则。
3. 导出普通总览图和 debug 图。
4. 对照 v59/v73/v74/v75 的经验再判断是否成功。
5. 更新图库、迭代故事、方法论和总控表。
6. 跑包检查。
7. 提交并推送。

## Time And Resource Visibility / 时间与资源可见性

For planning purposes, a text/document update is usually small, a deterministic layout update is medium, and a new visual family with exported images is large. The largest uncertainty is visual taste review: if a new exported board is rejected, the next version should be treated as a new design iteration rather than a quick documentation edit.

为了便于安排时间，纯文档更新通常是小任务，确定性布局修改是中等任务，新增一种视觉家族并导出图片是大任务。最大不确定性来自审美复审：如果新导出的总览图被否定，就应该把下一版当成新的设计迭代，而不是简单文档修补。
