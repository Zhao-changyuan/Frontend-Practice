
/**
  7.5 条件类型
*/

/* interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : number;

type Example2 = RegExp extends Animal ? number : string; */

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw "unimplemented";
// }

/* type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "inimplemented"
}

let a = createLabel("typescript")
let b = createLabel(2.8)
let c = createLabel(Math.random() ? "hell" : 42) */

/* type MessageOf<T extends { message: unknown }> = T["message"]

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email> */

/* type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark: void;
}


type EmailMessageContents = MessageOf<Email>;

type DogMessageContents = MessageOf<Dog> */

/* type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>

type Num = Flatten<number> */

/* type Flatten<Type> = Type extends Array<infer Item> ? Item : Type

type Arr1Type = (string | number | boolean)[]
type Arr2Type = string[]

let arr3: number[] = [1, 2]

type type1 = Flatten<Arr1Type>
type type2 = Flatten<Arr2Type>
type type3 = Flatten<typeof arr3> */

/* type GetReturnType<Type> = Type extends (...arg: never[]) => infer Return ? Return : never;

type Num = GetReturnType<() => number>

type Str = GetReturnType<(x: string) => string>

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]> */

/* type GetReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = GetReturnType<typeof stringOrNum> */

/* type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number> */

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type StringArrOrNumArr = ToArrayNonDist<string | number>



