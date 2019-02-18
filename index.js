'use strict';
const PYTone=require('pinyin-tone');

hexo.extend.tag.register('pinyin', function (args) {
  const splited = args.join(' ').split('|');
  const ruby_base = splited[0].trim();
  const ruby_text = PYTone(splited[1].trim());

  return "<ruby><rb>" + ruby_base + "</rb><rp>(</rp><rt>" + ruby_text + "</rt><rp>)</rp></ruby>";
});