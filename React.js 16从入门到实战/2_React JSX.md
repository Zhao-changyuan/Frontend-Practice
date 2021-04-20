## 2.1 JSX介绍

JSX作为一种JavaScript语法扩展，支持自定义属性，并具有很强的扩展性。

若要在React项目中使用JSX语法，则必须引用“babel.js”来解析JSX，且在`<script>`标签中必须该用“type=text/babel”属性。

## 2.2 JSX独立文件

`<script type="text/babel" src="import.js"></script>`

需要以web服务的形式访问html，file协议不行。

## 2.3 JSX算术表达式

在React JSX中使用JavaScript表达式要使用大括号“{}”括起来。

## 2.4 JSX条件表达式

无法使用if条件语句，但是可以使用三元条件表达式来代替if语句。

## 2.5 嵌入表达式

如果我们先声明了一个变量，就可以通过在JSX中引入该变量的方式进行使用。

## 2.6 JSX对象表达式

在React JSX中可以直接使用对象表达式，也就是说完全支持obj.property的表达式形式。

## 2.7 JSX函数表达式

在React JSX中还可以直接调用JavaScript函数，这就是JSX函数表达式。

## 2.8 JSX增强函数表达式

JSX可以作为参数传入并嵌套在另一个JSX之中。

## 2.9 JSX数组表达式

## 2.10 JSX样式表达式

支持内联形式的CSS样式。

## 2.11 JSX注释表达式

注释容也需要放在大括号“{}”之中使用。