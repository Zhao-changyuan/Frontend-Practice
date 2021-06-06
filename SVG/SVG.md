## 1. 引入svg

- svg是基于xml的技术
- svg文件
  - `<!DOCTYPE svg PUBLIC "-//W3C//DTD SBG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`
  - svg跟标签
  - xmlns="http://www.w3.org/2000/svg"
- 图片，背景，框架等
- 直接在html页面中添加svg

## 1. 概述

svg是一种基于xml语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。其他图像格式都是基于像素处理的，SVG则是属于图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。

svg文件可以直接插入网页中，称为dom的一部分。

也可以卸载一个独立文件中，然后用*`img/object/frame/embed`*等标签插入网页。

svg文件还可转为BASE64编码，然后作为Data URI引入网页。

## 2. 语法

### 2.1 `<svg>`标签

svg代码都放在顶层标签`<svg>`之中。

svg标签的width属性和height属性，指定了svg图像在HTML元素中所占据的宽度和高度。除了相对单位，也可以采用绝对单位（单位：像素）。如果不指定这两个属性，svg图像默认是宽300px高150px。

如果只想展示svg图像的一部分，就要指定viewBox属性。

viewBox属性的值有四个数字，分别是左上角的横坐标和纵坐标、视口的高度和宽度。注意，视口必须是噢诶所在的空间。

如果不指定width属性和height属性，至指定viewBox属性，则相当于只给定svg图像的长宽比。这时，svg图像的默认大小将等于所在的HTML元素的大小。

### 2.2 `<circle>`标签

代表圆形，常用三个属性：

- cx 圆心横坐标
- cy 圆心纵坐标
- r 半径

class属性用来指定对应的CSS类。

SVG的CSS顺序ing与网页元素有所不同：

- fill：填充色
- stroke：描边色
- stroke-width：描边宽度

### 2.3 `<line>`标签

绘制直线，特有属性：

- x1 起点横坐标
- y1起点纵坐标
- x2 终点横坐标
- y2 终点纵坐标

### 2.4 `<polyline>`折线

用于绘制一根折线，特有属性：

- points，点的横纵坐标使用逗号分隔，点与点之间用空格分隔。

### 2.5 `<rect>`标签

矩形，特有属性：

- x 左上角起点横坐标
- y 左上角起点纵坐标
- width 宽度
- height 高度

### 2.6 `<ellipse>`椭圆

特有属性：

- cx 圆点横坐标
- cy 圆点纵坐标
- ry 纵轴半径
- rx 横轴半径

### 2.7 `<polygon>`多边形

特有属性：

points属性指定了每个断点的坐标，横坐标与中坐标之间用逗号分隔，点与点之间用空格分隔。

### 2.8 `<path>`路径

`<path>`的 **d** 属性表示绘制顺序，它的值是一个长字符串，每个字母表示一个绘制动作，后面跟着坐标。

- M：移动到（moveto）
- L：画直线（lineto）
- Z：闭合路径

### 2.9 `<text>`文本

text的x属性和y属性，表示文本区块基线（baseline）起点的横坐标和纵坐标。文字的样式可以用class或style属性指定。文字使用fill设置文字颜色，字体大小通过font-size设置。

还可以设置text-shadow文字阴影。

### 2.10 `<use>`标签

用于复制一个形状

href属性指定要赋值的节点，

x y属性是左上角的坐标，这是一个相对坐标，相对于源形状的左上角作为原点。

还可以指定width和height值。

### 2.11 `<g>`标签 group

g标签用于将多个形状组成一个组（group），方便复用。

### 2.12 `<defs>`标签

用于定义自定义标签，它的内部代码不会显示，仅供引用。

### 2.13 `<pattern>`标签

用于自定义一个形状，该形状可以被引用来平铺一个区域。

### 2.14 `<image>`图片

用于插入图片

xlink:href用于指定图片地址

### 2.15 `<animate>`标签

产生动画效果

animate的属性如下：

- attributeName：发生动画效果的属性名。
- from：单词动画的初始值。
- to：单词动画的结束值。
- dur：单词动画的持续时间。
- repeatCount：动画的循环模式。

统一个形状，可以设置多个动画。

### 2.16 `<animateTransform>`标签

animate标签对CSS的transform属性不起作用，如果需要变型，要使用`<animateTransform>`标签。

## 3. JavaScript操作SVG

