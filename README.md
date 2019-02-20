# hexo-pinyin-ruby-marks
A wheel that converts Hanyu pinyin tone numbers to tone marks.

## Setup
via npm:

[hexo-pinyin-ruby-marks](https://www.npmjs.com/package/hexo-pinyin-ruby-marks)

in your hexo project folder, run
```bash
$ npm install hexo-pinyin-ruby-marks
```

## Usage

**CONFLICT** with other hexo plugins that have regitered `pinyin` tag.

in your new posts, write:

```
{% pinyin 初音未来|chu1 yin1 wei4 lai2 %}
```

after `$ hexo generate`, ↓ ↓ ↓

```html
<ruby><rb>初音未来</rb><rp>(</rp><rt>chū yīn wèi lái</rt><rp>)</rp></ruby>
```

which looks like: <ruby><rb>初音未来</rb><rp>(</rp><rt>chū yīn wèi lái</rt><rp>)</rp></ruby>

## Tests
these is no tests yet.

## Changelog
see [changelog here](https://github.com/issiki/hexo-pinyin-ruby-marks/blob/master/CHANGELOG.md).

## Issues
submit [issues and bugs here](https://github.com/issiki/hexo-pinyin-ruby-marks/issues). Thank you!

## License
MIT ©[Futaba Isshiki](https://futaba.love)
