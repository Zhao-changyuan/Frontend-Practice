
/* function identity<T>(arg: T): T {
  return arg
}

const foo = identity('foo')
const bar = identity(true)

function assign<T, U>(target: T, source: U): T & U {
  return target;
} */

/* function identity<T>(arg: T): T {
  return arg;
}

identity<number>(1)

identity<Date>(new Date()) */

/* function f<T, U = boolean>() {}

f<string>()
f<string, string>() */

/* interface Point {
  x: number;
  y: number;
}

function indentity<T extends Point>(x: T): T {
  return x;
}

indentity({x: 0, y: 0})
indentity({x: 0, y: 0, z: 0})

indentity({x: 0}) */

/* function foo<T extends number = 0 | 1>(arg: T): T {
  return arg;
} */

/* interface Point {
  x: number;
  y: number;
}

function f<T extends Point>(arg: T): T {
  return { x: 0, y: 0 };
} */

/* function f<T extends boolean>(obj: T): T {
  return true;
}

f<false>(false); */

/* function f0<T>(x: T): T {
  return x;
}

const a: string = f0('a')
const b: number = f0(0)

function f1<T>(x: T, y: T): T[] {
  return [x, y]
} */

/* function f3<T, U>(a: T[], f: (x: T) => U): U[] {
  return a.map(f)
}

const a: boolean[] = f3<number, boolean>([0, 1, 2], n => !!n); */

/* interface MyArray<T> extends Array<T> {
  first: T | undefined;
  last: T | undefined;
} */

/* type Nullable<T> = T | undefined | null; */

type Container<T> = {value: T}
const a: Container<number> = { value: 0 }
const b: Container<string> = { value: 'b' }

type Tree<T> = {
  value: T;
  left: Tree<T> | null;
  right: Tree<T> | null;
}

const tree: Tree<number> = {
  value: 0,
  left: {
    value: 1,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    }
  },
  right: {
    value: 2,
    left: null,
    right: null
  }
}