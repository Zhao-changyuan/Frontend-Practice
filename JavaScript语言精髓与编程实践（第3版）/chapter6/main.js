
/* console.log(new Number(3));

var values = [100, 'hello, world!', true];
var types = { number: Number, string: String, boolean: Boolean };
values.map(value => new types[typeof value](value))
    .forEach(obj => console.log(typeof obj, obj)); */

// console.log(new Object(3));

/* var values = [1000, 'hello, world!', true, Symbol()];
values.map(value => new Object(value))
    .forEach(obj => console.log(typeof obj, obj)); */

/* var x = 100;

console.log(x instanceof Number);

console.log('toString' in x); */

/* var x = 100;
Object.prototype.getSelf = function() {
    return this;
}

var me = x.getSelf();
console.log(typeof me, me); */

/* Object.prototype.getSelf = function() {
    return this;
}

Object.prototype.getClass = function() {
    return this.constructor;
}

Object.prototype.getTypeof = function() {
    return typeof this;
}

Object.prototype.getInstanceof = function() {
    return this instanceof this.getClass();
}

var samples = [
    '',
    100,
    true,
    function() {},
    {},
    [],
    /./
];
samples.push(Symbol());

var getAttr = (v, v2, cls) => [
    typeof v, v2.getTypeof(), v instanceof cls, v2.getInstanceof()
];

samples.map(v => [typeof v, getAttr(v, v.getSelf(), v.getClass())])
.forEach(([metaName, attr]) => {
    console.log(metaName, ':', attr);
}); */

/* var str = 'abc';
str.toString = function() {
    return '';
}

console.log(str);
console.log(str.toString()); */

/* var str = 'abcde';

function newToString() {
    return 'hello, world!';
}

function func(x) {
    x.toString = newToString;
}

func(str);
console.log(str); */

/* [Number, String, Boolean].map(Class => new Class(null))
.forEach(x => console.log(x)); */

/* var x = new String('123');
x.toString = function() {
    return new Object;
}

x.valueOf = function() {
    return new Object;
}

console.log(+x); */

/* var typeHint, x = new String('123');
var methods = ['toString', 'valueOf'];

if (typeHint == 'number') {
    methods = methods.reverse();
}

let result;
for (let method of methods.map(key => x[key])) {
    if (method  && method.call) {
        result = method.call(x);

        if (result === null || result instanceof Object) continue;
        console.log('Ok, got value:', result);
        break;
    }
}

throw new TypeError('Cannot convert ... to primitive value'); */

/* var x = new Object;
x.valueOf  = x.toString = () => null;
console.log(+x); */

// console.log(new String('6').valueOf());

/* var x = {
    toString: () => '10',
    valueOf: () => -1
};

console.log(parseInt(x));
console.log(Math.abs(x));

console.log(1 + x);

console.log("1" + x); */

/* class MyObject extends Object {
    toString() {
        return 'nothing'
    }

    valueOf() {
        return 0;
    }
}

var x = new MyObject;
console.log(x);

console.log(+x); */

/* var x = new Boolean(false);

console.log(x.valueOf());

console.log(!!x);

console.log('value is:', x);

console.log(+x); */

/* var x = new Number(100);
console.log(+x);

x.valueOf = () => 101;
console.log(+x);

x[Symbol.toPrimitive] = () => 0;
console.log(+x);

console.log(x);

console.log(x.toString()); */

/* var x= {};
x.toString = () => new Object;
x.valueOf = () => 0;

console.log('string value:', String(x));
console.log('number value:', Number(x));
console.log('boolean value:', Boolean(x)); */

/* console.log('0022' - 1);

console.log('00.22' * 10)

console.log('.22' * '100.'); */

// console.log(+'9.9E5');

/* var x = Symbol(true), y = Symbol(true), z = Symbol(new Object);
console.log(x === y); */

/* var x = Symbol(), obj = Object(x);

console.log(x === obj);

console.log(x == obj); */

/* var x = new Object;
x.toString = () => '1e-10';
x.valueOf = () => 1e10;

console.log(parseInt(x));

console.log(parseFloat(x));

console.log(Number(x)); */

/* var aArray = ['a', 'b', 'c', 'd'];
console.log('1' in aArray);

for (var i in aArray) {
    console.log(i + '=> ' + aArray[i]);
} */

/* var arr = [1, 2, '345', , 12];

var [x, y]= arr;
console.log(x, y);

console.log(['elements: ', ...arr]);

var {0: x, 1: y, length} = arr;
console.log(x, y, length);

var x = {length: 100, ...arr};
console.log(x.length + ' => ' + Object.keys(x)); */

/* var arr = new Array(1000*10000);
arr[1] = 3;
arr[3] = 1;
arr[5] = 5;
arr[9999] = 9;

function func(lv, rv) {
    console.log(lv + ", " + rv);
    return lv > rv ? 1 : (lv == rv ? 0 : -1);
}
arr.sort(func)

var proxy = new Proxy(arr, {
    ownKeys() {
        console.log('TRY -> ownKeys()');
        return Reflect.ownKeys(...arguments);
    },
    get(_, key) {
        console.log('GET -> ', key);
        return Reflect.get(...arguments);
    }
})

arr.length = 30;
proxy.sort();

for (let x of proxy);

for (let x in proxy); */

/* var arr = [1, 2, 3];
Object.defineProperty(arr, 'length', { writable: false });

arr.pop(); */

var getPropertyOwner = function f(obj, key) {
    return !obj ? null
        : obj.hasOwnProperty(key) ? obj
        : f(Object.getPrototypeOf(obj), key);
}

var typedArr = new Int32Array;
console.log(typedArr.hasOwnProperty('length'));

var p = getPropertyOwner(typedArr, 'length');
console.log(Object.getOwnPropertyDescriptor(p, 'length'));