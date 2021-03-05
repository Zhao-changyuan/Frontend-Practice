
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

var x = {
    toString: () => '10',
    valueOf: () => -1
};

console.log(parseInt(x));
console.log(Math.abs(x));

console.log(1 + x);

console.log("1" + x);