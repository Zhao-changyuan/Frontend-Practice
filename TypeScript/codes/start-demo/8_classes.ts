
/**
  8. 类
*/



/* class Point {
  x = 1;
  y = 2;
}

const pt = new Point()
console.log(`${pt.x}, ${pt.y}`) */

/* class OKGreeter {
  name!: string;
} */

/* class Greeter {
  readonly name: string = "world"

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName
    }
  }

  err() {
    this.name = "not ok"
  }
}

const g = new Greeter()
g.name = "also not ok" */

/* class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
} */

/* class Point {
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {

  }
} */

/* class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    console.log(this.k)
    super()
  }

} */

/* class Point {
  x = 10;
  y = 20;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
 */

/* let x: number = 0;

class {
  x: string = "hello"

  m() {
    x = "world"
  }
} */

/* class C {
  _length = 0;

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value
  }
} */

/* class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value)

    if (!Number.isFinite(num)) {
      this._size = 0;
      return
    }

    this._size = num
  }
} */

/* class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
} */
/* 
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping(): void {
    console.log("ping")
  }
  
}

class Ball implements Pingable {
  ping(): void {
    throw new Error("Method not implemented.");
  }
  pong(): void {

  }

} */


/* interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(name: string): boolean {

  }

} */

/* interface A {
  x: number;
  y?: number;
}

class C implements A {
  x = 0;
}

const c = new C()
C.y = 10; */

/* class Animal {
  move() {
    console.log("Moving along!")
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!!")
    }
  }
}

const d = new Dog()
d.move()
d.woof(3) */

/* class Base {
  greet() {
    console.log("Hello, world!")
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet()
    } else {
      console.log(`Hello, ${name.toUpperCase()}`)
    }
  }
}

const d = new Derived()
d.greet()
d.greet("reader")

const b: Base = d;
b.greet()
 */

/* class Base {
  greet() {
    console.log("Hello, world!")
  }
}

class Derived extends Base {
  greet(name: string) {

  }
} */

/* class Base {
  name = "base"

  constructor() {
    console.log("My name is" + this.name)
  }
}

class Derived extends Base {
  name = "derived"
}

const d = new Derived() */

/* class Greeter {
  public greet() {
    console.log("hi")
  }
}

const g = new Greeter()
g.greet() */

/* class Greeter {
  public greet() {
    console.log("Hello, " + this.getName())
  }

  protected getName() {
    return "hi"
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    console.log("Howdy, " + this.getName())
  }
}

const g = new SpecialGreeter()
g.greet()
g.getName() */

/* class Base {
  protected m = 10;
}

class Derived extends Base {
  m = 15;
}

const d = new Derived()
console.log(d.m) */

/* class Base {
  protected x: number = 1;
}

class Derived1 extends Base {
  protected x: number = 5;
}

class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10;
  }

  f2(other: Base) {
    other.x = 10;
  }
} */

/* class Base {
  private x = 10;
}

const b = new Base()
console.log(b.x) */

/* class A {
  private x = 10;

  public sameAs(other: A) {
    return other.x === this.x
  }
} */

/* class MySafe {
  private secertKey = 123345;
}

const s = new MySafe()
console.log(s.secertkey)

console.log(s["secertKey"]) */

/* class Dog {
  #barkAmount = 0;
  personality = "happy"

  constructor() {}
} */

/* class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x)
  }
}

console.log(MyClass.x)
MyClass.printX()
 */

/* class MyClass {
  private static x = 0;
}

console.log(MyClass.x) */

/* class Base {
  static getGreeting() {
    return "Hello world"
  }
}

class Derived extends Base {
  myGreeting = Derived.getGreeting()
} */

/* class S {
  static name = "S!"
} */

/* class MyStaticClass {
  static doSomething() {}
}

function doSomething() {}

const MyHelperObject = {
  doSomething() {}
} */

/* class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("hello!") */

/* class Box<Type> {
  static defaultValue: Type;
} */

/* class MyClass {
  name = "MyClass";

  getName() {
    return this.name;
  }
}

const c = new MyClass()
const obj = {
  name: "obj",
  getName: c.getName
}

console.log(obj.getName()) */

/* class MyClass {
  name = "MyClass"

  getName = () => {
    return this.name;
  }
}

const c = new MyClass()
const g = c.getName
console.log(g()) */
/* 
type SomeType = {
  name: string;
  age: number;
}

function fn(this: SomeType, x: number) {
  
} */

/* class MyClass {
  name = "MyClass"
  getName(this: MyClass) {
    return this.name;
  }
}

const c = new MyClass()

c.getName()

const g =c.getName
console.log(g()) */

/* class Box {
  contents: string = ""

  set(value: string) {
    this.contents = value;
    return this;
  }
}

class ClearableBox extends Box {
  clear() {
    this.contents = ""
  }
}

const a = new ClearableBox()
const b = a.set("hello") */

/* class Box {
  content: string = ""
  sameAs(other: this) {
    return other.content === this.content;
  }
}

class DerivedBox extends Box {
  otherContent: string = "?"
}

const base = new Box()
const derived = new DerivedBox()
derived.sameAs(base) */

/* class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }

  isDirectory(): this is Directory{
    return this instanceof Directory;
  }

  isNetworked(): this is Networked & this {
    return this.networked;
  }

  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false)
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[]
}

interface Networked {
  host: string;
}

const fso: FileSystemObject = new FileSystemObject("foo/bar.txt", "foo")

if (fso.isFile()) {
  fso.content
} else if (fso.isDirectory()) {
  fso.children
} else if (fso.isNetworked()) {
  fso.host
} */

/* class Box<T> {
  value?: T;
  hasValue(): this is { value: T } {
    return this.value !== undefined
  }
}

const box = new Box()
box.value = "Gameboy"

box.value;

if (box.hasValue()) {
  box.value
} */

/* class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {

  }
}

const a = new Params(1, 2, 3)
console.log(a.x)
console.log(a.z) */

/* const someClass = class <Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
}

const m = new someClass("Hello") */

/* abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName())
  }
}

class Derived extends Base {
  getName(): string {
    return "11"
  }

}

function greet(ctor: new () => Base) {
  const instance = new ctor()
  instance.printName()
}

greet(Derived)
greet(Base)
 */

/* class Point1 {
  x = 0;
  y = 0;
}

class Point2 {
  x = 0;
  y = 0;
}

const p: Point1 = new Point2() */

/* class Person {
  name: string;
  age: number;
}

class Employee {
  name: string;
  age: number;
  salary: number;
}

const p: Person = new Employee() */

class Empty {}

function fn(x: Empty) {

}

fn(window)
fn({})
fn(fn)