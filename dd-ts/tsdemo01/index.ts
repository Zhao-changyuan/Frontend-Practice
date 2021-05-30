/* 
type K = 'x' | 'y';
type T = number;

type MappedObjectType = { readonly [P in K]?: T} */

// type MappedObjectType = {[P in string ]: number}

// type T = {x: string, b: number, c: bigint}

// type M = {[P in keyof T]: T[P]}

// type OptionalT = Partial<T>;

/* type T = { a?: string; readonly b: number}

type K = keyof T;
type MOT = {[P in K]: T[P]} */

/* type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
} */

/* type T = {
  a?: string | undefined | null,
  readonly b: number | undefined | null
}

type SomeOfT = Required<T> */

/* type HMOT<T, X> = {[P in keyof T]: T[P]}

type T = [string, number]

type R = HMOT<T, boolean> */

/* type T0 = true extends boolean ? string : number;

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object'; */

// type Exclude<T, U> = T extends U ? never : T;

/* type CT<T> = T extends string ? true : false;

type T = CT<string | number>;

type CT1<T> = [T] extends [string] ? true : false; */

/* type CT<T> = T extends Array<infer U> ? U : never;

type T = CT<Array<number>>;

type ReturnType<T extends (...args: any) => any>
  = T extends (...args: any) => infer R ? R : any; */

/* type K = 'x' | 'y';
type T = number;

type R<K extends (string | number | symbol), T> = {
  [P in K]: T;
}

type R1 = R<K, T>
const a: R1 = {x: 0, y: 0} */

/* const a = { x: 0}
function b(x: string, y: number): boolean {
  return true;
}

type T0 = typeof a;
type T1 = typeof a.x;
type T2 = typeof b; */

/* const a: unique symbol = Symbol()
const b: typeof a = a; */

/* const username = document.getElementById('username') as HTMLInputElement
if (username) {
  console.log(username.value);
} */

// const a = 1 as unknown as number;

/* let a1 = true;
let a2 = true as const;

let b1 = 'hello';
let b2 = 'hello' as const; */

/* let a1 = [0, 0];
let a2 = [0, 0] as const; */

/* let a1 = {x: 0, y: 0}
let a2 = { x: 0, y: 0 } as const; */

/* function add(x: number, y: number) {
  return x + y;
}

const nums = [1, 2] as const;

const total = add(...nums); */

function getLength(v: string | undefined) {
  if (!isDefined(v)) {
    return 0;
  }

  return v!.length;
}

function isDefined(value: any) {
  return value !== undefined && value !== null;
}