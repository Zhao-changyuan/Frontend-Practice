
/**
 泛型
*/

/* function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>("myString");

let output1 = identity("myString") */

/* function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length)
  return arg
} */

/* interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity; */

/* class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y;
}

let stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ""
stringNumeric.add = function (x, y) {
  return x + y;
}

console.log(stringNumeric.add(stringNumeric.zeroValue, "Text")) */

/**
  7.1.6 通用约束
*/

/* interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length)
  return arg
}

loggingIdentity({ length: 10, value: 3 }) */

/**
  7.1.7 在通用约束中使用类型参数
*/

/* function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, "a")
getProperty(x, "m") */

/**
  7.1.8 在泛型中使用类类型
*/

/* function create<Type>(c: { new(): Type }): Type {
  return new c();
} */

/* class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask; */



