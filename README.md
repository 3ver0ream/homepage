# 双语个人主页

这是一个使用 Jekyll 的极简个人主页源代码。基础页面包含首页、关于我、研究和博客，分别提供中文与英文版本。正文使用 Markdown 维护。

当前内容仅保留公开昵称 `3ver0ream` 和理论物理博士在读身份；个人介绍、联系方式、研究内容和论文列表使用占位文字。笔记模板放在 `_drafts` 中，默认不会发布到网站。

网站源代码和 GitHub Pages 发布流程已经准备好，目标仓库为 `https://github.com/3ver0ream/homepage`。在仓库的 **Settings → Pages** 中选择 **GitHub Actions**，发布流程完成后即可访问 `https://3ver0ream.github.io/homepage/`。

已经使用 Jekyll 4.4.1 完成静态构建，检查了八个双语栏目页面、内部链接、语言切换、资源路径与草稿排除。当前环境无法启动本地 HTTP 服务或浏览器检查，因此手机与桌面的视觉效果仍需在浏览器确认。源码包外的 `homepage-preview.html` 是基于实际构建页面生成的离线预览，可以直接打开并切换栏目和语言；它用于审阅，后续内容修改仍应在本目录的 Markdown 文件中进行。

## 目录

```text
personal-homepage/
├── _config.yml              # 网站配置
├── _data/
│   ├── profile.yml           # 中英文姓名与身份
│   └── navigation.yml        # 中英文导航
├── _layouts/                # 基础页面、博客列表、文章布局
├── _includes/               # 导航、语言切换、文章列表等
├── zh/                      # 中文基础页面
├── en/                      # 英文基础页面
├── _drafts/
│   └── note-template.md      # 未发布的写作模板
├── assets/                  # 样式和文章目录脚本
├── .github/workflows/       # GitHub Pages 自动发布流程
├── index.html               # 默认跳转到中文首页
├── 404.html                 # 双语错误页面
└── Gemfile                  # Jekyll 依赖
```

`_posts` 目录在发布第一篇文章时创建。`_site` 是 Jekyll 构建生成的网页目录，不用于直接编辑。

## 修改基础信息

在 `_data/profile.yml` 中修改中英文昵称和身份；在 `zh/` 与 `en/` 中修改对应页面的正文。昵称和身份由 Liquid 读取配置，首页与页脚会随之更新。

基础页面用相同的 `translation_key` 关联中英文版本。例如，中英文研究页的值都是 `research`。切换语言后会进入同一栏目的另一语言页面。

根地址 `/` 默认跳转到 `/zh/`。如需默认进入英文页面，将根目录 `index.html` 的 `meta` 跳转地址改为 `/en/`，保留 `relative_url` 过滤器。

## 写笔记

将 `_drafts/note-template.md` 复制成一个新文件，在 `_drafts` 中完成写作。文件开头 `---` 包围的内容称为 front matter，用于设置标题、语言等信息。

```yaml
---
layout: post
title: 我的第一篇笔记
date: 2026-10-04
lang: zh
translation_key: first-note
original: true
nav_key: blog
permalink: /zh/blog/first-note/
description: 这篇笔记的简短介绍。
categories: [笔记]
math: true
toc: true
---
```

- `lang`：正文语言，使用 `zh` 或 `en`。
- `translation_key`：文章的唯一标识；同一篇文章的译文使用相同值，不同文章使用不同值。
- `original`：原文使用 `true`，译文使用 `false`。每篇文章应恰有一份原文。
- `permalink`：文章地址，建议分别使用 `/zh/blog/文章标识/` 与 `/en/blog/文章标识/`。
- `description`：在文章列表中显示的简介。
- `categories`：分类，可自行替换或删去。
- `math`：需要公式时设为 `true`。公式由 MathJax 渲染，浏览器需要能够加载其 CDN 脚本。
- `toc`：设为 `true` 时根据正文的二、三级标题生成文章目录。

正文可以使用 Markdown 标题、代码块和图片。网站支持代码高亮。公式严格使用行内 `$...$` 与行间 `$$...$$`，行间公式与正文之间保留空行。

发布时创建 `_posts` 目录，把完成的文件移入其中，并采用 `YYYY-MM-DD-文章标识.md` 文件名，例如 `_posts/2026-10-04-first-note.md`。同步修改 front matter 中的日期和文章地址。普通构建不会包含 `_drafts`；未来日期的文章也不会被默认发布。

## 双语笔记

每篇笔记可以先只发布一种语言。有译文时，再创建第二个 Markdown 文件，例如：

```yaml
---
layout: post
title: My first note
date: 2026-10-04
lang: en
translation_key: first-note
original: false
nav_key: blog
permalink: /en/blog/first-note/
description: A short description of this note.
math: true
toc: true
---
```

将译文保存为 `_posts/2026-10-04-first-note-en.md`。原文和译文通过 `translation_key` 关联，文件名不同，文章地址也不同。

中英文博客列表均按原文日期排序，每篇笔记只出现一次。在当前语言有对应版本时优先显示该版本，否则显示原文，并标明正文语言。有译文的文章提供语言切换链接；单语文章不显示文章语言切换链接。

## 本地预览

需要自行安装 Ruby 和 Bundler。本项目不捆绑 Ruby；Windows 下可以使用 RubyInstaller with Devkit，再通过 `gem install bundler` 安装 Bundler。GitHub Actions 使用 Ruby 3.3，也可用同一版本进行本地预览。

在 `personal-homepage` 目录打开终端，依次运行：

```powershell
bundle install
bundle exec jekyll serve
```

当前配置对应目标仓库 `https://github.com/3ver0ream/homepage`，`url` 为 `https://3ver0ream.github.io`，`baseurl` 为 `/homepage`。浏览器打开 `http://localhost:4000/homepage/`。修改源文件后，Jekyll 会重新构建；修改 `_config.yml` 后需要重新启动服务。

若要在本地查看草稿：

```powershell
bundle exec jekyll serve --drafts
```

仅构建、不启动服务器：

```powershell
bundle exec jekyll build
```

## 发布到 GitHub Pages

1. 打开已有的 `3ver0ream/homepage` 仓库，无需重新创建。GitHub Free 的 Pages 使用公开仓库；私有仓库需要支持 Pages 的付费计划。
2. 将 `personal-homepage` 文件夹内的内容放在仓库根目录，包括 `.github`，推送到 `main` 分支。
3. 打开仓库的 **Settings → Pages**，将 **Source** 设为 **GitHub Actions**。
4. 设置 `_config.yml` 中的 `url` 与 `baseurl`。用户主页通常填写 `url: "https://<你的用户名>.github.io"`、`baseurl: ""`；项目主页填写同一 `url` 与 `baseurl: "/<仓库名>"`。
5. 提交修改后，**Actions** 中的发布流程会构建并部署页面。首次部署完成后，可在 **Settings → Pages** 查看实际网址。

流程也可以在 Actions 页面手动触发。构建步骤从 GitHub Pages 配置读取部署路径，并传给 Jekyll；页面内部链接和资源引用通过 `relative_url` 适配该路径。

发布前检查中英文页面、语言切换、手机排版与文章链接。将占位文字替换为你愿意公开的信息即可，不需要公开完整简历。
