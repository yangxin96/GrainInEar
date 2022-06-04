````
# 显示需要加 # ，Markdown中不需要加
代码块
代码块
```# 显示需要加 # ，Markdown中不需要加
````

内部链接
内部的、并以 .md or .html 结尾的链接，将会被转换成 <router-link> 用于 SPA 导航。

站内的每一个子文件夹都应当有一个 README.md 文件，它会被自动编译为 index.html。

TIP

在链接到一个文件夹的 index.html 时，确保你的链接以 / 结尾，否则该链接将导致 404。比如，用 /config/ 而不是 /config。

如果你想要链接到另一个 markdown 文件：

确保链接以 .html 或 .md 结尾；
确保路径大小写正确，因为路径的匹配是大小写敏感的。

示例
以如下的文件结构为例：
````
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
├─ README.md
├─ three.md
└─ four.md
````

````
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading anchor](/foo/#heading) <!-- 跳转到 foo/index.html 的特定 anchor 位置 -->
[foo - one](/foo/one.html) <!-- 具体文件可以使用 .html 结尾 -->
[foo - two](/foo/two.md) <!-- 也可以用 .md -->
---
````

├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │
│   ├── README.md
│   ├── guide (一般用户都在这个目录下创建网站指南,当然可以不用)
│   │   └── README.md （指南里面的具体内容）
│   └── config.md
│
└── package.json 项目初始化时，根目录下自动生成的配置文件,定义了项目的基本配置信息及需要依赖的各个模块、指定运行脚本命令的npm命令行缩写等。

````
---
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
