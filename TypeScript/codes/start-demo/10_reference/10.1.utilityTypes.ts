

/**
 * 10.1 实用类型
 */

/* interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo,
    ...fieldsToUpdate,
  }
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter"
}

const todo2 = updateTodo(todo1, {
  description: "throw out trash"
}) */

/* interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }
const obj2: Required<Props> = { a: 5 }; */

/* interface Todo {
  title: string;
  b?: number;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
  b: 123
}

todo.b = 122 */

/* interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" }
};

cats.boris; */

/* interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
}

type T1 = Record<keyof Todo, Todo>
const t1: T1 = {
  title: { title: '1', description: "1", completed: false },
  description: { title: '1', description: "1", completed: false },
  completed: { title: '1', description: "1", completed: false },
} */

/**
 * Omit<Type, Keys>
 */

/* interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
}

type Omit1<Type, Key extends keyof Type> = {
  [P in Exclude<keyof Type, Key>]: Type[P]
}

type TodoPreview = Omit1<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createAt: 1344321,
}

todo;

type TodoInfo = Omit1<Todo, "completed" | "createAt">
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm"
}

todoInfo */

/* type T0 = Exclude<"a" | "b" | "c", "a">

type T1 = Exclude<"a" | "b" | "c", "a" | "c">

type T2 = Exclude<string | number | (() => void), Function>
 */

/* type T0 = Extract<"a" | "b" | "c", "a" | "f">

type T1 = Extract<string | number | (() => void), Function> */

/* type T0 = NonNullable<string | number | undefined>

type T1 = NonNullable<string[] | null | undefined> */

/* type Parameters1<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

declare function f1(arg: { a: number, b: string }): void;

type T0 = Parameters<() => string>

type P1 = Parameters<(s: string) => void>

type T2 = Parameters<<T>(arg: T) => T>

type T3 = Parameters<typeof f1>

type T4 = Parameters<any>

type T5 = Parameters<never>

type T6 = Parameters<string>

type T7 = Parameters<Function> */

/**
 * ConstructorParameters<Type>
 */

/* type ConstructorParameters1<T extends abstract new (...args: any) => any> = 
  T extends abstract new (...args: infer P) => any ? P : never

type T0 = ConstructorParameters1<ErrorConstructor>

type P1 = ConstructorParameters1<FunctionConstructor>

type T2 = ConstructorParameters1<RegExpConstructor>

type T3 = ConstructorParameters1<any>

type T4 = ConstructorParameters1<Function> */

/* type ReturnType1<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : any

declare function f1(): { a: number; b: string }

type T0 = ReturnType1<() => string>

type T1 = ReturnType1<(s: string) => void>

type T2 = ReturnType1<<T>() => T>

type T3 = ReturnType1<<T extends U, U extends number[]>() => T>

type T4 = ReturnType1<typeof f1>

type T5 = ReturnType1<any>

type T6 = ReturnType1<never>

type T7 = ReturnType1<string>

type T8 = ReturnType1<Function>
 */

/* type InstanceType1<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any

class C {
  x = 0;
  y = 0;
}

type TO = InstanceType1<typeof C>

type T1 = InstanceType1<any>

type T2 = InstanceType1<never>

type T3 = InstanceType1<string>

type T4 = InstanceType1<Function> */

/* type ThisParameterType1<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown

function toHex(this: Number) {
  return this.toFixed(16)
}

function numberToString(n: ThisParameterType1<typeof toHex>) {
  return toHex.apply(n)
} */

/* function fn() {
  console.log(1)
}

type T1 = ThisParameterType<typeof fn>

type OmitThisParameter1<T> = unknown extends ThisParameterType<T> ? T : 
  T extends (this: any, ...args: infer U) => infer R ? (...args: U) => R : T

function toHex(this: Number) {
  return this.toString(16)
}

const fiveToHex: OmitThisParameter1<typeof toHex> = toHex.bind(5);

console.log(fiveToHex()) */

/* type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>;
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {}
  let methods: object = desc.methods || {}

  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
    func() {
      console.log('func')
    }
  }
})

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5)
obj.func() */

/* type ObjectDescriptor<D, M> = {
  data?: D,
  methods?: M & ThisType<D & M>; // 在methods中的this是 D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};

  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx // 强类型this
      this.y += dy
    }
  }
})

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5) */

/* type Partial1<Type> = {
  [P in keyof Type]?: Type[P]
}

type T1 = {
  name: string;
  age: number;
}

type T2 = Partial1<T1> */

/* type Required1<T> = {
  [P in keyof T]-?: T[P]
}

type T1 = {
  name?: string;
  age?: number;
}

type T2 = Required1<T1> */

/* type Readonly1<T> = {
  readonly [P in keyof T]: T[P]
}

type T1 = {
  name: string;
  age: number
}

type T2 = Readonly1<T1> */

/* type Record1<Keys extends string | number | symbol, Type> = {
  [P in Keys]: Type
}

type Pick1<Type, Keys extends keyof Type> = {
  [P in Keys]: Type[P]
}

type T1 = {
  name: string;
  age: number;
}

type T2 = Pick1<T1, "name">

type Omit1<Type, Keys extends string | number | symbol> = {
  [P in Exclude<keyof Type, Keys>]: Type[P]
}

type T3 = Omit1<T1, "name">

type Exclude1<Type, U> = Type extends U? never : Type */

/* type NonNullable1<T> = T extends (null | undefined) ? never : T

type T1 = NonNullable1<string | null | undefined> */

/* type Parameters1<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : any

function fn(name: string, num: number) {

}

type T1 = Parameters1<typeof fn> */

/* type ConstructorParameters1<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : any
  
type c = new (name: string, num: number) => void

type T1 = ConstructorParameters1<c> */

/* type ReturnType1<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never

function func() {
  return 123
}

type T1 = ReturnType1<typeof func>

type InstanceType1<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer P ? P : any

class C {
  a = 0;
}

type T2 = InstanceType1<typeof C> */

/* type ThisParameterType1<T extends (this: any, ...args: any) => any> =
  T extends (this: infer P, ...args: any) => any ? P : unknown;

function toHex(this: Number) {
  return this.toFixed(16)
}

type T1 = ThisParameterType1<typeof toHex> */

/* type OmitThisParameter1<T> = unknown extends ThisParameterType<T> ? T :
  T extends (...args: infer P) => infer U ? (...args: P) => U : T  */

