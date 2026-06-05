# 小红书封面委员会 Skill

English: see [README.md](README.md).

![v75 封面总览](assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v75.jpg)

这个仓库记录的是一次真实、反复被否定、又继续推进的小红书封面实验：75+ 版确定性 HTML 排版、147 张普通/调试过程图、边缘证据图、开源代码，以及一个可复用的 Codex Skill。

它不是“最后一版封面模板”。更准确地说，它是一份开发迭代史：为什么很多 AI 封面看起来精致，但标题仍然像后贴上去；为什么只做大字、描边、投影仍然不够；为什么必须识别人物、狐狸、手、道具、水晶、桌面和真正可写字区域。

## 仓库里有什么

- `assets/iteration-panels/`：v2-v75 普通迭代总览，包括 v59 等被用户认可的方向。
- `assets/debug-panels/`：v3-v75 区域/禁区/密度调试图。
- `assets/final-covers/`：v73 单张封面导出，作为阶段性收敛保留。
- `assets/current-covers/`：v75 当前修正版，同时保留 v74 批判材料。
- `assets/layout-schemes/`：六种布局方案的视觉样张。
- `assets/edge-evidence/`：边缘证据图，用来证明标题是否真的贴近轮廓。
- `src/`：原始渲染 HTML、布局检查脚本、导出脚本。
- `docs/project-plan.md`：中英文总控表，用来显示范围、进度和剩余工作。
- `docs/iteration-story.zh-CN.md`：中文迭代故事。
- `docs/layout-schemes.md`：六种布局方案及完成状态。
- `skills/xhs-cover-committee/SKILL.md`：可复用 Skill。

## 为什么保留 v59

v59 不是最终答案，但它保留了一个非常重要的方向：无底框、少装饰、同组文字方向统一，左右和下方文本多数保持直排。它说明“贴合主体”不等于所有字都弯曲。

![v59 调试图](assets/debug-panels/ai-cover-title-layout-sculpt-v59-map-debug.jpg)

## 为什么保留 v74

v74 的价值主要是教训：主标题可以在人物头顶或真实任务轮廓上做弧线，但左右和下方文本如果没有对象轮廓支撑，就应该保持直排。无意义弯曲会显得突兀、生硬，也会削弱阅读。

![v74 总览](assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v74.jpg)

## 为什么加入 v75

v75 是对 v74 的直接修正：只让主标题沿人物头顶/任务轮廓走，左右和下方文本恢复 v73 的直线排版逻辑。它不是宣称最终完美，而是把这条审美规则固定进版本链。

![v75 总览](assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v75.jpg)

## v75 当前效果

![coding](assets/current-covers/ai-coding-xhs-cover-sculpt-v75-1080x1440.jpg)
![paper](assets/current-covers/ai-paper-xhs-cover-sculpt-v75-1080x1440.jpg)
![video workflow](assets/current-covers/ai-video-workflow-xhs-cover-sculpt-v75-1080x1440.jpg)
![workbench](assets/current-covers/ai-workbench-xhs-cover-sculpt-v75-1080x1440.jpg)
![agent](assets/current-covers/ai-agent-xhs-cover-sculpt-v75-1080x1440.jpg)

## 快速检查

```bash
node scripts/check-package.mjs
```

建议阅读顺序：

1. `docs/iteration-story.zh-CN.md`
2. `docs/project-plan.md`
3. `docs/layout-schemes.md`
4. `docs/method.zh-CN.md`
5. `docs/gallery.zh-CN.md`
6. `skills/xhs-cover-committee/SKILL.md`

## 当前状态

这个项目已经开源，但视觉方案仍然是活的。真正有意义的不是宣布某一版成功，而是让更多人能看见失败、规则、证据和下一步如何改。
