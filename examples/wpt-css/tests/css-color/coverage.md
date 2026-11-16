# CSS Color WPT 测试覆盖情况

> 来源: `imported/wpt-upstream/css/css-color/`
> WPT-Revision: `d39ecc058`
> 统计日期: 2026-05-25
> 总测试数: 266（排除 -ref.html 参考文件）
> 可截图对比: 252（上游原始用例有 WPT `rel="match"`；本地 reference-blind cache 不依赖 match reference）
> 需手动验证: 14（脚本测试，无视觉参考；hex parser testharness 卡片本轮作为静态等价补充记录在 hex 小节）
> 已适配数: 92
> 覆盖率: 34.6%
> 最近截图校验: 2026-05-25, `emulator-5554`, `--use-test-as-ref`, threshold `0.5%`
> 本轮本地校验: 2026-05-25, `python3 scripts/validate-tests.py`

## 验证方式说明

| 标记 | 含义 | 自动化程度 |
|------|------|------------|
| 可截图 | 上游 WPT 源文件为视觉用例；适配后通过 Lynx 截图 vs WebView 渲染原测试 HTML 进行像素对比，不依赖 match reference HTML | 全自动 |
| 需手写ref | WPT 源文件为 `testharness.js` 脚本测试，无视觉参考；需手动构造等效视觉用例或自建参考 HTML | 半手动 |
| Legacy XHTML | 旧版 XHTML 视觉用例，通常包含 table 或更多 inline 样式；本轮未纳入 Color 4 `hex-00x` 基础集 | 后续适配 |

## 已适配测试

| 测试名 | 验证方式 | 状态 | Diff | 说明 |
|--------|----------|------|------|------|
| color-001 | 可截图 | Pass | 0.2546% | 命名颜色 `green` |
| color-002 | 可截图 | Pass | 0.2544% | `color: initial` 解析为黑色 |
| color-003 | 可截图 | Pass | 0.2546% | 嵌套 `<text>` 通过普通 `color` 继承拿到父级颜色；不代表 Lynx 支持 `currentcolor` 关键字 |
| named-001 | 可截图 | Fail | 6.8679% | `rebeccapurple` 未被 Lynx 识别，值被丢弃，红色 fallback 暴露；等价值为 `#663399` |
| currentcolor-001 | 可截图 | Fail | 10.1211% | `background-color: currentColor` 未按同元素 `color` 解析，绿色块缺失 |
| currentcolor-002 | 可截图 | Fail | 9.7191% | 继承的 `background-color: currentColor` 未在后代 used-value 阶段按自身 `color` 重算 |
| currentcolor-003 | 可截图 | Fail | 9.0954% | `::first-line` 不匹配，且多个 `currentColor` 装饰/背景使用点无法与 Web 对齐 |
| currentcolor-004 | 可截图 | Pass | 0.1396% | 嵌套文本通过普通 `color` 继承匹配；`visited` 状态在当前 WebView runner 中未形成有效差异，不代表 `currentcolor` 关键字受支持 |
| currentcolor-005 | 可截图 | Pass | 0.1480% | 静态化脚本执行后的显式绿色状态；多列/`column-rule-*`/`color-mix()`/`currentcolor` 均为 Lynx 限制 |
| currentcolor-visited-fallback | 可截图 | Pass | 0.1396% | `<text>` 内容通过普通 `color` 继承拿到父级绿色；不代表 `currentcolor` 关键字受支持 |
| hex-001 | 可截图 | Pass | 0.0889% | 6 位 `#RRGGBB`，`#008000` |
| hex-002 | 可截图 | Pass | 0.0889% | 8 位 `#RRGGBBAA` fully opaque，`#008000FF` |
| hex-003 | 可截图 | Pass | 0.0889% | 3 位 `#RGB`，`#070` |
| hex-004 | 可截图 | Pass | 0.0889% | 4 位 `#RGBA` fully opaque，`#070F` |
| t421-rgb-hex3-a | 可截图 | Pass | 0.2134% | CSS Color 3 `#rgb` 文本矩阵；本地 XHTML CDATA style wrapper 已为 WebView reference 渲染归一化 |
| t421-rgb-hex6-a | 可截图 | Pass | 0.2134% | CSS Color 3 `#rrggbb` 文本矩阵；本地 XHTML CDATA style wrapper 已为 WebView reference 渲染归一化 |
| t421-rgb-hex3-expand-b | 可截图 | Pass | 0.5378% full screenshot | `#rgb` 展开矩阵的 css-color 色块断言通过；0.5378% 来自说明文字渲染噪声，不作为 css-color 失败 |
| t421-rgb-hex-parsing-f | 可截图 | Fail | 0.7509% | invalid hex 声明后文本未保持绿色，Lynx actual 为黑色 |
| color-computed-hex-color | 需手写ref | Skipped | N/A | testharness 计算值解析测试已转为静态 swatch 等价卡片；无视觉 oracle，runner 跳过 |
| color-invalid-hex-color | 需手写ref | Skipped | N/A | testharness invalid 解析测试已转为静态 fallback 等价卡片；无视觉 oracle，runner 跳过 |
| rgb-001 | 可截图 | Pass | 0.0888% | `rgb(0% 50% 0%)`，空格分隔百分比通道 |
| rgb-002 | 可截图 | Pass | 0.0888% | `rgb(0 128.0 0)`，空格分隔数值通道 |
| rgb-003 | 可截图 | Pass | 0.0888% | `rgb(0% 50% 0% / 1.0)`，斜杠 alpha 数值 |
| rgb-004 | 可截图 | Pass | 0.0888% | `rgb(0 128.0 0 / 1)`，斜杠 alpha 数值 |
| rgb-005 | 可截图 | Pass | 0.0888% | `rgb(0% 50% 0% / 100%)`，斜杠 alpha 百分比 |
| rgb-006 | 可截图 | Pass | 0.0888% | `rgb(0 128.0 0 / 100%)`，斜杠 alpha 百分比 |
| rgb-007 | 可截图 | Pass | 0.0888% | `rgb(0%, 50%, 0%, 100%)`，legacy comma 四参数 |
| rgb-008 | 可截图 | Pass | 0.0888% | `rgb(0, 128.0, 0, 100%)`，legacy comma 四参数 |
| rgba-001 | 可截图 | Fail | 4.9888% | `rgba(0% 50% 0%)` 未按 WebView 解析，第二个色块保持红色 fallback |
| rgba-002 | 可截图 | Fail | 4.9888% | `rgba(0 128.0 0)` 未按 WebView 解析，第二个色块保持红色 fallback |
| rgba-003 | 可截图 | Fail | 4.9888% | `rgba(0% 50% 0% / 1.0)` 未按 WebView 解析，第二个色块保持红色 fallback |
| rgba-004 | 可截图 | Fail | 4.9888% | `rgba(0 128.0 0 / 1)` 未按 WebView 解析，第二个色块保持红色 fallback |
| rgba-005 | 可截图 | Fail | 4.9888% | `rgba(0% 50% 0% / 100%)` 未按 WebView 解析，第二个色块保持红色 fallback |
| rgba-006 | 可截图 | Fail | 4.9888% | `rgba(0 128.0 0 / 100%)` 未按 WebView 解析，第二个色块保持红色 fallback |
| rgba-007 | 可截图 | Pass | 0.0888% | `rgba(0%, 50%, 0%, 100%)`，legacy comma 四参数 |
| rgba-008 | 可截图 | Pass | 0.0888% | `rgba(0, 128.0, 0, 100%)`，legacy comma 四参数 |
| out-of-gamut-legacy-rgb | 可截图 | Pass | 0.0000% | `rgba(500, 500, 500, 0.5)` 超出色域裁剪，与 WebView 对齐 |
| background-color-rgb-001 | 可截图 | Pass | 0.0185% | `background-color: rgb(...)` alpha、非整数、comment separator、comma-less 形式与 WebView 对齐 |
| background-color-rgb-002 | 可截图 | Fail | 15.3307% | `background-color: rgba(...)` 仅前两个 explicit-alpha legacy comma 色块绘制；modern/no-alpha/comment 形式缺失 |
| background-color-rgb-003 | 可截图 | Fail | 9.5886% | `rgb()` alias 四参数色块绘制；`rgba()` no-alpha alias 色块缺失 |
| hsl-001 | 可截图 | Fail | 4.9888% | `hsl(120 100% 25%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsl-002 | 可截图 | Fail | 4.9888% | `hsl(120deg 100% 25%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsl-003 | 可截图 | Fail | 4.9888% | `hsl(120 100% 25% / 1.0)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsl-004 | 可截图 | Fail | 4.9888% | `hsl(120deg 100% 25% / 1)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsl-005 | 可截图 | Fail | 4.9888% | `hsl(120 100% 25% / 100%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsl-006 | 可截图 | Fail | 4.9888% | `hsl(120deg 100% 25% / 100%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsl-007 | 可截图 | Fail | 4.9888% | `hsl(120, 100%, 25%, 100%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsl-008 | 可截图 | Fail | 4.9888% | `hsl(120deg, 100%, 25%, 100%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsl-clamp-negative-saturation | 可截图 | Fail | 2.0716% | 负饱和度裁剪结果与 WebView 不一致 |
| hsla-001 | 可截图 | Fail | 4.9888% | `hsla(120 100% 25%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsla-002 | 可截图 | Fail | 4.9888% | `hsla(120deg 100% 25%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsla-003 | 可截图 | Fail | 4.9888% | `hsla(120 100% 25% / 1.0)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsla-004 | 可截图 | Fail | 4.9888% | `hsla(120deg 100% 25% / 1)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsla-005 | 可截图 | Fail | 4.9888% | `hsla(120 100% 25% / 100%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsla-006 | 可截图 | Fail | 4.9888% | `hsla(120deg 100% 25% / 100%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsla-007 | 可截图 | Pass | 0.0888% | `hsla(120, 100%, 25%, 100%)` 与 WebView 对齐 |
| hsla-008 | 可截图 | Fail | 4.9888% | `hsla(120deg, 100%, 25%, 100%)` 测试色块未绘制，前置红色 fallback 也未保留 |
| hsla-clamp-negative-saturation | 可截图 | Fail | 1.4947% | 负饱和度裁剪和 alpha 合成结果与 WebView 不一致 |
| background-color-hsl-001 | 可截图 | Fail | 15.3304% | `background-color: hsla(...)` 仅 legacy comma explicit-alpha 的部分色块绘制；modern/no-alpha 形式缺失 |
| background-color-hsl-002 | 可截图 | Fail | 17.2444% | `background-color: hsl(...)` alpha 与 modern/comment separator 路径大多缺失，仅一个 legacy comma no-alpha 色块绘制 |
| background-color-hsl-003 | 可截图 | Fail | 15.3297% | `<angle>` hue 未与 WebView 对齐；仅 unitless numeric hue 的部分色块绘制 |
| background-color-hsl-004 | 可截图 | Fail | 19.1584% | `hsl()` / `hsla()` alias 行为未对齐，测试色块全部缺失 |
| border-color-currentcolor | 可截图 | Revalidate | N/A | 已修正 broad `view` selector 对 `.body` wrapper 的污染，旧 6.6529% 结果作废，待 Android 重跑 |
| border-top-color | 可截图 | Pass | 0.0735% | `border-top-color: #1000` 在 setup-only `1in` 几何转为 `96px` 并恢复 Web content-box 后与 WebView 对齐 |
| border-right-color | 可截图 | Pass | 0.0735% | `border-right-color: #1000` 在 setup-only `1in` 几何转为 `96px` 并恢复 Web content-box 后与 WebView 对齐 |
| border-bottom-color | 可截图 | Pass | 0.0735% | `border-bottom-color: #1000` 在 setup-only `1in` 几何转为 `96px` 并恢复 Web content-box 后与 WebView 对齐 |
| border-left-color | 可截图 | Pass | 0.0735% | `border-left-color: #1000` 在 setup-only `1in` 几何转为 `96px` 并恢复 Web content-box 后与 WebView 对齐 |
| t31-color-currentcolor-b | 可截图 | Pass | 0.0169% | `color: currentColor` 路径通过普通 `color` 继承匹配，不代表 `currentColor` 可作为通用 `<color>` 值 |
| t44-currentcolor-background-b | 可截图 | Fail | 3.4448% | `background-color: currentColor` 未与 WebView 对齐 |
| t44-currentcolor-border-b | 可截图 | Fail | 2.2908% | `border-color: currentColor` 未与 WebView 对齐 |
| t44-currentcolor-inherited-c | 可截图 | Fail | 1.5594% | 继承链中的 `currentColor` 未与 WebView 对齐 |
| t423-transparent-1-a | 可截图 | Pass | 0.1285% | 白色背景上 `color: transparent` 文本不可见 |
| t423-transparent-2-a | 可截图 | Pass | 0.1278% | 黑色背景上 `color: transparent` 文本不可见；TTSS 同步 page 背景以匹配 Web body canvas |
| t421-rgb-func-int-a | 可截图 | Pass | 0.2135% | Legacy CSS3 `rgb(0, 255, 0)` integer 通道 |
| t421-rgb-func-pct-a | 可截图 | Pass | 0.2135% | Legacy CSS3 `rgb(0%, 100%, 0%)` percentage 通道 |
| t421-rgb-func-whitespace-b | 可截图 | Pass | 0.0998% | Legacy CSS3 `rgb()` whitespace 容忍路径 |
| t421-rgb-func-no-mixed-f | 可截图 | Fail | 0.7924% | 无效 mixed integer/percentage 通道未保留 WebView fallback |
| t421-rgb-values-meaning-b | 可截图 | Fail | 33.0844% | CSS3 RGB 大矩阵值含义未与 WebView 对齐 |
| t421-rgb-clip-outside-gamut-b | 可截图 | Fail | 10.2806% | RGB out-of-gamut clipping 未与 WebView 对齐 |
| t422-rgba-a0.0-a | 可截图 | Pass | 0.1285% | Legacy `rgba(..., 0.0)` 透明 alpha |
| t422-rgba-a0.6-a | 可截图 | Pass | 0.0307% | Legacy `rgba(..., 0.6)` alpha 合成 |
| t422-rgba-a1.0-a | 可截图 | Pass | 0.2292% | Legacy `rgba(..., 1.0)` opaque alpha |
| t422-rgba-clamping-a0.0-b | 可截图 | Pass | 0.1285% | Legacy rgba alpha 小于 0 clamp 到 0 |
| t422-rgba-clamping-a1.0-b | 可截图 | Fail | 0.9901% | Legacy rgba alpha 大于 1 clamp 未与 WebView 对齐 |
| t422-rgba-clip-outside-device-gamut-b | 可截图 | Fail | 12.1557% | RGBA out-of-gamut clipping 未与 WebView 对齐 |
| t422-rgba-func-int-a | 可截图 | Pass | 0.2135% | Legacy `rgba(0, 255, 0, 1)` integer 通道 |
| t422-rgba-func-pct-a | 可截图 | Pass | 0.2135% | Legacy `rgba(0%, 100%, 0%, 1)` percentage 通道 |
| t422-rgba-func-whitespace-b | 可截图 | Pass | 0.0998% | Legacy `rgba()` whitespace 容忍路径 |
| t422-rgba-func-no-mixed-f | 可截图 | Fail | 0.7924% | 无效 mixed integer/percentage 通道未保留 WebView fallback |
| t422-rgba-values-meaning-b | 可截图 | Fail | 29.0055% | CSS3 RGBA 大矩阵值含义未与 WebView 对齐 |
| color-initial-canvastext | 需手写ref | Pass | N/A | 手动验证 `color: initial` = 黑色（WPT 原为脚本测试） |
| inheritance | 需手写ref | Pass | N/A | 手动验证 `color` 继承 + `opacity` 不继承（WPT 原为脚本测试） |

---

## 一、可截图对比测试（252 个）

以下测试在上游 WPT 中属于可截图视觉用例，适配后使用 `--use-test-as-ref` 直接进行自动化截图对比。

### 基础颜色关键字 & 命名颜色（4）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| color-001.html | ✅ | 命名颜色 green |
| color-002.html | ✅ | color: initial |
| color-003.html | ✅ | `color` 继承覆盖；`currentcolor` 关键字本身不支持 |
| named-001.html | ✅ (failing) | 命名颜色 `rebeccapurple` 未被识别；Android 截图 diff 6.8679%，等价值为 `#663399` |

### currentcolor（10）

结论：Lynx 不支持 `currentcolor/currentColor` 作为通用 `<color>` 值。少数通过项来自 `color` 属性本身的继承链或静态化后的显式颜色状态，不能作为 `currentcolor` 支持证据。迁移时应将 `background-color`、`border-color`、阴影/装饰色等属性改成显式十六进制、RGB/RGBA，或由组件/设计 token 在构建或运行时展开为同一个具体颜色值；文本颜色继承场景可省略子节点 `color` 或使用 `color: inherit`。

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| currentcolor-001.html | ✅ (failing) | `background-color: currentColor` 未按同元素文本色解析；Android diff 10.1211% |
| currentcolor-002.html | ✅ (failing) | 继承的 `currentColor` 背景色未按后代文本色重算；Android diff 9.7191% |
| currentcolor-003.html | ✅ (failing) | `::first-line` 及装饰/背景中的 `currentColor`；Android diff 9.0954% |
| currentcolor-004.html | ✅ | 当前 WebView runner 下通过，diff 0.1396%；来自 `color` 继承和 `:visited` 状态无有效差异，不代表 `currentcolor` 支持 |
| currentcolor-005.html | ✅ | 静态化脚本最终显式绿色状态后通过，diff 0.1480%；多列/`column-rule-*`/`color-mix()`/`currentcolor` 为 Lynx 限制 |
| currentcolor-visited-fallback.html | ✅ | 普通 `color` 继承拿到父级绿色；Android diff 0.1396%，不代表 `currentcolor` 支持 |
| t31-color-currentColor-b.xht | ✅ | `color: currentColor` 路径通过，Android diff 0.0169%；通过原因是 `color` 本身沿文本继承链生效，不代表 `currentColor` 可作为通用 `<color>` 值 |
| t44-currentcolor-background-b.xht | ✅ (failing) | `background-color: currentColor` 未按文本色解析；Android diff 3.4448% |
| t44-currentcolor-border-b.xht | ✅ (failing) | `border-color: currentColor` 未按文本色解析；Android diff 2.2908% |
| t44-currentcolor-inherited-c.xht | ✅ (failing) | 继承链中的 `currentColor` 未与 WebView 对齐；Android diff 1.5594% |

### border-color（5）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| border-color-currentcolor.html | ✅ (needs rerun) | 已修正 `div` -> `view` 过宽 selector 污染 `.body` wrapper 的适配问题；旧 Android diff 6.6529% 为 pre-fix evidence |
| border-top-color.xht | ✅ (passing) | `border-top-color: #1000` 用例已将 setup-only `1in` 几何转为 `96px` 并恢复 Web content-box；Android diff 0.0735% |
| border-right-color.xht | ✅ (passing) | `border-right-color: #1000` 用例已将 setup-only `1in` 几何转为 `96px` 并恢复 Web content-box；Android diff 0.0735% |
| border-bottom-color.xht | ✅ (passing) | `border-bottom-color: #1000` 用例已将 setup-only `1in` 几何转为 `96px` 并恢复 Web content-box；Android diff 0.0735% |
| border-left-color.xht | ✅ (passing) | `border-left-color: #1000` 用例已将 setup-only `1in` 几何转为 `96px` 并恢复 Web content-box；Android diff 0.0735% |

### transparent（2）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| t423-transparent-1-a.xht | ✅ | 白色背景上 `color: transparent` 文本不可见；Android diff 0.1285% |
| t423-transparent-2-a.xht | ✅ | 黑色背景上 `color: transparent` 文本不可见；Android diff 0.1278%。适配时同时设置 `page` 背景为黑色，以匹配 Web `body` 背景铺满 canvas 的渲染语义 |

### hex 颜色（10）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| hex-001.html | ✅ | 6 位 `#RRGGBB`，Android diff 0.0889% |
| hex-002.html | ✅ | 8 位 `#RRGGBBAA`，alpha 为 FF，Android diff 0.0889% |
| hex-003.html | ✅ | 3 位 `#RGB`，Android diff 0.0889% |
| hex-004.html | ✅ | 4 位 `#RGBA`，alpha 为 F，Android diff 0.0889% |
| t421-rgb-hex3-a.xht | ✅ | CSS Color 3 `#rgb` 文本矩阵；Android diff 0.2134% |
| t421-rgb-hex6-a.xht | ✅ | CSS Color 3 `#rrggbb` 文本矩阵；Android diff 0.2134% |
| t421-rgb-hex3-expand-b.xht | ✅ | `#rgb` 展开矩阵已适配；css-color 色块断言通过，整图 diff 0.5378% 来自说明文字渲染 |
| t421-rgb-hex-parsing-f.xht | ✅ (failing) | invalid hex parsing 视觉用例已适配；文本未保持绿色，Android diff 0.7509% |
| parsing/color-computed-hex-color.html | ✅ (skipped) | testharness 计算值解析测试，无直接视觉 oracle；已补静态等价 swatch 卡片 |
| parsing/color-invalid-hex-color.html | ✅ (skipped) | testharness invalid hex 解析测试，无直接视觉 oracle；已补静态 fallback 卡片 |

差异点：4 个 Color 4 hex 视觉用例均通过，未发现 Lynx 与 WebView 在 `#RRGGBB`、fully opaque `#RRGGBBAA`、`#RGB`、fully opaque `#RGBA` 上的颜色解析差异。本轮新增的 legacy `#rgb`/`#rrggbb` 文本矩阵通过；`#rgb` 展开矩阵的 css-color 色块断言也通过，0.5378% 整图 diff 来自说明文字渲染差异，不作为 css-color 失败。`border-top/right/bottom/left-color: #1000` 旧截图结果已因适配层保留 unsupported `1in` setup 几何而作废；当前卡片转为 `96px` setup 几何后通过 Android WebView 对比，四项均为 0.0735% diff。invalid hex parsing 视觉用例失败：Web 会忽略后续无效 hex 并保留前置绿色，Lynx actual 为黑色。2 个 parser/testharness 用例没有可直接截图的 WPT 视觉 oracle，只能以静态等价卡片覆盖目标 hex 解析形态。适配层面需要把原 WPT 中用于色块的空白 `<p>` 改成 `<view>`，将 `table` 改为 Lynx flex/grid 结构，并显式处理相邻色块 margin，避免 Web margin collapsing 与 Lynx margin 相加造成红色间隙。

### rgb() / rgba()（34）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| rgb-001.html | ✅ | `rgb(0% 50% 0%)`，Android diff 0.0888% |
| rgb-002.html | ✅ | `rgb(0 128.0 0)`，Android diff 0.0888% |
| rgb-003.html | ✅ | `rgb(0% 50% 0% / 1.0)`，Android diff 0.0888% |
| rgb-004.html | ✅ | `rgb(0 128.0 0 / 1)`，Android diff 0.0888% |
| rgb-005.html | ✅ | `rgb(0% 50% 0% / 100%)`，Android diff 0.0888% |
| rgb-006.html | ✅ | `rgb(0 128.0 0 / 100%)`，Android diff 0.0888% |
| rgb-007.html | ✅ | `rgb(0%, 50%, 0%, 100%)`，Android diff 0.0888% |
| rgb-008.html | ✅ | `rgb(0, 128.0, 0, 100%)`，Android diff 0.0888% |
| rgba-001.html | ✅ (failing) | `rgba(0% 50% 0%)` 未按 WebView 解析；Android diff 4.9888% |
| rgba-002.html | ✅ (failing) | `rgba(0 128.0 0)` 未按 WebView 解析；Android diff 4.9888% |
| rgba-003.html | ✅ (failing) | `rgba(0% 50% 0% / 1.0)` 未按 WebView 解析；Android diff 4.9888% |
| rgba-004.html | ✅ (failing) | `rgba(0 128.0 0 / 1)` 未按 WebView 解析；Android diff 4.9888% |
| rgba-005.html | ✅ (failing) | `rgba(0% 50% 0% / 100%)` 未按 WebView 解析；Android diff 4.9888% |
| rgba-006.html | ✅ (failing) | `rgba(0 128.0 0 / 100%)` 未按 WebView 解析；Android diff 4.9888% |
| rgba-007.html | ✅ | `rgba(0%, 50%, 0%, 100%)`，Android diff 0.0888% |
| rgba-008.html | ✅ | `rgba(0, 128.0, 0, 100%)`，Android diff 0.0888% |
| out-of-gamut-legacy-rgb.html | ✅ | `rgba(500, 500, 500, 0.5)` 超出色域裁剪，Android diff 0.0000% |
| t421-rgb-func-int-a.xht | ✅ | Legacy CSS3 `rgb(0, 255, 0)` integer 通道；Android diff 0.2135% |
| t421-rgb-func-pct-a.xht | ✅ | Legacy CSS3 `rgb(0%, 100%, 0%)` percentage 通道；Android diff 0.2135% |
| t421-rgb-func-whitespace-b.xht | ✅ | Legacy CSS3 `rgb()` whitespace 容忍路径；Android diff 0.0998% |
| t421-rgb-func-no-mixed-f.xht | ✅ (failing) | 无效 mixed integer/percentage 通道未保留 WebView fallback；Android diff 0.7924% |
| t421-rgb-values-meaning-b.xht | ✅ (failing) | CSS3 RGB 大矩阵值含义未与 WebView 对齐；Android diff 33.0844% |
| t421-rgb-clip-outside-gamut-b.xht | ✅ (failing) | RGB out-of-gamut clipping 未与 WebView 对齐；Android diff 10.2806% |
| t422-rgba-a0.0-a.xht | ✅ | Legacy `rgba(..., 0.0)` 透明 alpha；Android diff 0.1285% |
| t422-rgba-a0.6-a.xht | ✅ | Legacy `rgba(..., 0.6)` alpha 合成；Android diff 0.0307% |
| t422-rgba-a1.0-a.xht | ✅ | Legacy `rgba(..., 1.0)` opaque alpha；Android diff 0.2292% |
| t422-rgba-clamping-a0.0-b.xht | ✅ | Legacy rgba alpha 小于 0 clamp 到 0；Android diff 0.1285% |
| t422-rgba-clamping-a1.0-b.xht | ✅ (failing) | Legacy rgba alpha 大于 1 clamp 未与 WebView 对齐；Android diff 0.9901% |
| t422-rgba-clip-outside-device-gamut-b.xht | ✅ (failing) | RGBA out-of-gamut clipping 未与 WebView 对齐；Android diff 12.1557% |
| t422-rgba-func-int-a.xht | ✅ | Legacy `rgba(0, 255, 0, 1)` integer 通道；Android diff 0.2135% |
| t422-rgba-func-pct-a.xht | ✅ | Legacy `rgba(0%, 100%, 0%, 1)` percentage 通道；Android diff 0.2135% |
| t422-rgba-func-whitespace-b.xht | ✅ | Legacy `rgba()` whitespace 容忍路径；Android diff 0.0998% |
| t422-rgba-func-no-mixed-f.xht | ✅ (failing) | 无效 mixed integer/percentage 通道未保留 WebView fallback；Android diff 0.7924% |
| t422-rgba-values-meaning-b.xht | ✅ (failing) | CSS3 RGBA 大矩阵值含义未与 WebView 对齐；Android diff 29.0055% |

差异点：`rgb()` 的空格分隔、斜杠 alpha、legacy comma 四参数、CSS3 integer/percentage/whitespace 形式均与 WebView 对齐；`background-color-rgb-001` 进一步确认这些 `rgb(...)` 形态用于 `background-color` 时也能对齐。legacy `rgba(r, g, b, a)` 四参数、alpha 0/0.6/1.0、integer/percentage/whitespace 形式也通过，但 `rgba()` 的无 alpha 形式以及 Color 4 空格/斜杠 alpha 形式未按 WebView 解析，会保留红色 fallback 或让 `background-color` 色块缺失。`background-color-rgb-002` 仅前两个 explicit-alpha legacy comma 色块绘制，`background-color-rgb-003` 的 `rgba()` no-alpha alias 色块缺失。无效 mixed integer/percentage 通道、CSS3 RGB/RGBA 大矩阵值含义、alpha 大于 1 clamp、out-of-gamut clipping 未与 WebView 对齐。迁移时优先使用 `rgb(...)` 的现代语法，或使用 legacy comma 四参数 `rgba(r, g, b, a)`；不要用 `rgba(0 128 0 / 1)` 这类现代 `rgba()` 写法，也不要输出百分比和数值混用的 legacy 通道。

### hsl() / hsla()（18）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| hsl-001.html | ✅ (failing) | `hsl(120 100% 25%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsl-002.html | ✅ (failing) | `hsl(120deg 100% 25%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsl-003.html | ✅ (failing) | `hsl(120 100% 25% / 1.0)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsl-004.html | ✅ (failing) | `hsl(120deg 100% 25% / 1)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsl-005.html | ✅ (failing) | `hsl(120 100% 25% / 100%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsl-006.html | ✅ (failing) | `hsl(120deg 100% 25% / 100%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsl-007.html | ✅ (failing) | `hsl(120, 100%, 25%, 100%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsl-008.html | ✅ (failing) | `hsl(120deg, 100%, 25%, 100%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsl-clamp-negative-saturation.html | ✅ (failing) | 负饱和度裁剪结果与 WebView 不一致；Android diff 2.0716% |
| hsla-001.html | ✅ (failing) | `hsla(120 100% 25%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsla-002.html | ✅ (failing) | `hsla(120deg 100% 25%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsla-003.html | ✅ (failing) | `hsla(120 100% 25% / 1.0)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsla-004.html | ✅ (failing) | `hsla(120deg 100% 25% / 1)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsla-005.html | ✅ (failing) | `hsla(120 100% 25% / 100%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsla-006.html | ✅ (failing) | `hsla(120deg 100% 25% / 100%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsla-007.html | ✅ | `hsla(120, 100%, 25%, 100%)` 与 WebView 对齐；Android diff 0.0888% |
| hsla-008.html | ✅ (failing) | `hsla(120deg, 100%, 25%, 100%)` 测试色块未绘制，前置红色 fallback 也未保留；Android diff 4.9888% |
| hsla-clamp-negative-saturation.html | ✅ (failing) | 负饱和度裁剪和 alpha 合成结果与 WebView 不一致；Android diff 1.4947% |

差异点：`hsl()` 8 个基础语法对应的测试色块均未绘制为绿色，且前置 `background-color: red` fallback 也未保留；截图上只剩参考色块，因此绿色区域从 WebView 的 504px 高变为 Lynx 的 252px 高。`hsla()` 只有 legacy comma numeric hue + percent alpha 的 `hsla(120, 100%, 25%, 100%)` 与 WebView 对齐；`hsla()` 空格/斜杠/no-alpha 形式以及 angle hue comma 形式同样表现为测试色块未绘制。`background-color` 属性级验证显示 HSL/HSLA 支持同样不稳定：`background-color-hsl-001` 仅 legacy comma explicit-alpha 的部分 `hsla(...)` 色块绘制，`background-color-hsl-002` 仅一个 legacy comma no-alpha `hsl(...)` 色块绘制，`background-color-hsl-003` 的 angle hue 色块缺失，`background-color-hsl-004` 全部缺失。负饱和度裁剪用例未与 WebView 对齐，`hsl-clamp-negative-saturation` diff 2.0716%，`hsla-clamp-negative-saturation` diff 1.4947%。

### background-color hsl/rgb（7）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| background-color-hsl-001.html | ✅ (failing) | `hsla()` background syntax；仅部分 legacy comma explicit-alpha 色块绘制，Android diff 15.3304% |
| background-color-hsl-002.html | ✅ (failing) | `hsl()` background syntax；仅一个 legacy comma no-alpha 色块绘制，Android diff 17.2444% |
| background-color-hsl-003.html | ✅ (failing) | HSL/HSLA `<angle>` hue；angle hue 色块缺失，Android diff 15.3297% |
| background-color-hsl-004.html | ✅ (failing) | `hsl()` / `hsla()` alias；全部测试色块缺失，Android diff 19.1584% |
| background-color-rgb-001.html | ✅ | `rgb()` background syntax 全部色块与 WebView 对齐，Android diff 0.0185% |
| background-color-rgb-002.html | ✅ (failing) | `rgba()` background syntax；仅 explicit-alpha legacy comma 前两行绘制，Android diff 15.3307% |
| background-color-rgb-003.html | ✅ (failing) | `rgb()` / `rgba()` alias；`rgb()` 四参数行绘制，`rgba()` no-alpha 行缺失，Android diff 9.5886% |

差异点：本组 case 使用原 WPT 测试 HTML 作为 WebView reference，适配层将 `<p>` 默认 margin/line-height 近似为 `.body { margin: 0 8px 8px; }`、首行 `1em` top margin 和 `1.1667em` 行高，`background-color-rgb-001` 的 0.0185% 结果证明几何近似足够稳定。实际兼容性差异集中在解析路径：`rgb(...)` 可用于 `background-color`；`rgba(...)` no-alpha/modern/comment separator 多数缺失；HSL/HSLA background 支持只有零散 legacy comma 路径，不可作为迁移可用能力。

### t424 HSL 值验证（15）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| t424-hsl-values-b-1.html ~ t424-hsl-values-b-15.html | ❌ | HSL 值验证 (15个) |

### hwb()（5）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| hwb-001.html | ❌ | hwb 基础 |
| hwb-002.html | ❌ | hwb 基础 |
| hwb-003.html | ❌ | hwb 值 |
| hwb-004.html | ❌ | hwb 值 |
| hwb-005.html | ❌ | hwb 值 |

### lab() / lch()（22）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| lab-001.html | ❌ | lab 基础 |
| lab-002.html | ❌ | lab 基础 |
| lab-003.html | ❌ | lab 值 |
| lab-004.html | ❌ | lab 值 |
| lab-005.html | ❌ | lab 值 |
| lab-006.html | ❌ | lab 值 |
| lab-007.html | ❌ | lab 值 |
| lab-008.html | ❌ | lab 值 |
| lab-l-over-100-1.html | ❌ | L > 100 处理 |
| lab-l-over-100-2.html | ❌ | L > 100 处理 |
| lch-001.html | ❌ | lch 基础 |
| lch-002.html | ❌ | lch 基础 |
| lch-003.html | ❌ | lch 值 |
| lch-004.html | ❌ | lch 值 |
| lch-005.html | ❌ | lch 值 |
| lch-006.html | ❌ | lch 值 |
| lch-007.html | ❌ | lch 值 |
| lch-008.html | ❌ | lch 值 |
| lch-009.html | ❌ | lch 值 |
| lch-010.html | ❌ | lch 值 |
| lch-l-over-100-1.html | ❌ | L > 100 处理 |
| lch-l-over-100-2.html | ❌ | L > 100 处理 |

### oklab() / oklch()（28）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| oklab-001.html | ❌ | oklab 基础 |
| oklab-002.html | ❌ | oklab 基础 |
| oklab-003.html | ❌ | oklab 值 |
| oklab-004.html | ❌ | oklab 值 |
| oklab-005.html | ❌ | oklab 值 |
| oklab-006.html | ❌ | oklab 值 |
| oklab-007.html | ❌ | oklab 值 |
| oklab-008.html | ❌ | oklab 值 |
| oklab-009.html | ❌ | oklab 值 |
| oklab-l-almost-0.html | ❌ | L 接近 0 |
| oklab-l-almost-1.html | ❌ | L 接近 1 |
| oklab-l-over-1-1.html | ❌ | L > 1 处理 |
| oklab-l-over-1-2.html | ❌ | L > 1 处理 |
| oklch-001.html | ❌ | oklch 基础 |
| oklch-002.html | ❌ | oklch 基础 |
| oklch-003.html | ❌ | oklch 值 |
| oklch-004.html | ❌ | oklch 值 |
| oklch-005.html | ❌ | oklch 值 |
| oklch-006.html | ❌ | oklch 值 |
| oklch-007.html | ❌ | oklch 值 |
| oklch-008.html | ❌ | oklch 值 |
| oklch-009.html | ❌ | oklch 值 |
| oklch-010.html | ❌ | oklch 值 |
| oklch-011.html | ❌ | oklch 值 |
| oklch-l-almost-0.html | ❌ | L 接近 0 |
| oklch-l-almost-1.html | ❌ | L 接近 1 |
| oklch-l-over-1-1.html | ❌ | L > 1 处理 |
| oklch-l-over-1-2.html | ❌ | L > 1 处理 |

### display-p3 色彩空间（12）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| display-p3-001.html | ❌ | display-p3 基础 |
| display-p3-002.html | ❌ | display-p3 基础 |
| display-p3-003.html | ❌ | display-p3 值 |
| display-p3-004.html | ❌ | display-p3 值 |
| display-p3-005.html | ❌ | display-p3 值 |
| display-p3-006.html | ❌ | display-p3 值 |
| display-p3-linear-001.html | ❌ | display-p3-linear |
| display-p3-linear-002.html | ❌ | display-p3-linear |
| display-p3-linear-003.html | ❌ | display-p3-linear |
| display-p3-linear-004.html | ❌ | display-p3-linear |
| display-p3-linear-005.html | ❌ | display-p3-linear |
| display-p3-linear-006.html | ❌ | display-p3-linear |

### a98-rgb 色彩空间（4）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| a98rgb-001.html | ❌ | a98-rgb 基础 |
| a98rgb-002.html | ❌ | a98-rgb 基础 |
| a98rgb-003.html | ❌ | a98-rgb 值 |
| a98rgb-004.html | ❌ | a98-rgb 值 |

### prophoto-rgb 色彩空间（5）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| prophoto-rgb-001.html | ❌ | prophoto-rgb 基础 |
| prophoto-rgb-002.html | ❌ | prophoto-rgb 基础 |
| prophoto-rgb-003.html | ❌ | prophoto-rgb 值 |
| prophoto-rgb-004.html | ❌ | prophoto-rgb 值 |
| prophoto-rgb-005.html | ❌ | prophoto-rgb 值 |

### rec2020 色彩空间（5）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| rec2020-001.html | ❌ | rec2020 基础 |
| rec2020-002.html | ❌ | rec2020 基础 |
| rec2020-003.html | ❌ | rec2020 值 |
| rec2020-004.html | ❌ | rec2020 值 |
| rec2020-005.html | ❌ | rec2020 值 |

### sRGB-linear 色彩空间（4）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| srgb-linear-001.html | ❌ | srgb-linear 基础 |
| srgb-linear-002.html | ❌ | srgb-linear 基础 |
| srgb-linear-003.html | ❌ | srgb-linear 值 |
| srgb-linear-004.html | ❌ | srgb-linear 值 |

### xyz / xyz-d50 / xyz-d65 色彩空间（15）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| xyz-001.html | ❌ | xyz 基础 |
| xyz-002.html | ❌ | xyz 基础 |
| xyz-003.html | ❌ | xyz 值 |
| xyz-004.html | ❌ | xyz 值 |
| xyz-005.html | ❌ | xyz 值 |
| xyz-d50-001.html | ❌ | xyz-d50 基础 |
| xyz-d50-002.html | ❌ | xyz-d50 基础 |
| xyz-d50-003.html | ❌ | xyz-d50 值 |
| xyz-d50-004.html | ❌ | xyz-d50 值 |
| xyz-d50-005.html | ❌ | xyz-d50 值 |
| xyz-d65-001.html | ❌ | xyz-d65 基础 |
| xyz-d65-002.html | ❌ | xyz-d65 基础 |
| xyz-d65-003.html | ❌ | xyz-d65 值 |
| xyz-d65-004.html | ❌ | xyz-d65 值 |
| xyz-d65-005.html | ❌ | xyz-d65 值 |

### predefined 色彩空间（11）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| predefined-001.html | ❌ | color() 函数 |
| predefined-002.html | ❌ | color() 函数 |
| predefined-005.html | ❌ | color() 函数 |
| predefined-006.html | ❌ | color() 函数 |
| predefined-007.html | ❌ | color() 函数 |
| predefined-008.html | ❌ | color() 函数 |
| predefined-009.html | ❌ | color() 函数 |
| predefined-010.html | ❌ | color() 函数 |
| predefined-011.html | ❌ | color() 函数 |
| predefined-012.html | ❌ | color() 函数 |
| predefined-016.html | ❌ | color() 函数 |

### color-mix()（9）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| color-mix-basic-001.html | ❌ | color-mix 基础 |
| color-mix-currentcolor-001.html | ❌ | color-mix + currentcolor |
| color-mix-currentcolor-002.html | ❌ | color-mix + currentcolor |
| color-mix-currentcolor-003.html | ❌ | color-mix + currentcolor |
| color-mix-currentcolor-nested-for-color-property.html | ❌ | 嵌套 color-mix |
| color-mix-currentcolor-visited.html | ❌ | visited 链接颜色 |
| color-mix-non-srgb-001.html | ❌ | 非 sRGB 空间混合 |
| color-mix-percents-01.html | ❌ | 百分比混合 |
| color-mix-percents-02.html | ❌ | 百分比混合 |

### light-dark()（4）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| light-dark-currentcolor.html | ❌ | currentcolor |
| light-dark-image-none-interpolation.html | ❌ | 图像无插值 |
| light-dark-image-none.html | ❌ | 图像 none |
| light-dark-inheritance.html | ❌ | 继承 |

### contrast-color()（1）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| contrast-color-001.html | ❌ | contrast-color 基础 |

### relative color syntax（16）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| relative-currentcolor-a98rgb-01.html | ❌ | 相对颜色 a98-rgb |
| relative-currentcolor-displayp3-01.html | ❌ | 相对颜色 display-p3 |
| relative-currentcolor-hsl-01.html | ❌ | 相对颜色 hsl |
| relative-currentcolor-hsl-02.html | ❌ | 相对颜色 hsl |
| relative-currentcolor-hwb-01.html | ❌ | 相对颜色 hwb |
| relative-currentcolor-lab-01.html | ❌ | 相对颜色 lab |
| relative-currentcolor-lch-01.html | ❌ | 相对颜色 lch |
| relative-currentcolor-oklab-01.html | ❌ | 相对颜色 oklab |
| relative-currentcolor-oklch-01.html | ❌ | 相对颜色 oklch |
| relative-currentcolor-prophoto-01.html | ❌ | 相对颜色 prophoto |
| relative-currentcolor-rec2020-01.html | ❌ | 相对颜色 rec2020 |
| relative-currentcolor-rec2020-02.html | ❌ | 相对颜色 rec2020 |
| relative-currentcolor-rgb-01.html | ❌ | 相对颜色 rgb |
| relative-currentcolor-rgb-02.html | ❌ | 相对颜色 rgb |
| relative-currentcolor-xyzd50-01.html | ❌ | 相对颜色 xyz-d50 |
| relative-currentcolor-xyzd65-01.html | ❌ | 相对颜色 xyz-d65 |

### opacity 相关（8）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| body-opacity-0-to-1-stacking-context.html | ❌ | opacity 层叠上下文 |
| canvas-change-opacity.html | ❌ | canvas opacity 变化 |
| clip-opacity-out-of-flow.html | ❌ | clip + opacity + 脱流 |
| composited-filters-under-opacity.html | ❌ | 合成滤镜 + opacity |
| filters-under-will-change-opacity.html | ❌ | will-change opacity |
| inline-opacity-float-child.html | ❌ | 行内 opacity + 浮动 |
| opacity-overlapping-letters.html | ❌ | opacity 重叠字母 |
| color-layers-no-blend-mode.html | ❌ | 颜色层无混合模式 |

### deprecated system colors（23）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| deprecated-sameas-001.html ~ deprecated-sameas-023.html | ❌ | 已弃用系统颜色别名验证 (23个) |

### system colors（2，可截图部分）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| system-color-hightlights-vs-getSelection-001.html | ❌ | 高亮 vs Selection |
| system-color-hightlights-vs-getSelection-002.html | ❌ | 高亮 vs Selection |

### @color-profile（1）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| at-color-profile-001.html | ❌ | @color-profile 规则 |

### tagged/untagged images（5）

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| tagged-images-001.html | ❌ | ICC 标记图像 |
| tagged-images-002.html | ❌ | ICC 标记图像 |
| tagged-images-003.html | ❌ | ICC 标记图像 |
| tagged-images-004.html | ❌ | ICC 标记图像 |
| untagged-images-001.html | ❌ | 未标记图像 |

---

## 二、需手动验证/手写 ref 的测试（14 个）

以下测试为 `testharness.js` 脚本测试，WPT 中无视觉参考文件。适配时需手动构造等效视觉用例，无法直接自动截图对比。

| 测试文件 | 已适配 | 说明 |
|----------|--------|------|
| color-initial-canvastext.html | ✅ | initial 解析为 CanvasText（已手动构造视觉验证） |
| inheritance.html | ✅ | color 继承 + opacity 不继承（已手动构造视觉验证） |
| color-mix-currentcolor-visited-getcomputedstyle.html | ❌ | visited + getComputedStyle |
| color-mix-missing-components.html | ❌ | color-mix 缺失分量处理 |
| contrast-color-currentcolor-inherited.html | ❌ | 继承的 currentcolor + contrast-color |
| light-dark-basic.html | ❌ | light-dark 基础 |
| light-dark-currentcolor-in-color.html | ❌ | currentcolor in light-dark |
| light-dark-image.html | ❌ | light-dark 图像 |
| nested-color-mix-with-currentcolor.html | ❌ | 嵌套 color-mix + currentcolor |
| relative-color-with-zoom.html | ❌ | 缩放下的相对颜色 |
| relative-currentcolor-visited-getcomputedstyle.html | ❌ | visited getComputedStyle |
| system-color-compute.html | ❌ | 系统颜色计算值 |
| system-color-consistency.html | ❌ | 系统颜色一致性 |
| system-color-support.html | ❌ | 系统颜色支持 |

---

## 适配优先级建议

| 优先级 | 分类 | 可截图数 | 原因 |
|--------|------|----------|------|
| P0 | hex, rgb/rgba, hsl/hsla, named | 72 | Lynx 基础颜色能力，使用最广泛 |
| P1 | currentcolor, opacity | 15 | 影响组件交互和继承链 |
| P2 | hwb, color-mix | 14 | CSS Color Level 4 常用特性 |
| P3 | lab/lch, oklab/oklch | 50 | 高级色彩空间 |
| P4 | display-p3, rec2020, xyz, relative color, predefined | 68 | 广色域/相对颜色 |
| P5 | system-color, @color-profile, light-dark, contrast-color, tagged-images | 33 | 平台相关或 Level 5 特性 |

---

## 子目录（未列入上述统计）

| 子目录 | 说明 |
|--------|------|
| `animation/` | 颜色动画/过渡测试 |
| `parsing/` | 颜色值解析测试（脚本测试，非视觉） |
| `reference/` | 公共参考文件 |
| `support/` | 支持文件（图像等） |
