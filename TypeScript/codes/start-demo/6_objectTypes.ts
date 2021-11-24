
/**
  6. 对象类型
*/

/* function greet(person: { name: string, age: number }) {
  return "Hello " + person.name;
} */

/* interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
} */

/* type Person = {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
} */

/**
  6.1 属性修饰符
*/

/* interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
} */

/* function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;
} */

/* function paintShap({shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log('x', xPos)
} */

/**
  6.1.2 只读属性
*/

/* interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'`)

  obj.prop = 'hello'
} */

/* interface Home {
  readonly resident: { name: string; age: number }
}

function visitForBirthday(home: Home) {
  console.log(`Happy birthday ${home.resident.name}`)
  home.resident.age++;
}

function evict(home: Home) {
  home.resident = {
    name: '',
    age: 33,
  }
} */

/* interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let wriablePerson: Person = {
  name: 'Person Mc',
  age: 42
}

let readonlyPerson: ReadonlyPerson = wriablePerson;

console.log(readonlyPerson.age);
wriablePerson.age = 44;
console.log(readonlyPerson.age) */

/**
  6.1.3 索引签名
*/

/* interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray()
const secondItem = myArray[1] */

/* interface NumberDictionary {
  [index: string]: number;

  length: number;
  name: string;
} */

/* interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
} */

/**
  6.2 扩展类型
*/

/* interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
} */

/* interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: 'red',
  radius: 42,
} */

/**
  6.3 交叉路口类型
*/

/* interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
  console.log(`Color was ${circle.color}`)
  console.log(`Radius was ${circle.radius}`)
}

draw({ color: 'blue', radius: 42 })
draw({ color: 'red', raidus: 42 }) */

/**
  6.5 通用对象类型
*/

/* interface Box {
  contents: unknown;
}

let x: Box = {
  contents: 'hello world'
} */

/* interface Box<Type> {
  contents: Type;
}

interface StringBox {
  contents: string;
}

let boxA: Box<string> = { contents: 'hello' }

boxA.contents;

let boxB: StringBox = { contents: 'world' }
boxB.contents

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
} */

/* type Box<Type> = {
  contents: Type;
}

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
type OneOrManyOrNullStrings = OneOrManyOrNull<string> */

/**
  6.6 数组类型
*/

/* function doSomething(value: Array<string>) {

}

let myArray: string[] = ["hello", "world"];

doSomething(myArray)
doSomething(new Array("hello", "world")) */

/* function doStuff(values: ReadonlyArray<string>) {
  const copy = values.slice()
  console.log(`This first value is ${values[0]}`)
  values.push("hello!!")
} */

// const roArray: ReadonlyArray<string> = ["red", "green", "blue"]

/* function doStuff(values: readonly string[]) {
  const copy = values.slice()
  console.log(`The first value is ${values[0]}`)

  values.push("1223")
} */

/* let x: readonly string[] = []
let y: string[] = []

x = y;
y = x; */

/**
  6.7 元组类型
*/

/* type StringNumberPair = [string, number]

function doSomething(pair: StringNumberPair) {
  const a = pair[0]
  const b = pair[1]

  const c = pair[3]
} */

/* interface StringNumberPair {
  length: 2;
  0: string;
  1: number;

  slice(start?: number, end?: number): Array<string | number>;
} */

/* type Either2dOr3d = [number, number, number?]

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
} */

/* type StringNumberBooleans = [string, number, ...boolean[]]
type StringBooleanNumber = [string, ...boolean[], number]
type BooleansStringNumber = [...boolean[], string, number]

const a: StringNumberBooleans = ["hello", 1]
const b: StringNumberBooleans = ["beautiful", 2, true]
const c: StringNumberBooleans = ["world", 3, true, false, true] */

/* function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args
} */












