## 5.1 类型注解

`:Type`

TypeScript中的类型注解是可选的。

## 5.2 类型检查

在严格类型检查模式下不允许将undefined值和null值赋给string类型的变量。

## 5.3 原始类型

- boolean
- string
- number
- bigint
- symbol
- undefined
- null
- void
- 枚举类型
- 字面量类型

bigint采用了特殊的对象数据结构来表示和存储一个整数。

为了能够将一个Symbol值视作表示固定值的字面量，TypeScript引入了“unique symbol”类型。

"unique symbol"类型的主要用途是用作接口、类等类型中的可计算属性名。

"unique symbol"类型的值只允许使用“Symbol()”函数或“Symbol.for()”方法的返回值进行初始化。

在设计上，没有个“unique symbol”类型都是一种独立的类型。

“unique symbol”类型是symbol类型的子类型。



TypeScript中的Nullable类型指的是值可以为undefined或null的类型。

当启用了“--strictNullChecks”编译选线时，undefined值和null值不再能够赋值给不相关的类型。在该模式下，undefined值只能够赋值给undefined类型，同理null值也只能复制给null类型。



undefined值和null值运行赋值给顶端类型。

### 5.3.7 void

void类型表示某个值不存在，该类型用作函数的返回值类型。

除了将void类型作为函数返回值类型外，在其他地方使用void类型是无意义的。

当启用了“--strictNullChecks”编译选项时，只允许将undefined值赋值给void类型。

## 5.4 枚举类型

