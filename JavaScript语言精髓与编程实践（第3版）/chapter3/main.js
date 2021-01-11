

/* console.log(typeof null);
var num = 0;

for (const key in null) {
    num++;
    console.log(key);
}

console.log(num); */

/* var num = 0;
for (var n in Object.prototype) {
    num++;
}

console.log(num); */

/* function MyObject() {}

MyObject.prototype.value = 'abc'

var obj1 = new MyObject();
var obj2 = new MyObject();

obj2.value = 10;
console.log(obj1.value);
console.log(obj2.value); */

/* var obj1 = new Object;
var obj2 = new Object;

Object.prototype.value = 'abc';
console.log(obj1.value);
console.log(obj2.value);

console.log(Object.getOwnPropertyNames(obj2));

obj2.value = '10';
console.log(obj1.value);
console.log(obj2.value);
console.log(Object.getOwnPropertyNames(obj2)); */

/* function asConstructor(f) {
    return Object.assign(f, {
        prototype: {'constructor': f}
    });
}


function MyObject() {}
console.log(MyObject.prototype.constructor === MyObject);
delete MyObject.prototype.constructor;
console.log(MyObject.prototype.constructor === Object); */

/* var empty = {};

var proto = Object.getPrototypeOf(empty);
var props = Object.getOwnPropertyNames(empty);

console.log(proto === Object.prototype);
console.log(props.length);

var propsInChain = Object.getOwnPropertyDescriptors(Object.prototype);
console.log(Object.keys(propsInChain).length);

var enumberableMembers = Object.values(propsInChain).filter(descriptor => descriptor.enumberable);
console.log(enumberableMembers.length); */

/* function MyObject() {}
console.log(Object.getOwnPropertyNames(MyObject.prototype)); */

/* var empty = {};
var proto = Object.getPrototypeOf(empty);
var props = Object.getOwnPropertyNames(empty);

console.log(proto === Object.prototype);
console.log(props.length); */

/* function MyObject() {
    this.showMe = function() {
        console.log(typeof this);
    }

    console.log('call in ...');
}
MyObject.prototype = null;

var obj = new MyObject;
obj.showMe();

try {
    console.log(obj instanceof MyObject);
} catch (error) {
    console.log(error.message);
}

console.log(Object.getPrototypeOf(obj) === Object.prototype);

Object.setPrototypeOf(obj, null);
console.log(typeof obj);
console.log('toString' in obj);
console.log(obj instanceof Object);
obj.showMe(); */

/* function MyObject() {}
function MyObjectEx() {}

MyObjectEx.prototype = new MyObject();
var obj1 = new MyObjectEx();
var obj2 = new MyObjectEx();

console.log(new MyObject().constructor === MyObject);
console.log(MyObjectEx.prototype.constructor === MyObject); */

/* function MyObject() {}

function MyObjectEx() {}
MyObjectEx.prototype = new MyObject();
MyObjectEx.prototype.constructor = MyObjectEx;

function MyObjectEx2() {}
MyObjectEx2.prototype = new MyObjectEx();
MyObjectEx2.prototype.constructor = MyObjectEx2;

var obj = new MyObjectEx2();

var proto = Object.getPrototypeOf(obj);
while(proto) {
    console.log('>> ' + proto.constructor);
    proto = Object.getPrototypeOf(proto);
}
console.log('>>> ' + proto);

MyObject.prototype.aValue = 100;
console.log(obj instanceof MyObject);
console.log(obj.aValue);

Object.setPrototypeOf(obj, {});
console.log(obj instanceof MyObject);
console.log(obj instanceof Object);
console.log(typeof obj);
console.log(obj.aValue);

Object.setPrototypeOf(obj, null);
console.log(obj instanceof Object);
console.log(typeof obj); */

/* // 构造器
function Animal() {} // 动物
function Mammal() {} // 哺乳类
function Canine() {} // 犬科
function Dog() {} // 狗
function Cat() {} // 猫

// 2. 原型链表
Mammal.prototype = new Animal;
Canine.prototype = new Mammal;
Dog.prototype = new Canine;
Cat.prototype = new Mammal;

function isAnimal(obj) {
    return obj instanceof Animal;
}

let dog = new Dog();
let cat = new Cat();
console.log(isAnimal(dog));

Animal.prototype.respire = function() {
    console.log('交换氧气与二氧化碳');
};

console.log('respire' in cat);
console.log('respire' in dog); */

/* class MyObjectEx {
    constructor() {
        console.log(typeof constructor);
    }

    foo() {
        console.log(typeof foo);
    }
}

new MyObjectEx().foo(); */

/* class MyObject {
    static showMe() {
        console.log('我是：' + super.toString());
    }
}

MyObject.showMe() */

/* class MyObject {}
MyObject.prototype.x = 100;

class MyObjectEx extends MyObject {
    foo() {
        console.log(super.x);
    }
}

var obj = new MyObjectEx;
obj.foo();
console.log(obj.x);

obj.x = 200;
console.log(obj.x);
obj.foo();

MyObject.prototype.x = 300;
obj.foo();
console.log(obj.x); */

/* class MyObject {}
MyObject.x = 100;

class MyObjectEx extends MyObject {
    static foo() {
        console.log(super.x);
    }
}

console.log(Object.getPrototypeOf(MyObjectEx) === MyObject);
MyObjectEx.foo();

console.log(MyObjectEx.prototype === MyObject); */

/* var obj = {
    foo() {
        console.log(super.x);
    }
};

obj.foo();
Object.setPrototypeOf(obj, {x: 100})
obj.foo() */

/* var proto = {data: 'based'};

var obj = {
    foo() {
        console.log(' => method obj.foo()');
        console.log(' => ', super.data);
    }
}

Object.setPrototypeOf(obj, proto);

var obj2 = Object.create(null);
obj2.foo = obj.foo;

obj2.foo(); */

/* class MyObject {
    get defaultCount() {
        return 10;
    }
}

class MyObjectEx extends MyObject {
    get defaultCount() {
        return super.defaultCount + 3;
    }
}

console.log((new MyObjectEx).defaultCount);
console.log(MyObject.prototype.defaultCount); */

/* class MyObject {
    static get defaultCount() {
        return 10;
    }
}

class MyObjectEx extends MyObject {
    static get defaultCount() {
        return super.defaultCount + 3;
    }

    printMyCount() {
        console.log(this.count || MyObjectEx.defaultCount);
    }

    printMyCount2() {
        console.log(this.count || (MyObject.defaultCount + 3));
    }
}

(new MyObjectEx).printMyCount(); */

/* class MyClass extends Object {
    static superTag() {
        console.log(super.tag);
    }
}

Object.tag = 'Object';

MyClass.superTag();
var NewParent = new Function;
NewParent.tag = 'A New Parent';
Object.setPrototypeOf(MyClass, NewParent);
MyClass.superTag();
foo = MyClass.superTag;
foo(); */

/* class MyObject {}
console.log(typeof MyObject); */

/* class MyObject {}

class MyObjectEx extends MyObject {}

console.log(Object.getPrototypeOf(MyObjectEx) === MyObject);
console.log(Object.getPrototypeOf(MyObjectEx.prototype) === MyObject.prototype); */

/* class MyObject {
    constructor() {
        console.log('Value x: ', super.x, this.x);
    }
}

console.log(Object.getPrototypeOf(MyObject.prototype).constructor === Object);
console.log(Object.getPrototypeOf(MyObject.prototype) === Object.prototype);


Object.getPrototypeOf(MyObject.prototype).x = 100;
class MyObject2 extends Object {
    constructor() {
        super();
        console.log('Value y: ', super.y, this.y);
    }
}

Object.prototype.y = 2000;

new MyObject;
new MyObject2;

console.log(Object.getPrototypeOf(MyObject2.prototype).constructor === Object); */

/* class MyObject {}

class MyObjectEx extends MyObject {}

function MyObject2() {

}

console.log(MyObject === MyObject.prototype.constructor);
console.log(Object.getPrototypeOf(MyObjectEx.prototype) === MyObject.prototype); */

/* function MyObject() {
    var data = 100;

    function _run(v) {
        console.log(v);
    }

    this.value = 'The data is: ';

    this.run = function() {
        _run(this.value + data);
    }
}

var obj = new MyObject();
obj.run(); */

/* function Bird() {
    this.wing = 2;
    this.tweet = function() {};
    this.fly = function() {
        console.log('I can fly');
    };
}

function asBird(x) {
    Bird.call(x);
    return x;
}

asBird(new Object).fly();

function isBird(instance) {
    return instance instanceof Bird;
}

function doFly(me) {
    if (!isBird(me)) {
        throw new Error('对象不是Bird或其子类的实例');
    }

    me.fly();
}

doFly(new Bird);

doFly(asBird(new Object)); */

/* var f1 = new Function, f2 = Function;
Object.setPrototypeOf(f2, f1);

console.log(f2 instanceof f1);
console.log(f1.isPrototypeOf(f2)); */

/* function Bird() {
    this.wing = 2;
    this.tweet = function() {};
    this.fly = function() {
        console.log('I can fly');
    };
}

function asBird(x) {
    Bird.call(x);
    return x;
}

asBird(new Object).fly();

function isBird(instance) {
    return instance instanceof Bird;
}

function doFly(me) {
    if (!isBird(me)) {
        throw new Error('对象不是Bird或其子类的实例');
    }

    me.fly();
}

doFly(new Bird);

// doFly(asBird(new Object));

function Ostrich() {
    this.fly = function() {
        console.log('I can\'t fly');
    }
}

Ostrich.prototype = new Bird();
Ostrich.prototype.constructor = Ostrich;
doFly(new Ostrich()); */

/* var obj = {
    showThis: function() {
        console.log(this);
    }
}

var aFunction = obj.showThis;
aFunction()

var func = () => this;
console.log(func());

function showInStrict() {
    'use strict'
    console.log(this);
}

showInStrict();

var showGlobal = obj.showThis;
showGlobal();

obj.showMe = showInStrict;
obj.showMe();

var showMe = showInStrict.bind(new Object);
var showNull = showInStrict.bind(null);
showMe();
showNull(); */

/* function foo() {
    var showInArrow = () => {
        console.log(this.name);
    };

    showInArrow();

    var obj = {
        showInArrow,
        name: 'aObject',
        showThis: function() {
            console.log(this.name);
        }
    };

    with (obj) {
        var showThis2 = () => console.log(this.name);
        showThis();
        showThis2();
        showInArrow();
    }
}

foo.call({
    name: 'Outside'
});

foo.call({
    name: 'Outside3333'
}); */

/* function MyObject() {}

MyObject.prototype.OnError = undefined;

MyObject.prototype.doAction = function(str) {
    try {
        return eval(str);
    } catch (error) {
        if (this.OnError) {
            this.OnError(error);
        }
    }
}

var obj = new MyObject();
obj.OnError = function(e) {
    console.error(e);
}

obj.doAction('aObj.tag = 100'); */

let extend = function(subClass, baseClass) {
    subClass.baseConstructor = baseClass;
    subClass.base = {};

    baseClass.call(subClass.base);
};

function Mouse() {}

function Animal(name) {
    this.name = name;

    this.say = function(message) {
        console.log(this.name + ': ' + message);
    }

    this.eat = function() {
        this.say('Yum!');
    }

    this.respire = function() {

    }
}

function Cat() {
    Cat.baseConstructor.call(this, 'cat');

    this.eat = function(food) {
        if (food instanceof Mouse) {
            Cat.base.eat.call(this);
        } else {
            this.say("Yuk! I only eat mice - not " + food.name);
        }
    }
}

extend(Cat, Animal);

function Lion() {
    Lion.baseConstructor.call(this, 'lion');
}

extend(Lion, Cat);

var cat = new Cat();
var lion = new Lion();
var mouse = new Mouse();
var unknowObj = {name: 'shadow'};

cat.eat(mouse);
cat.eat(unknowObj)
lion.eat(mouse);

var obj1 = new Animal();
var obj2 = new Animal();

console.log(obj1.respire === obj2.respire);