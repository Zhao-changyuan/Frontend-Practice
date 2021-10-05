- html-webpack-plugin
  - 生成HTML文件（用于服务器访问），并在HTML中加载所有的打包资源
  - 指定HTML模板、设置HTML变量、压缩HTML
- 安装
  - `yarn add -D html-webpack-plugin`
- 配置
  - `plugins: [new HtmlWebpackPlugin({...})]`

```javascript
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'demo.html',
        minify: { // 压缩选项
            collapseWhitespace: true, // 移除多余空格
            removeComments: true, // 移除注释
        }
    })
]
```

html-webpack-plugin插件生成的内存中的页面已帮我们创建并正确引用了打包编译生成的资源（js/css）

