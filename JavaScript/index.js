


/* let empty = new Object;
console.log(typeof empty)
console.log(empty instanceof Object)
console.log('toString' in empty)


for (let key in empty) {
  console.log(key)
}
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString')) */

/* function asConstructor(f) {
  return Object.assign(f, {
    prototype: {'constructor': f}
  })
}

let aClass = asConstructor(new Function)

console.log(aClass)

let obj = new aClass
console.log(obj) */

/* function MyObject() {}

console.log(MyObject.prototype.constructor === MyObject)

delete MyObject.prototype.constructor

console.log(MyObject.prototype.constructor === Object) */

/* let empty = {}

let proto = Object.getPrototypeOf(empty)
let props = Object.getOwnPropertyNames(empty)

console.log(proto === Object.prototype)

console.log(props.length)

let propsInChain = Object.getOwnPropertyNames(Object.prototype)
console.log(propsInChain)
console.log(Object.keys(propsInChain).length)

let enumerabledMembers = Object.values(propsInChain).filter(descriptor => descriptor.enumerable);
console.log(enumerabledMembers.length) */

/* function MyObject() {}
MyObject.prototype = null;

let obj = new MyObject()

console.log(Object.getPrototypeOf(obj).constructor === Object) */

/* function MyObject() {
  this.showMe = function () {
    console.log(typeof this)
  }

  console.log('call in ...')
}

MyObject.prototype = null;
let obj = new MyObject();
obj.showMe()

console.log(Object.getPrototypeOf(obj) === Object.prototype)

Object.setPrototypeOf(obj, null)
console.log(typeof obj)
console.log('toString' in obj)
console.log(obj instanceof Object)
obj.showMe() */

/* function MyObject() {}

function MyObjectEx() {}
MyObjectEx.prototype = new MyObject();
MyObjectEx.prototype.constructor = MyObjectEx;

function MyObjectEx2() {}
MyObjectEx2.prototype = new MyObjectEx()
MyObjectEx2.prototype.constructor = MyObjectEx2;

let obj = new MyObjectEx2();

let proto = Object.getPrototypeOf(obj);
while (proto) {
  console.log('>> ' + proto.constructor);
  proto = Object.getPrototypeOf(proto);
}

console.log('>> ' + proto);
console.log('==================================')

MyObject.prototype.aValue = 100;
console.log(obj instanceof MyObject)
console.log(obj.aValue)

Object.setPrototypeOf(obj, {})
console.log(obj instanceof MyObject)
console.log(obj instanceof Object)
console.log(typeof obj)
console.log(obj.aValue)

Object.setPrototypeOf(obj, null)
console.log(obj instanceof Object)
console.log(typeof obj) */

/* function MyObject() {}

let obj = new MyObject()
console.log('name' in obj)

MyObject.prototype.name = 'MyObject'
console.log('name' in obj) */

/* function Animal() {}
function Mammal() {}
function Canine() {}
function Dog() {}
function Cat() {}

Mammal.prototype = new Animal()
Canine.prototype = new Mammal()
Dog.prototype = new Canine()
Cat.prototype = new Mammal()

function isAnimal(obj) {
  return obj instanceof Animal;
}

let dog = new Dog()
let cat =  new Cat()
console.log(isAnimal(dog))

Animal.prototype.respire = function () {
  
}

console.log('respire' in dog)
console.log('respire' in cat) */

// function MyObject() {}
// console.log(MyObject.prototype)

function newOperator(ctor) {
  if (typeof ctor !== 'function') {
    throw 'newOperator function the first param must be a function';
  }

  console.log(newOperator.target)

  let args = Array.prototype.slice.call(arguments, 1);

  let obj = {};
  Object.setPrototypeOf(obj, ctor.prototype);

  let result = ctor.apply(obj, args);
  var isObject = typeof result === 'object' && result !== null;
  var isFunction = typeof result === 'function';
  
  return isObject || isFunction ? result : obj;
}

function MyObject(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let obj = newOperator(MyObject, '王五', 32, '男')
console.log(obj)