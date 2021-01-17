
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



