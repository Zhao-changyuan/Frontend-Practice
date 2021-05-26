



/* type BooleanAlias = true | false;

const a: true = true;
const b: false = false;

let c: boolean = a; */

/* const a: 'hello' = 'hello'
let c: string = a; */

/* const a0: 0b1 = 1;
const b0: 0o1 = 1;
const c0: 1 = 1;
const d0: 0x1 = 1;

const num: number = a0; */

/* const a: undefined = undefined;
const b: null = null;
const c: unique symbol = Symbol.for('111')
const d: void = undefined;
const e: 'hello' = 'hello'

enum Foo {A, B}
const f: Foo.A = Foo.A */

/* let x: any;

let a: number = x;
console.log(a) */

/* function f1(x) {
  console.log(x)
}
 */

/* function f1(message: any) {
  return message.length
}

f1(undefined)

function f2(message: unknown) {
  if (typeof message === 'string') {
    return message.length
  }
}

f2(undefined) */

/* function f(): never {
  throw new Error();
}

let x: never;

let a: boolean = x; */

/* function throwError(): never {
  throw new Error()
}

function fail(): never {
  return throwError()
}
 */

/* function infiniteLoop(): never {
  while (true) {
    console.log('endless...')
  }
} */

/* const digits: number[] = [0, 1, 2, 3];

let f: string = '123'
const red: (string | number)[] = ['f', f, 0, 0, 0] */

/* const digits: Array<number> = [1, 2];
const red: Array<string | number> = ['f', 1, 2]; */

/* const digits: number[] = [0, 1, 2];
const zero = digits[0] */

// const red: Readonly<number[]> = [255, 0, 1];

/* const a: number[] = [0]
const ra: readonly number[] = [0]

const x: readonly number[] = a

const y: number[] = ra; */

/* const point: [number, number] = [0, 1]

const score: [string, number] = ['math', 100] */

// const point: readonly [number, number]= [1, 2]
// const point: Readonly<[number, number]> = [1, 2]

/* const score: [string, number] = ['math', 100]

const course = score[0]
const grade = score[1]

const bar: boolean = score[0] */

/* let tuple: [boolean, string?, number?] = [true, 'yes', 1]

console.log(tuple)
tuple = [true]
console.log(tuple)
tuple = [true, 'yes']
console.log(tuple) */

/* let tuple: [number, ...string[]]

tuple = [0]
tuple = [0, 'a']
tuple = [0, 'a', 'b']
tuple = [0, 'a', 'b', 'c'] */

/* const tuple: [boolean, string?, number?]= [true, 'yes', 1]

let len = tuple.length;

len = 1;
len = 2;

console.log(tuple) */

/* const tuple: [number, ...string[]] = [0, 'a']

const len = tuple.length */

/* let obj: Object;

obj = {x: 0}
obj = true
obj = 'hid'
obj = 1

obj = undefined
obj = null */

// const point: Object = {x: 0, y: 1}

/* const point: object = {x: 0, y: 0}
console.log(point)
point.x
point.y = 2 */

/* const obj: object = {}

console.log(obj.toString())
console.log(obj.valueOf()) */

/* let nonPrimitive: object = {}

const a: any = nonPrimitive;
const b: unknown = nonPrimitive; */

// const point: {x: number, y: number} = {x: 0, y: y}

/* const a: 'a' = 'a'
const b: 0 = 0

let obj: {
  [a]: boolean,
  [b]: boolean,

  ['1']: boolean,
  [1]: boolean
}; */

/* const s: unique symbol = Symbol();
let obj: {
  [s]: boolean,
}
 */

/* let obj: {
  [Symbol.toStringTag]: string,
} */

// let obj: {x, y} = {x: 1, y: 2}

/* let point: { x: number, y: number, z?: number }

point = {x: 0, y: 0}
point = { x: 0, y: 0, t: 1 } */

/* let point: {
  readonly x: number,
  readonly y: number
}

point = {x: 0, y: 0}

point.x = 1 */

/* const point: {} = {x: 0, y: 0}

console.log(point.valueOf()) */

/* let config: {
  url?: string,
  async?: boolean,
  timeout?: number
} */

/* const point: { x: number, y: number } = {
  x: 0,
  y: 0,
  z: 0
}

function f(point: { x: number, y: number }) {

}

f({x: 0, y: 0, z: 0}) */

// const task: { canceled?: boolean } = {cancelled: true}

/* const p0: {x: number} = {x: 0, y: 0} as {x: number}

const p1: { x: number } = { x: 0, y: 0 } as { x: 0, y: 0 }; */

// @ts-ignore
// const point: {x: number} = {x: 0, y: 0}

/* const point: {
  x: number,
  [prop: string]: number
}= {x: 0, y: 0} */

/* function add(x: number, y: number) {
  return x + y;
}

const f = function (x: number, y: number) {
  return x + y;
}

function add1(x, y) {
  return x + y;
} */

/* function add(x: number, y?: number, z?:number) {
  return x + (y??0) + (z??0)
}
 */

/* function add(x: number, y?: number) {
  return x + (y??0)
}

add()

add(1, 2, 3) */

/* function add(x: number, y?: number) {
  return x + (y??0)
}

add(1, undefined) */

/* function add(x: number = 0, y = 0) {
  return x + y;
} */

/* function add(x: number, y: number = 0) {
  return x + y;
} */

// function f(x?: number = 0) {}

/* function add(x: number = 0, y: number) {
  return x + y;
}

add(undefined, 2) */

// function f(...args: number[]) {}

/* function f(...args: [boolean, number]) { }

function f1(args_0: boolean, args_1: number) { }

function f2(...args: [boolean, string?]) {}

function f3(args_0: boolean, args_1?: string) {} */

/* function f0(...args: [boolean, number, string]) {}
f0(true, 0, '')

function f1(...args: [boolean, number, string?]) {}
f1(true, 0, '')
f1(true, 0)

function f2(...args: [boolean, number, ...string[]]) {}
f2(true, 0)
f2(true, 0, '')
f2(true, 0 ,'', 'hello') */

/* function f0([x, y]) {
}

f0([0, 1])
function f1({x, y}) {}
f1({x: 0, y: 0})

function f3([x,y]: [number, number]) {} */

/* function add(x: number, y: number) {
  return x + y;
} */

/* function f0(): void {
  return undefined
}

function f1(): void {} */

/* let f: () => void;

f = function () {} */

// let add: (x: number, y: number) => number

/* let f: (x: number) => number;

f = function (y: number): number {
  return y
} */


/* let add: { (x: number, y: number): number };

add = function (x: number, y: number): number {
  return x + y;
} */

/* const abs0: (x: number) => number = Math.abs;
const abs1: { (x: number): number } = Math.abs;

console.log(abs0(-1) === abs1(-1)) */

/* function f(x: number) {
  console.log(x)
}

f.version= '1.0'

let foo: { (x: number): void, version: string } = f;

const version = foo.version;
console.log(version) */

// let ErrorConstructor: new (message?: string) => Error;

/* let Dog: {new (name: string): object}

Dog = class {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let dog = new Dog('huahua')
console.log(dog) */

/* declare const F: {
  new(x: number): Number;
  (x: number): number;
}

const a: number = F(1)
const b: Number = new F(1) */

/* function add(x: number, y: number): number;



function add(x: any[], y: any[]): any[];


function add(x: number | any[], y: number | any[]): any {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }

  if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y]
  }
}

console.log(add(1, 2))
console.log(add([1], [2]))
add(1, [2]) */

/* function foo(x: number): boolean;
function foo(x: string): void;
function foo(x: number | string): any {

} */

function f(x: any): number;
function f(x: string): 0 | 1;
function f(x: any): any {}

const a: 0 | 1 = f('hi')
