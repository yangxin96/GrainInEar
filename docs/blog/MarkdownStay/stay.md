# Markdown 拓展

## Header Anchors

所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 [`markdown.anchor`](https://v0.vuepress.vuejs.org/zh/config/#markdown-anchor) 来配置。

## 链接

#### 内部链接

内部的、并以 `.md` or `.html` 结尾的链接，将会被转换成 `<router-link>` 用于 SPA 导航。

站内的每一个子文件夹都应当有一个 `README.md` 文件，它会被自动编译为 `index.html`。




::: tip
在链接到一个文件夹的 `index.html` 时，确保你的链接以 `/` 结尾，否则该链接将导致 404。比如，用 `/config/` 而不是 `/config`。
:::

如果你想要链接到另一个 markdown 文件：

1. 确保链接以 `.html` 或 `.md` 结尾；
2. 确保路径大小写正确，因为路径的匹配是大小写敏感的。


#### 示例

以如下的文件结构为例：

```text
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
```


```text
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading anchor](/foo/#heading) <!-- 跳转到 foo/index.html 的特定 anchor 位置 -->
[foo - one](/foo/one.html) <!-- 具体文件可以使用 .html 结尾 -->
[foo - two](/foo/two.md) <!-- 也可以用 .md -->
```

#### 外部链接

外部的链接将会被自动地设置为 `target="_blank" rel="noopener noreferrer"`:

- [vuejs.org](https://vuejs.org/)
- [VuePress on GitHub](https://github.com/vuejs/vuepress)

你可以自定义通过配置 [config.markdown.externalLinks](https://v0.vuepress.vuejs.org/zh/config/#markdown-externallinks) 来自定义外部链接的特性。

## Front Matter

VuePress 提供了对 [YAML front matter](https://jekyllrb.com/docs/frontmatter/) 开箱即用的支持:

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

这些数据可以在当前页的正文中使用，在任意的自定义或主题组件中，它可以通过 `$page` 来访问。

`title` 和 `lang` 的 meta 将会被自动地注入到当前的页面中，当然你也可以指定一些额外需要注入的 meta：

```yaml
---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

#### 其他格式的 Front Matter

除了 YAML 之外，VuePress 也支持 JSON 或者 [TOML](https://github.com/toml-lang/toml) 格式的 front matter。

JSON front matter 需要以花括号开头和结尾：

```text
---
{
  "title": "Blogging Like a Hacker",
  "lang": "en-US"
}
---
```

TOML front matter 需要显式地标注为 TOML：

```text
---toml
title = "Blogging Like a Hacker"
lang = "en-US"
---
```

## GitHub 风格的表格

#### **Input**

```text
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

#### **Output**

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji

**Input**

```text
:tada: :100:
```

**Output**

🎉 💯

## 目录

**Input**

```text
[[toc]]
```

**Output**



- [Header Anchors](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#header-anchors)
- 链接
  - [内部链接](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#内部链接)
  - [外部链接](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#外部链接)
- Front Matter
  - [其他格式的 Front Matter](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#其他格式的-front-matter)
- [GitHub 风格的表格](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#github-风格的表格)
- [Emoji](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#emoji)
- [目录](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#目录)
- [自定义容器](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#自定义容器)
- [代码块中的行高亮](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#代码块中的行高亮)
- [行号](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#行号)
- [导入代码段 beta 0.10.1+](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#导入代码段-badge-text-beta-type-warn-badge-text-0-10-1-type-tip)
- [进阶配置](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#进阶配置)



目录（Table of Contents）的渲染可以通过 [`markdown.toc`](https://v0.vuepress.vuejs.org/zh/config/#markdown-toc) 选项来配置。

## 自定义容器

**Input**

```text
::: tip
This is a tip
:::

::: warning
This is a warning
:::


::: danger
This is a dangerous warning
:::

```

**Output**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

你也可以自定义块中的标题：

```text
::: danger STOP
Danger zone, do not proceed
:::
```

::: danger STOP
Danger zone, do not proceed
:::

## 代码块中的行高亮

**Input**

~~~text
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
~~~

**Output**




```js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 行号

你可以通过配置来为每个代码块显示行号：

```js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}  
```

- 示例:

![Image](/images/markdownStayPhoto/img.png)







## 导入代码段

你可以通过下述的语法导入已经存在的文件中的代码段：

```md
<<< @/filepath
```

它也支持 [行高亮](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#代码块中的行高亮)：

```md
<<< @/filepath{highlightLines} 
```

**Input**

```text
<<< @/test/markdown/fragments/snippet.js{2}
```

**Output**



 





```js
export default function () {
  // ..
}
```

注意

由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 `@` 默认值是 `process.cwd()`。

## 进阶配置

VuePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 `.vuepress/config.js` 的 `markdown` 选项，来对当前的 `markdown-it` 实例做一些自定义的配置：

```js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```