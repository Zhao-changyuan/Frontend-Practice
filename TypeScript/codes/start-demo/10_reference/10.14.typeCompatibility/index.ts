
/**
 * 
 * 10.14 类型兼容性
 */

/* interface Pet {
  name: string;
}

class Dog {
  name: string;
}

let pet: Pet;
pet = new Dog; */

/* interface Pet {
  name: string;
}
let pet: Pet;

let dog = {name: "Lassie", ower: 'mi'}

function greet(pet: Pet) {
  console.log("Hello, " + pet.name)
}
greet(dog) */

/* let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x;
x = y; */

/* let items = [1, 2, 3];
items.forEach((item, index, array) => console.log(item))

items.forEach((item) => console.log(item)) */

/* let x = () => ({ name: 'Alice' })
let y = () => ({ name: 'Alice', location: "Seattle" })

x = y;
y = x; */

/* enum EventType {
  Mouse,
  Keyboard,
}

interface Event {
  timestamp: number;
}

interface MyMouseEvent extends Event {
  x: number;
  y: number;
}

interface MyKeyEvent extends Event {
  keyCode: number;
}

function listentEvent(evenType: EventType, handler:(n: Event) => void) {

}

listentEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + e.y)) */

/* function invokeLater(args: any[], callback: (...args: any[]) => void) {

}

invokeLater([1, 2], (x, y) => console.log(x + ',' + y)) */

/* enum Status {
  Ready,
  Waiting,
}

enum Color {
  Red,
  Blue,
  Green,
}

let status = Status.Ready;
status = Color.Green; */

/* class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number;
  constructor(numFeet: number) {}
}

let a:  Animal;
let s1:  Size;
a = s1;
s1 = a; */

/* interface Empty1<T> {
  data: T;
}

let x: Empty1<number>
let y: Empty1<string>
x = y; */

/* let identity = function <T>(x: T): T {
  
}
let reverse = function <U>(y: U): U {
  
}

identity = reverse; */





