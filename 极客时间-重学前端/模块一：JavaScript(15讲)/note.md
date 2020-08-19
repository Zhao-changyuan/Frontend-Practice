
# JavaScript语法（预备篇）：到底要不要写分号呢？

## 自动插入分号规则
自动插入分号的规则其实独立于所有的语法产生式定义，规则如下：
    1. 要有换行符，且下一个符号是不符合语法的，那么就尝试插入分号；
    2. 有换行符，且语法中规定此处不能有换行符，那么就自动插入分号；
    3. 源代码结束处，不能形成完整的脚本或者模块结构，那么就自动插入分号；

带换行符的注释也被认为是有换行符；

## no LineTerminator here 规则
no LineTerminator here规则表示它所在的结构中的这一位置不能插入换行符。
自动插入分号规则的第二条：有换行符，且语法中规定此处不能有换行符，那么就自动插入分号。

规则如下：
* 带标签的 continue 语句，不能在 continue 语句后插入换行；
* 带标签的break语句，不能在break后插入换行；
* return后不能插入换行；
* 后自增、后自减运算符前不能插入换行；
* throw和Exception之间不能插入换行；
* 凡是async关键字，后面都不能插入换行；
* 箭头函数的箭头前，也不能插入换行；
* yield之后，不能插入换行；

## 不写分号需要注意的情况

* 以括号开头的语句
* 以数组开头的语句
* 以正则表达式开头的语句
* 以Template开头的语句

# 第12讲： JavaScript语法（一）：在script标签写export为什么会抛错？

## 脚本和模块
脚本是可以由浏览器或者node缓解引入执行的，而某块只能由JavaScript代码用import引入执行。

从概念上，我们可以任务脚本具有主动性的JavaScript代码段，是控制宿主王成一定任务的代码；而模块是被动性的JavaScript代码段，是等待被调用的库。

### import 声明
直接import一个模块，只能保证了这个模块代码被执行，引用它的模块是无法获得它的任何信息的。

带from的import意思是引入模块中的一部分信息，可以把它们变成本地的变量。

导入与一般的赋值不同，导入后的变量只是改变了名字，它仍然与原来的变量是同一个。

### export 声明
export声明承担的是导出的任务。

## 函数体
宏任务中可能会执行的代码包括“脚本（script）” “模块（module）”和“函数体（function body）”。

函数体其实也是语句的列表。跟脚本和模块比起来，函数体中的语句列表中多了return语句可以用。

## 预处理
预处理过程会提前处理var、函数声明、class、const和let这些语句，以确定其中变量的意义。

### var声明
var声明永远作用域脚本、模块和函数体这个级别，在预处理阶段，不关心赋值的部分，只管在当前作用域声明这个变量。

var的作用域能够穿透一切语法结构，它只认脚本、模块和函数体三种语法结构。

### function 声明
在全局（脚本、模块和函数体），function声明表现跟var相似，不同之处在于，function声明不但在作用域中加入变量，还会给它赋值。

function声明出现在if等语句中的情况有点复杂，他仍然作用于脚本、模块和函数体级别，在预处理阶段，仍然会产生变量，它不再被提前赋值。

### class 声明
在class声明之前使用class名，会报错。
出现在后面的class声明影响了前面语句的结果。

class声明也是会被预处理的，它会在作用域中创建变量，并且要求访问它时抛出错误。
class的声明作用不会穿透if等语句结果，所以只有在全局环境才会有声明作用。

按照现代语言设计的评价标准，及早抛错是好事，它能够帮助我们尽早在开发阶段就发现代码的可能问题。

## 指令序言机制
“use strict”是JavaScript标准中规定的唯一一种指令序言，但是设计指令序言的目的是，留给JavaScript的引擎和实现者一些统一的表达方式，在静态扫描时指定JavaScript代码的一些特性。

# 第13讲：JavaScript语法（二）：你知道哪些JavaSrcipt语句？

## 语句块
语句块的意义和好处在于：让我们可以把多行语句视为同一行语句，语句块会产生作用域。

## 空语句
一个独立的分号。

## if语句

## switch语句
建议：switch已经完全没有必要使用了，应该用if else结构代替。

## 循环语句
### while循环和do while循环

### 普通for循环

### for in循环
for in循环枚举对象的属性，这里体现了属性的enumerable特征。

### for of 循环和 for await of 循环
实际上，它背后的机制是interator机制。

## return

## break 语句和 continue 语句
带标签的break和continue可以控制自己被外层的哪个语句结构消费，这可以跳出复杂的语句结构。

## with 语句
一般认为它属于糟粕。

## try 语句和throw 语句

## debugger 语句
在没有调试器挂载时，它不产生任何效果。

## var
在现在，在绝大多数情况下，let和const都是更好的选择。

如果依然想要使用var，建议把它当做一种“保障变量是局部”的逻辑，遵循以下三条规则：
* 声明时必定初始化；
* 尽可能在离使用的位置近处声明；
* 不要在意重复声明

## let 和 const
let和const的作用范围是if、for等结构型语句。
let和const声明虽然看上去是执行到了才会生效，但是实际上，他们还是会被预处理。如果当前作用域内有声明，就无法访问到外部的变量。

## class 声明
它的声明特征跟const和let类似，都是作用域块级作用域，预处理阶段则会屏蔽外部变量。

以目前的兼容性，class中的属性只能写在构造函数中。

需要注意，class默认内部的函数定义都是strict模式的。

## 函数声明

# 第14讲：JavaScript语法（三）：什么是表达式语句？

## 什么是表达式语句
表达式语句实际上就是一个表达式，它是由运算符连接变量或者直接量构成的。

一般来说，我们的表达式语句要么是函数调用，要么是赋值，要么是自增、自减，否则表达式计算的结果没有任何意义。

## PrimaryExpression 主要表达式
Primary Expression包含了各种“直接量”，直接量就是直接用某种语法写出来的具有特定类型的值。

JavaScript还能够以直接量的形式定义对象，针对函数、类、数组、正则表达式等特殊对象类型。

需要注意的是，在语法层面，function、{和class开头的表达式语句与声明语句有语法冲突，所以，我们要想使用这样的表达式，必须加上括号来回避语法冲突。

任何表达式加上圆括号，都被认为是Primary Expression，这个机制使得圆括号成为改变运算符优先顺序的手段。

## MemberExpression 成员表达式
Member Expression 通常是用于访问对象成员的。
a.b;
a['b'];
new.target;
super.b;
f`a${b}c`;
new Cls();

## NewExpression NEW 表达式
Member Expression加上new就是New Expression。

## CallExpression 函数调用表达式
他的基本形式是Member Expression后加一个括号里的参数列表。

## LeftHandSideExpression 左值表达式
New Expression和 Call Expression统称为LeftHandSideExpression，左值表达式。
直观地讲，左值表达式就是可以放到等号左边的表达式。

## AssignmentExpression 赋值表达式

## Expression 表达式
赋值表达式可以构成Expression表达式的一部分。在JavaScript中，表达式就是用逗号运算符连接的赋值表达式。

在很多场合，都不允许使用带逗号的表达式。

# 第15讲：JavaScript语法（四）：新加入的**运算符，哪里有些不一样？
## 更新表达式 UpdateExpression
-- a;
++ a;
a ++;
a --;

## 一元运算表达式 UnaryExpression
更新表达式搭配一元运算符，可以形成一元运算符表达式。
```javascript
delete a.b;
void a;
typeof a;
- a;
~ a; 
! a;
await a;
```

## 乘方表达式 ExponentiationExpression
```javascript
++i ** 30
2 ** 30 // 正确
-2 ** 30 // 错误
```
**是右结合的。

```javascript
4 ** 3 ** 2
// 实际上它是这样被运算的
4 ** (3 ** 2)
```
## 乘法表达式 MultiplicativeExpression
```javascript
*
/
%
```

## 加法表达式 AdditiveExpression
```javascript
+
-
```

## 位移表达式 ShiftExpression
在JavaScript中，二进制操作整数不能提高性能，位移运算这里也仅仅是作为一种数学运算存在，这些运算存在的意义也仅仅是照顾C系语言用户的习惯了。

## 关系表达式 RelationalExpression
```javascript
<=
>=
<
>
instanceof
in
```
务必不要用数学上的定义去理解这些运算符。

## 相等表达式 EqualityExpression
类型不同的变量比较时==运算只有三条规则：
* undefined与null相等；
* 字符串和bool都转为数字再比较；
* 对象转成primitive类型再比较；

不太符合直觉的两点：
* 一个是即使字符串与boolean比较，也都要转换成数字；
* 另一个是对象如果转换成primitive类型跟等号另一边类型恰好相同，则不需要再转换成数字；
建议，仅在确认==发生在Number和String类型之间时使用。

## 位运算表达式
按位或运算常常被用在一种叫做Bitmask的技术上。BitMask相当于使用一个整数来当做多个布尔型变量，现在已经不太提倡了。

## 逻辑与表达式和逻辑或表达式
这里需要注意的是，这两种表达式都不会做类型转换，所以尽管是逻辑运算，但是最终的结果可能是其他类型。

## 条件表达式 ConditionExpression







