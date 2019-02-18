# hexo-pinyin-ruby-marks
A wheel that converts Hanyu pinyin tone numbers to tone marks.

## Setup
### npm
https://www.npmjs.com/package/hexo-pinyin-ruby-marks

in your hexo project folder, run
```bash
$ npm install hexo-pinyin-ruby-marks
```

## Usage
**CONFLICT** with other hexo plugins that have regitered `pinyin` tag.

in your new posts, write
```
{% pinyin 初音未来|chu1 yin1 wei4 lai2 %}
```
after `$ hexo generate` ---> `<ruby><rb>初音未来</rb><rp>(</rp><rt>chū yīn wèi lái</rt><rp>)</rp></ruby>`,

which looks like: <ruby><rb>初音未来</rb><rp>(</rp><rt>chū yīn wèi lái</rt><rp>)</rp></ruby>

## Tests
these is no tests yet.

## Issues
submit [issues and bugs here](https://github.com/issiki/hexo-pinyin-ruby-marks/issues).

## License
MIT ©[Futaba Isshiki](https://www.futaba.love)
