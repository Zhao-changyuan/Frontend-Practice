## 目标

- 能够说出flex盒子的布局原理
- 能够使用 flex 布局的常用属性
- 能够独立完成协程移动端首页案例

## 1. flex布局体验

### 1.1 传统布局与flex布局

**传统布局**

- 兼容性好
- 布局繁琐
- 局限性，不能再移动端很好的布局

**flex 弹性布局**

- 操作方便，布局极为简单，移动端应用很广泛
- PC端浏览器支持情况较差
- IE 11或更低版本，不支持或仅部分支持

建议：

1. 如果是PC端页面布局，我们还是传统布局。
2. 如果是移动端或者不考虑兼容性问题的PC端页面布局，我们还是使用flex弹性布局。

### 1.2 初体验

## 2. flex布局原理

### 2.1 布局原理

flex是flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性，**任何一个容器都可以指定为flex布局**。

- 当我们为父盒子设置为flex布局以后，子元素的float、clear和verical-align属性将失效。
- 伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 = flex布局



采用了Flex布局的元素，称为flex容器（flex container），简称“容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称“项目”。

**总结flex布局原理：**

就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式。

## 3. flex布局父项常见属性

### 3.1 常见父项属性

- flex-direction: 设置主轴的方向
- justify-content：设置主轴上子元素排列方式
- flex-wrap：设置子元素是否换行
- align-content：设置侧轴上的子元素的排列方式（多行）
- align-items：设置侧轴上的子元素排列方式（单行）
- flex-flow：复合属性，相当于同时设置flex-direction 和 flex-wrap

### 3.2 flex-direction设置主轴的方向 （重点）

#### 1. 主轴与侧轴

在flex布局中，是分为主轴和侧轴两个方向，同样的叫法有：行和列、x轴和y轴

#### 2. 属性值

主轴和侧轴是会变化的，就看flex-direction设置谁为主轴，剩下的就是侧轴。而**我们的子元素是跟着主轴来排列的**。

| 属性值         | 说明                     |
| -------------- | ------------------------ |
| row            | 默认值从左到右，**重点** |
| row-reverse    | 从右到左                 |
| column         | 从上到下，**重点**       |
| column-reverse | 从下到上                 |

### 3.3 justify-content 设置主轴上的子元素排列方式 重点

justify-content属性定义了项目在主轴上的对齐方式

注意：使用这个属性之前一定要确定主轴是哪个

| 属性值        | 说明                                                    |
| ------------- | ------------------------------------------------------- |
| flex-start    | 默认值 从头部开始 如果主轴是x轴，则从左到右             |
| flex-end      | 从尾部开始排列                                          |
| center        | 在主轴居中对齐（如果主轴是x轴则水平居中）               |
| space-around  | 剩余空间平分到每个flex item的左右两侧，左右两侧宽度相同 |
| space-between | 先两边贴边 再平分剩余空间（重要）                       |
| span-evenly   | 两端不贴边，平分剩余空间                                |

### 3.4 flex-wrap 设置子元素是否换行 （重要）

默认情况下，项目都排在一条线（又称“轴线”）上。flex-wrap属性定义，flex布局中默认是不换行的，如果装不开，会缩小子元素的宽度，放到父元素里面。

| 属性值 | 说明           |
| ------ | -------------- |
| nowrap | 默认值，不换行 |
| wrap   | 换行           |

### 3.5 align-items 设置侧轴元素排列方式（单行）

该属性是控制子项在侧轴（默认是y轴）上的排列方式，**在子项为单项（单行）的时候使用**。

| 属性值     | 说明                                   |
| ---------- | -------------------------------------- |
| flex-start | 从上到下                               |
| flex-end   | 从下到上                               |
| center     | 挤在一起居中（垂直居中）               |
| stretch    | 拉伸（默认值），但是子盒子不要设置高度 |

### 3.6 align-content 设置侧轴上的子元素的排列方式（多行）

设置子项在侧轴上的排列方式，并且只能用于子项出现 换行 的情况（多行），在单行下是没有效果的。

| 属性值        | 说明                                   |
| ------------- | -------------------------------------- |
| flex-start    | 默认值在侧轴的头部开始排列             |
| flex-end      | 在侧轴的尾部开始排列                   |
| center        | 在侧轴中间显示                         |
| space-around  | 子项在侧轴平分剩余空间                 |
| space-between | 子项在侧轴先分布在两头，在平分剩余空间 |
| stretch       | 设置子项元素高度平分父元素高度         |

**align-content和align-items区别**

- align-items适用于单行情况先，只有上对齐、下对齐、居中和拉伸
- align-content适用于换行（多行）的情况下（单行情况下无效），可以设置过上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值。
- 总结就是单行赵align-items  多行找align-content

### 3.7 flex-flow

flex-flow属性是 flex-direction和 flex-wrap属性的复合属性。

## 4. flex 布局子项常见属性

- flex子项目占的份数
- align-self控制子项目自己在侧轴的排列方式
- order属性定义子项的排列顺序（前后顺序）

### 4.1 flex 属性 （重点）

flex 属性定义子项目**分配剩余空间**，用flex来标识占多少份数。

默认值是0。

还可设置百分比，这个百分比是相对于父级盒子来说的。

### 4.2 align-self 控制子项自己在侧轴上的排列方式

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，便是继承父元素的align-items属性，如果没有父元素，则等同于stretch.

### 4.3 order 属性定义项目的排列顺序

数值越小，排列越靠前，默认为0.

注意：和z-index不一样。

**盒子居中对齐的方式：**

1. 没有定位，有宽度，margin: 0 auto;
2. 有定位，可设置宽度也可不设置宽度。left: 50%; transform: translateX(-50%)；

## 5. 携程网首页案例制作

### 6. 常见flex布局思路

![](https://lark-assets-prod-aliyun.oss-cn-hangzhou.aliyuncs.com/yuque/0/2021/png/21377645/1620109654286-resources/19891056/png/9d8bcf38-f0b7-4c04-89c1-8d2df6956663.png?OSSAccessKeyId=LTAI4GGhPJmQ4HWCmhDAn4F5&Expires=1620111456&Signature=XHkK81IP15XF6AyChBP7DLPLvPQ%3D)

```CSS
display: flex;
flex-direction: column;
align-items: center;
```

### 7. 背景线性渐变

background: linear-gradient(起始方向，颜色1， 颜色2， ... ...)

**背景渐变必须添加浏览器私有前缀**。

起始方向可以是：方位名词 或 度数，如果省略默认就是 top。