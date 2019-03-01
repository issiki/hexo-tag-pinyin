# hexo-pinyin-ruby-marks

- A plugin for Hexo, which converts Hanyu pinyin `tone numbers` to `tone symbols`. A `pinyin` tag allows users to quickly and easily insert `<ruby>` snippets containing `pinyin tone symbols` into their posts.

- Hexo`pinyin`标签。一个将汉语拼音“声调数字”转换成“声调符号”的轮子。
`pinyin`标签允许用户快速简单地在文章中插入含有拼音符号的`<ruby>`代码片段。

## Setup

- via npm. In your hexo project folder, run:
- 通过NPM安装。在您的Hexo项目目录，运行：

```bash
$ npm install hexo-pinyin-ruby-marks
```

## Usage

- **CONFLICT** with other hexo plugins that have regitered `pinyin` tag.
- 与其他注册了`pinyin`标签的Hexo插件**冲突**。

- In your new posts,
- 在您的新文章里，

```
{% pinyin 初音未来|chu1 yin1 wei4 lai2 %}
```

- after run `$ hexo generate`, ↓ ↓ ↓
- 在运行`$ hexo generate`后，↓ ↓ ↓

```html
<ruby><rb>初音未来</rb><rp>(</rp><rt>chū yīn wèi lái</rt><rp>)</rp></ruby>
```

- which looks like: <ruby><rb>初音未来</rb><rp>(</rp><rt>chū yīn wèi lái</rt><rp>)</rp></ruby>
- 看起来像：<ruby><rb>初音未来</rb><rp>(</rp><rt>chū yīn wèi lái</rt><rp>)</rp></ruby>

## Tests

- these are no tests yet.
- 尚未有测试。

## Changelog

- see [changelog here](https://github.com/issiki/hexo-pinyin-ruby-marks/blob/master/CHANGELOG.md "CHANGELOG").
- 更新记录[在这里查看](https://github.com/issiki/hexo-pinyin-ruby-marks/blob/master/CHANGELOG.md "更新记录")。

## Issues

- submit any [issues/bugs about this package here](https://github.com/issiki/hexo-pinyin-ruby-marks/issues). Thank you!
- 有任何关于此包的疑问或者缺陷，请[于此处提出](https://github.com/issiki/hexo-pinyin-ruby-marks/issues)。感谢！

## License
MIT ©[Futaba Isshiki](https://futaba.love "一色双叶的笔记")
