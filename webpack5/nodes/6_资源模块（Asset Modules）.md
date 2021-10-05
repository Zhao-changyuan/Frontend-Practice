资源模块（Asset Modules）是webpack5新引入的特征

- 功能：
  - 资源模块是一种模块类型，它允许使用资源文件，而不需配置额外loader
  - 资源文件：字体、图片、图标、HTML... ...



- Webpack 4
  - raw-loader （将文件导入为字符串）
  - file-loader （将文件发送到输出目录）
  - url-loader （将文件发送到输出目录，或转为Data URI内联到bundle中）

- Webpack 5
  - asset/resource 发送一个单独的文件并导出URL（之前通过使用file-loader实现）
  - asset/inline 发送一个资源的data URI （之前通过使用url-loader实现）
  - asset/source 导出资源的源代码（之前通过使用raw-loader实现）
  - asset 在导出一个data URI和发送一个文件之间自动选择（url-loader）