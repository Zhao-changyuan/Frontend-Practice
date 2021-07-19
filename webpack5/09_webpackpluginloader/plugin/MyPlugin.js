// 声明自定义插件

class MyPlugin {
  constructor(options) {
    console.log('插件配置选项', options);
    this.options = options || {};
  }

  // 必须声明 apply 方法
  apply(compiler) {
    // 在钩子上挂载功能
    compiler.hooks.emit.tap('MyPlugin', (compilation) => {
      // compilation 是此次大伯啊的上下文
      for (const name in compilation.assets) {
        console.log(name);

        // 针对 CSS 文件，执行相关操作
        // if (name.endsWith('.css')) {
        if (name.endsWith(this.options.target)) {
          // 获取处理之前的内容
          const contents = compilation.assets[name].source();
          // 将原来的内容，通过正则表达式，删除注释
          const noComments = contents.replace(/\/\*[\s\S]*?\*\//g, '');
          // 将处理后的结果替换掉
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length,
          };
        }
      }
    });
  }
}

module.exports = MyPlugin;
