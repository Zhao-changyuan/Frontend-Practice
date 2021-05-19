实际上Flexbox比border-radius属性的支持范围更广。

## 5.1 Flexbox的元素

给水平方向设置的内边距比垂直方向的要多一点，因为从美学上来讲这样更让人愉悦。

Flexbox允许使用margin: auto来填充弹性子元素之间的可用空间。

## 5.2 弹性子元素的大小

### 5.2.1 使用flex-basis属性

flex-basis定义了元素大小的基准值，即一个初始的“主尺寸”。它可以设置为任意的width值，包括px em 百分比。它的初始值是auto。

### 5.2.2 使用flex-grow属性

flex-grow的值为非负整数。如果一个弹性子元素的flex-grow值为0，那么它的宽度不会超过flex-basis的值。

如果在flex中忽略了某个子属性，那么子属性的值并不会被置为初始值。

### 5.2.3 使用flex-shrink属性

每个子元素的flex-shrink值代表了它是否应该收缩以防止溢出。

### 5.2.4 实际应用

## 5.4 弹性方向

flex-direction

### 5.4.1 改变弹性方向

### 5.4.2 登录弹性表单的样式

## 5.4 对齐、间距等细节

### 5.4.1 理解弹性容器的属性

#### 1. flex-wrap属性

nowrap wrap wrap-reverse

#### 2. flex-flow属性

：flex-direction flex-wrap;

#### 3. justify-content属性

当子元素为填满容器时，justify-content属性控制子元素沿主轴方向的间距。

#### 4. align-items属性

控制子元素在副轴方向的对齐方式。align-items的初始值为stretch，在水平排列的情况下让所有子元素填充容器的高度。更像vertical-align，让行内元素在垂直方向“对齐”.

#### 5. align-content属性

如果开启的换行（用flex-wrap），align-content属性就可以控制弹性容器内沿副轴方向每行之间的间距。

### 5.4.2 理解弹性子元素的属性

#### 1. align-self属性

#### 2. order属性

值越小越排在前面。

### 5.4.3 使用对齐属性

## 5.5 值的注意的地方

应该依靠正常的文档流，只在必要的时候才使用Flexbox。

Flexbox的一个有趣之处在于如何基于弹性子元素的数量和其中的内容量（及大小）来计算容器的大小。因为如果网页很大，或者加载很慢时可能会产生奇怪的行为。

