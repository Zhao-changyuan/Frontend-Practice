
/* let tag = 0;

if (tag > 1) {
    console.log('true');
} else {
    console.log('false');
}

(tag > 1) ? console.log('true') : console.log('false'); */

/* let value = 200;

switch(value) {
    case 100:
    case 200: console.log('value is 200 or 100'); break;
    case 300: console.log('value is 300'); break;
    default: console.log('I don\'t know.');
}

value = 111;
(value == 100) || (value == 200) ? console.log('value is 200 or 100')
    : (value == 300) ? console.log('value is 300')
    : console.log('I don\'t know'); */

/* var loop = 100;
var i = loop;

do {
    console.log(i);
    i--;
} while (i > 0);

console.log('------------------');
loop = 100;
function foo(i) {
    console.log(i);
    (--i > 0) && foo(i);
}
foo(loop);

console.log('------------------');
loop = 100;
void function(i) {
    console.log(i);
    (--i > 0) && arguments.callee(i);
}(loop); */

/* function MyFunc() {
    var value = 100;

    function setValue(v) {
        value = v;
    }

    function getValue() {
        return value;
    }

    return {setValue, getValue};
}

var { setValue: setter, getValue: getter } = MyFunc();
console.log(getter());
setter(300);
console.log(getter()); */

/* function foo(v1, v2 = null, v3, v4 = 1, v5) {
    console.log(v1, v2, v3, v4, v5);
}

foo('V1', undefined, 'V3')

console.log(foo.length); */

/* function foo(filename) {
    var {filename2, ...args} = arguments;
    console.log(filename, filename2, args);
}

foo(1, 3, 4, 5); */

/* function foo(filename) {
    var [filename2, ...args] = arguments;
    
    filename = 'new file name';
    console.log(arguments[0]);
    console.log(filename2);

    arguments[0] = filename2;
    console.log(filename);

    filename2 = 'update again';
    console.log(arguments[0]);
    console.log(filename);
}

foo('test.txt'); */

/* function foo(v1, v2, v3, name) {
    return foo2.apply(this, arguments);
}

function foo2(_, _, _, name) {
    console.log(_, name);
}

foo(1, 2, 3, 'name'); */

/* function foo(v1, v2, v2="unknow", name) {

} */

/* function foo(filename, ...args) {
    filename = 'new file name';
    console.log(arguments[0]);
}

foo('test.txt'); */

/* function foo(a = 1, b, c=2, d) {
    console.log(...arguments);
    console.log(a, b, c, d);
}
foo(undefined, 100 ,200, 300) */

/* function print(msg) {
    console.log(msg);
    console.log(arguments);
}

var i = 100;
print(i+=20, i*=2, 'value: ' + i);
print(i); */

/* function foo() {
    function func() {

    }

    if (true) {
        function func2() {

        }
    }

    console.log(typeof foo, typeof func, typeof func2);
}

foo();
console.log(typeof foo, typeof func, typeof func2); */

/* var f = function func2() {
    console.log(typeof func2);
}

f();

console.log(typeof func2); */

/* var func2 = function() {
    console.log(typeof func2);
};

func2();

x = func2;
func2 = 'a string';
x(); */

/* var x = function() {}
var y = function foo() {}

console.log(x.name, y.name);

delete x.name;
Object.defineProperty(y, 'name', { value: 'y' });
console.log(x.name);
console.log(y.name); */

/* function* myGenerator(x=0, y=0, z=0) {
    yield x* 2 + y * z;
}

var tor = myGenerator(1,2,3);

console.log(tor instanceof myGenerator); */

/* var obj = new Object;
function* f() {
    console.log('this is <obj>:', this === obj);
}

var tor = f.call(obj);
tor.next();

var tor2 = f();
tor2.next(); */

/* function* myGenerator2(x) {
    console.log('in generator:', yield 2*x);
    console.log('again:', [yield]);
}

var tor = myGenerator2(10);
console.log('yield Value:', tor.next('1st ignored').value);

tor.next('data...')

tor.next(1, 2, 3, 4) */

/* class MyClass {
    constructor() {
        console.log(new.target === MyClass);
    }
}

x = new MyClass;

try {
    MyClass();
} catch (error) {
    console.log(error.message);
} */

/* var obj = {
    MyClass: class {
        get value() {
            return 10;
        }
    }
}
console.log((new obj.MyClass).value); */

/* var obj2 = {
    get name() {
        return 'property getter'
    },

    async callMe() {},

    *maker() {}
};

console.log('prototype' in obj2.maker); */

/* var obj3 = {
    callMe() {
        console.log(typeof callMe);
    },

    *callMe2() {
        console.log(typeof callMe2);
    }
};

obj3.callMe();
obj3.callMe2().next(); */

/* function foo() {
    var arrowFunc = () => this.name;
    var obj2 = { name: 'me' };
    console.log('call:', arrowFunc.call(obj2));
    console.log('bind:', arrowFunc.bind(obj2)());
}

var obj = { name: 'object <obj>' };
foo.call(obj); */

/* class MyFunc {
    static foo() {
        console.log('prototype method in MyFunc');
    }
}

class MyFuncEx extends MyFunc {
    static foo() {
        console.log('own method in MyFuncEx');
    }

    callMe() {
        console.log('call me in MyFuncEx');
    }
}

var f = MyFuncEx.bind();
MyFuncEx.foo();
f.foo();

console.log('prototype' in Object.getPrototypeOf(MyFunc));

// class MyFunc2 extends MyFunc.bind() {}

class MyFunc3 extends MyFuncEx.bind() {
}

class MyFunc4 extends MyFuncEx {}

(new MyFunc4).callMe();

console.log('callMe' in Object.getPrototypeOf(MyFunc4.prototype));


console.log('callMe' in Object.getPrototypeOf(MyFunc3.prototype));

console.log('callMe' in new MyFunc3); */

/* function foo() {
    'use strict';
    console.log('this: ', this && typeof this);
    console.log('args: ', ...arguments);
}

f = foo.bind(null, 1, 2, 3);
f(4,5,6); */

/* function MyObject(src) {
    console.log('Construct by', src);
    console.log(Object.getPrototypeOf(this) === MyObject.prototype);
    console.log(new.target === MyObject);
}

new MyObject('MyObject');
X = MyObject.bind(null, 'bound MyObject');
new X; */

/* var func = function() {

}

function myFunc() {
    console.log('myFunc');
}

function test(foo) {
    return (foo !== myFunc) ? foo : function() {
        console.log('111');
    }
}

test(myFunc)(); */

/* function foo() {}
console.log(foo instanceof Object);

console.log(foo instanceof Function);

console.log(Function instanceof Function);

console.log(Function instanceof Object);

class MyFunction extends Function {

}

console.log(typeof MyFunction);
console.log(new MyFunction instanceof Function);
console.log(new MyFunction instanceof Object); */

/* class AsyncFunction extends Function {}

var name = 'aVariantName';
var myFunc = new AsyncFunction('x', 'y', `
    var ${name} = x + y;
    console.log("calculated:", ${name});
    return {${name}};
`);

myFunc(1, 2).then(obj => console.log('promised:', obj[name])) */

/* var { proxy: func, revoke } = Proxy.revocable(new Function, {})

func();

revoke();
console.log(typeof func);

try {
    func();
} catch (e) {
    console.log('ERROR：', e.message);
} */

/* function foo() {
    return foo();
}

function() {
    return arguments.callee();
} */

/* const fact = x => x && x*fact(x - 1) || 1;
console.log(fact(9)); */

/* var obj = {
    get fact() {
        const fact = x => x && x*fact(x - 1) || this.power ||1;
        return fact;
    }
}

obj.power = 100;
console.log(obj.fact(9)); */

/* var obj = {};
const fact = (function(x) {
    return x && x*fact(x - 1) || this.power ||1;
}).bind(obj);
obj.power =100;
console.log(fact(9)); */

/* function MyObject(x) {
    MyObject.call(this, x);
}

var obj = new (function(x) {
    arguments.callee(this, x);
}) */

/* var ParentClass = class {};

class MyClass extends ParentClass {
    constructor() {
        return {
            message: 'created by MyClass'
        };
    }
}

class MyClassEx extends MyClass {
    constructor() {
        // super();
        // console.log(this.message);
    }
}

new MyClassEx */

/* var excel = {
    get Exit() {
        process.exit(0);
    }
}

excel.Exit */

/* function callback(x) {
    console.log('Hi, ', this.name);
    console.log('X: ', x);
}

var thisObj2 = {
    get callback() {
        let x = 200;
        return () => {
            console.log('hi, ', this.name);
            console.log('X, ', x);
        }
    }
}

var thisObj1 = { name: 'localy object 1' };
setTimeout(callback.bind(thisObj1, 100), 1000);

thisObj2.name = 'localy object 2';
setTimeout(thisObj2.callback, 1000); */

/* function foo(tpl, ...values) {
    console.log(tpl);
    console.log(values[0]);
}

foo`try call ${foo.name}`; */

/* function myFunc() {
    console.log(arguments.callee === myFunc.arguments.callee);
    console.log(arguments.callee === myFunc);
}

myFunc(); */

/* let getDesc = 'return Object.getOwnPropertyDescriptor(arguments, "callee")';
let f = new Function(getDesc);
console.log(f());

f = new Function('"use strict";' + getDesc);
console.log(f());;
f().get(); */

/* var showIt = f => console.log('-> ', f.name);

function enumStack(callback) {
    var f = arguments.callee;
    while(f.caller) {
        callback(f = f.caller);
    }
}

function level_n() {
    enumStack(showIt);
}

function level_2() {
    level_n();
}

function test() {
    level_2();
}

test(); */

/* var f = new Function, obj = {f};
obj.f();
obj['f']();

f.apply(thisArg, [...args]);
f.call(thisArg, ...args);

Reflect.apply(f, thisArg, [...args]);

var f2 = f.bind(thisArg, ...args);
f2(...args2); */

/* let obj = {
    get foo() {
        return () => {
            console.log(this.name);
        }
    },

    get foo2() {
        return () => {
            super.showMe();
        }
    }
};

obj.name = 'The <obj>.';

Object.getPrototypeOf(obj).showMe = function() {
    console.log(this.name);
};

obj.foo();
obj.foo2(); */

/* var propObj, obj = new Object;
var propSuper = {
    foo() { console.log('Here') }
}

Object.defineProperty(obj, 'prop', propObj = {
    ["set"]() {
        super.foo();
        console.log('这是一个特殊的setter，它是一个“真的”setter方法');
    }
});

Object.setPrototypeOf(propObj, propSuper)

obj.prop = 100;
 */

/* class MyClass {
    get x() { return 100 }
}

class MyClassEx extends MyClass {
    get x() { return 200 }

    foo() {
        console.log(super.x, this.x);
    }
}

var propObj;
Object.defineProperty(MyClassEx.prototype, 'foo2', propObj = {
    value() {
        console.log(super.x, this.x);
    }
})

Object.setPrototypeOf(propObj, MyClass.prototype);
var obj = new MyClassEx;
obj.foo()
obj.foo2() */

/* var arr = [1, 2, 3];
for (let x of arr) {
    console.log(x);
}

console.log(...'abc');
console.log([...'abc']); */

/* var arr = [1, 2, 3];
var iteratorMethod = arr[Symbol.iterator];

// 观察方法
var monitor = {
    ["return"](value) {
        console.log(" >>> RETURN", this && this.name || '');
        return { value, done: true };
    }
};

// 重写迭代方法
arr[Symbol.iterator] = function() {
    var tor = iteratorMethod.call(this);
    return Object.assign(tor, monitor);
}

for (let i of arr) {
    if (i == 2) {
        throw new Error('error in for...of');
    }
    console.log(" >>", i);
} */

/* function* myGenerator(x = 0, y = 0, z = 0) {
    console.log(' -> ', ...arguments);

    x = x * 2 + y * z;
    yield x;

    yield z - x;

    return "OK";
}
var tor = myGenerator(1, 2, 3);

console.log(new Set(myGenerator(1, 2, 3)));

tor = myGenerator(1, 2, 3);
let arr = [...tor];
console.log(arr);

console.log(...tor);

console.log(...arr);

console.log(...arr);

console.log(new Set(arr)); */

/* var obj= {
    [Symbol.iterator]: function*() {
        for(var i = 0; i < 10; i++) yield i;
    }
}

console.log(...obj);

console.log(...obj); */

/* let f = function* () {}

let tor = f();

console.log('return' in tor);

console.log(f.prototype.isPrototypeOf(tor));

console.log(Object.getPrototypeOf(f.prototype).hasOwnProperty('return')); */

/* function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return 'Okay';
}

var tor = myGenerator();

console.log(tor.next());

console.log(tor.return('Abort')); */

/* function *myGenerator(fileName) {
    var fd = fs.fileOpenSync(fileName);

    try {
        var x = yield.read
    } catch (e) {
        
    }
} */

/* var arr = [1, 2, 3]
var iteratorMethod = arr[Symbol.iterator];

var monitor = {
    ['return'](value) {
        console.log(" >> RETURN", this && this.name || '');
        return {value, done: true};
    },

    ['throw'](err) {
        console.log(" >> THROW", this && this.name || '');
        return { value: err, done: true };
    }
};

var target = [3, 4, 5];
target[Symbol.iterator] = function() {
    var tor2 = iteratorMethod.call(this);
    return Object.assign(tor2, monitor, { name: 'target' });
}

function* aGenerator() {
    yield 1;
    yield 2;
    yield* target;
    yield 6;
}

var tor = aGenerator();
for(let i of tor) {
    console.log(i);
}

tor = aGenerator();
for (let i of tor) {
    if (i == 3) {
        tor.throw();
    }
} */

/* function* testMe() {
    var x = yield 10;
    console.log('[GET]', x);
}

tor = testMe();

let generated = tor.next();
console.log(generated);

console.log(tor.next('sending data to "x"....')); */

/* function foo() {
    return function myFunc() {

    }
}

var f1 = foo();
var f2 = foo();

console.log(f1 === f2); */

/* function MyFunc() {
    var data = 100;
    

    function func_1() {
        data = data*5;
    }

    function func_n() {
        console.log(data);
    }

    func_1();
    func_n();
}

MyFunc(); */

var checker;

function myFunc() {
    if(checker) {
        checker();
    }

    console.log('do myFunc:' + str);
    var str = 'test.';
    
    if (!checker) {
        checker = function() {
            console.log('do Check:' + str);
        }
    }

    return arguments.callee;
}

myFunc()();

