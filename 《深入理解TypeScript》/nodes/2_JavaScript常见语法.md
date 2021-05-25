TypeScript只是提供一种新的语法，并不会帮助你解决Bug

实际上，TypeScript只是JavaScript的一个编译器。

## 2.1 相等

除了空检查，推荐使用===和!==

## 2.2 引用

## 2.3 null和undefined

**推荐使用==null来检查undefined和null，因为你通常并不希望区分它们。**

为了检查一个变量是否已经被定义，或者是否在全局作用域上，通常会使用typeof。

不要把undefined作为有效的表示方式。

## 2.4 this

## 2.5 闭包

## 2.6 数字

无论何时，当你在金融计算上使用数学时，请使用像big.js这样的第三方库。

大与Number.MAX_VALUE的值会被限制为INFINITY，小于Number.MIN_VALUE的值会被限制为0。

## 2.7 truthy

