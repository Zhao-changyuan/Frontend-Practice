const marked = require('marked');
const { getOptions } = require('loader-utils');

// 导出函数 （建议使用普通函数）
module.exports = function (source) {
  // 获取 loader 的配置项, 此时上面不能使用箭头函数
  const options = getOptions(this);

  console.log('my loader', options);

  //  return 'my loader'

  // 'console.log("my loader")';

  const html = marked(source);

  // "<h1 id="关于">关于</h1><p>我是张三</p>"
  // 直接返回可能因为引号的问题，导致报错
  // return `module.exports = "${html}"`;

  // return `module.exports = ${JSON.stringify(html)}`;

  // 直接返回html，交给下一个 loader 进行处理
  return html;
};
