

// 更多关于函数

/* type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
  fn("Hello World");
}

function printToConsole(s: string) {
  console.log(s)
}

greeter(printToConsole) */

/* type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6))
}

type SomeObject = any
type SomeConstrutor = {
  new(s: string): SomeObject;
}
function fn(ctor: SomeConstrutor) {
  return new ctor("hello")
} */

/* interface CallOrConstruct {
  new(s: string): Date;
  (n?: number): number;
} */



/**
 4. 通用函数
*/

/* function firstElement(arr: any[]) {
  return arr[0]
} */

/* function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}

const s = firstElement(['1', 'b', 'c'])
console.log(s)

const n = firstElement([1, 2, 3])
console.log(n)

const u = firstElement([])
console.log(u) */

/**
 * 4.1 推理
 * @param arr 
 * @param func 
 * @returns 
 */
/* function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func)
}

const parsed = map(["1", "2", '3'], (n) => parseInt(n))
console.log(parsed) */

/**
  4.2 约束
*/

/* function longest<Type extends { length: number }>(a: Type; b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3])

const longerString = longest("alice", "bob")

const notOk = longest(10, 100) */

/**
  4.3 使用受约束的值
*/

/* function miniumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return {length: minimum}
  }
} */

/**
  4.4 指定类型参数
*/

/* function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}

const arr = combine([1, 2, 3], ["hello"])

const arr1 = combine<string | number>([1, 2, 3], ['Hello']) */

/**
  4.5 编写良好泛型函数的指南
*/


// 4.5.1 下推类型参数
/* function firstElement1<Type>(arr: Type[]) {
  return arr[0]
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0]
}

const a = firstElement1([1, 2, 3])
const b = firstElement2([1, 2, 3, '33223']) */

// 4.5.2 使用更少的类型参数
/* function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func)
}

function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func) {
  return arr.filter(func)
} */

// 4.5.3 类型参数应该出现两次
/* function greet<Str extends string>(s: Str) {
  console.log('Hello, ' + s)
} */

/**
  4.6 可选参数
*/

/* function f(n: number) {
  console.log(n.toFixed())
  console.log(n.toFixed(3))
} */

/* function f(x?: number) {

} */

// 4.6.1 回调中的可选参数

/* function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

myForEach([1, 2, 3], (a) => console.log(a))
myForEach([1, 2, 3], (a, i) => console.log(a, i)) */

/**
  4.7 函数重载
*/

/* function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}

const d1 = makeDate(12345678)
const d2 = makeDate(5, 5, 5)
const d3 = makeDate(1, 3) */

// 4.7.1 重载签名和实现签名

/* function fn(x: string): void;
function fn() {
  
}

fn() */

/* function fn(x: boolean): void;
function fn(x: string): void;
function fn(x: boolean) {} */

/* function fn(x: string): string;
function fn(x: number): boolean;
function fn(x: string | number) {
  return "oops"
} */

/**
  4.7.2 编写好的重载
*/

/* function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len("")
len([0])
len(Math.random() > 0.5 ? "hello" : [0]) */

/* function len(x: any[] | string) {
  return x.length;
} */

/**
  4.7.3 this在函数中使用
*/

/* const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  }
} */

/* interface User {
  id: number;
  admin: boolean;
  becomeAdmin: () => void;
}

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

function getDB():DB {
  const arr: User[] = [{
    id: 1,
    admin: false,
    becomeAdmin() {
      this.admin = true
    }
  }]

  return {
    filterUsers(filter: (this: User) => boolean): User[] {
      const arr1 = arr.filter((value) => {
        return filter.call(value)
      })

      console.log(arr1)
      return arr1
    }
  }
}

const db = getDB()
const admins = db.filterUsers(function (this: User) {
  return this.admin;
})

console.log(admins) */


/**
  4.8 其他需要了解的类型
*/

/* function noop() {
  return;
} */

/* function f1(a: any) {
  a.b()
}

function f2(a: unknown) {
  a.b()
} */

/* function safeParse(s: string): unknown {
  return JSON.parse(s)
}

const obj = safeParse("12333") */

/* function fn(x: string | number) {
  if (typeof x === "string") {
    
  } else if (typeof x === 'number') {
    
  } else {
    x;
  }
} */

/**
  4.9 剩余参数与参数
*/

/* function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x)
} */

/* const args = [8, 5] as const;
const angle = Math.atan2(...args); */

/**
  4.10 参数解构
*/

/* function sum({ a, b, c }: { a: number, b: number, c: number }) {
  console.log(a + b + c)
}

type ABC = { a: number; b: number; c: number }
function sum1({ a, b, c }: ABC) {
  console.log(a + b + c)
} */

/**
  4.11 功能的可分配性
*/

/* type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
}

const f2: voidFunc = () => true;
const f3: voidFunc = function () {
  return true;
}

const v1 = f1()
console.log(v1) */

/* const src = [1, 2, 3]
const dst = [0]

src.forEach((el) => dst.push(el)) */

/* function f2(): void {
  return true;
} */