




/* function Person() {}

Person.prototype = {
  name: 'zhangsan',
  age: 29,
  job: '法外狂徒',
  sayName() {
    console.log(this.name)
  }
}

Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person,
})

let friend = new Person()
console.log(friend instanceof Object)
console.log(friend instanceof Person)

console.log(friend.constructor === Person)
console.log(friend.constructor === Object)

Person.prototype.sayHi = function () {
  console.log('hi')
}

friend.sayHi() */

/* function Person() { }
Person.prototype.sayHi = function () {
  console.log('hi')
}

let obj = new Person()
obj.sayHi()

Person.prototype = {
  sayHi() {
    console.log('new Hi')
  }
}

let obj2 = new Person()


obj.sayHi()
obj2.sayHi() */

/* function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubType() {
  this.subproperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
}

let instance = new SubType();
console.log(instance.getSuperValue())

console.log(instance instanceof Object)
console.log(instance instanceof SubType)
console.log(instance instanceof SuperType) */

/* function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubType() {
  this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSuperValue = function () {
  return this.subproperty;
}

SubType.prototype.getSuperValue = function () {
  return false;
}

let instance = new SubType();
console.log(instance.getSuperValue()) */

/* function SuperType() {
  this.colors = ['red', 'blue', 'green']
}

function SubType() {
}

SubType.prototype = new SuperType();

let instance1 = new SubType();
instance1.colors.push('black')
console.log(instance1.colors)

let instance2 = new SubType();
console.log(instance2.colors) */

/* function SuperType() {
  this.colors = ['red', 'blue', 'green']
}

function SubType() {
  SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors)

let instance2 = new SubType();
console.log(instance2.colors) */

/* function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
  console.log(this.age)
}

let instance1 = new SubType('wangwu', 29)
instance1.colors.push('black')
console.log(instance1.colors)

instance1.sayName()
instance1.sayAge() */

function object(o) {
  function F() {}
  F.prototype = o
  return new F();
}

let person = {
  name: '王五',
  friends: ['李四', '王建国', '杨笠']
}

let anotherPerson = Object.create(person, {
  name: {
    value: 'Greg'
  }
})

console.log(anotherPerson.name)



