<div align="right"><sub><code>iCxin / qqmailcard</code></sub></div>

# qqmailcard

> 一份静态电子贺卡：信封、翻面卡片、留言与保存图片，源码可改成别的贺卡或邀请函。
> A static greeting card: envelope, flipping card, message and image save, hackable into any card or invitation.

| | |
|:--|:--|
| **状态** | 维护中 |
| **栈** | `HTML` · `CSS` · `JavaScript` |
| **平台** | 浏览器 |
| **许可** | 未声明 |

---

## 01 · 这是什么

QQ 邮箱贺卡的静态复刻，纯前端，没有构建链。页面是一个 `index.html`，样式在 `css/`，交互在 `js/`，图片在 `pic/`。仓库不含打包前的源码：`js/utils.js` 与 `js/vendor.js` 是 webpack 打包产物，`js/midautumn.js` 是入口 chunk。

## 02 · 界面与交互

- 信封封面：显示收件人昵称与“寄出”文字，页面初始为 `preview` 状态
- 卡片正反两面：正面放图片，背面放留言、署名与日期
- 背面图片区标注“点击更换图片”
- 底部两个按钮：`我也要发`、`保存图片`
- 长按保存：遮罩层提示“长按图片保存到相册 或 保存到QQ邮箱卡片纪念册”
- 主题与配色由 `#wholeContainer` 上的属性控制：`data-theme`、`data-envelopeNicknameColor`、`data-envelopeSendFieldColor`

## 03 · 运行

无需构建，直接打开 `index.html`。需要本地服务器时（例如在手机上访问）：

```bash
python -m http.server 8080
```

## 04 · 改成自己的贺卡

| 位置 | 改什么 |
|:--|:--|
| `index.html` | 收件人昵称、卡片留言、署名、日期等文本节点 |
| `pic/cue.png` | 卡片背景图 |
| `pic/envelope-withhead.png`、`pic/envelope-withouthead.png` | 信封图案 |
| `pic/frontend.png`、`pic/backend.png` | 卡片正面与背面图片 |
| `pic/saver.png` | 长按保存遮罩中展示的图片 |
| `css/common.css` | 版式、颜色与动画 |
| `css/fonts.css` | 字体声明 |
| `js/midautumn.js` | webpack 运行时入口 chunk |
| `js/utils.js`、`js/vendor.js` | 打包产物，不建议直接修改 |

## 05 · 设计取舍

- 图片全部是 PNG 切图，改配色要换图，不能只调 CSS 变量。
- 文案与结构耦合在 HTML 里，没有数据层；批量改文案要逐处编辑标记。
- 打包产物直接入库，克隆即可运行，代价是交互逻辑没有可读源码。

## 06 · 许可

仓库未附许可证文件。`pic/` 中的原卡片素材来自 QQ 邮箱，二次使用前请自行确认授权。

---

<div align="right"><sub>从像素到混凝土 · <a href="https://github.com/iCxin">iCxin</a></sub></div>
