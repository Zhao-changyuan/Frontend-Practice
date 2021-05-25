
/* const greeting: string = 'Hello, world'
console.log(greeting)

const yes: boolean = true;
const no: boolean = false;

const foo: string= 'foo'
const bar: string = `bar, ${foo}`

const bin: number = 0b1010;
const oct: number = 0o744;
const float: number = 3.14;
const hex: number = 0xffffff; */

/* const integer: bigint = 10n;
console.log(integer)

const key: symbol = Symbol()
console.log(key) */

/* const s0: symbol = Symbol()
const s1: symbol = Symbol.for('foo')
const s2: symbol = Symbol.hasInstance;
const s3: symbol = s0
console.log(s0, s1, s2, s3) */

/* const s0: unique symbol = Symbol()
const s1: unique symbol = Symbol.for('s1')
console.log(s0, s1)
 */

/* const x: unique symbol = Symbol()
const y: symbol = Symbol()

interface Foo {
  [x]: string,
  [y]: string
} */

/* const a: unique symbol = Symbol()

interface WithUniqueSymbol {
  readonly b: unique symbol;
}

class C {
  static readonly c: unique symbol= Symbol()
  
} */

/* const a: unique symbol = Symbol()
const b: unique symbol = Symbol('desc');

const c: unique symbol = a;
const d: unique symbol = b; */

/* const a: unique symbol = Symbol()
const b: unique symbol = Symbol()

if (a === b) {
  console.log('unreachable code')
} */

/* let a = Symbol()
let b = Symbol.for('')

const c = Symbol()
const d = Symbol.for('')

const e = a;
const f = a; */

/* const foo: undefined = undefined;
const bar: null = null;
console.log(foo, bar) */

/* let m1: void = undefined;

let m2: any = undefined;
let m3: unknown = undefined;

let m4: any = null;
let n5: unknown = null; */

/* function log(message: string): void {
  console.log(message)
}

log('123344') */

function foo(): void {
  return undefined;
}
