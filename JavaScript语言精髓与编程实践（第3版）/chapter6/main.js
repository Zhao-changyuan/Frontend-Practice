/* var overrideDisabled = ([_, desc]) => !desc.configurable && !desc.writable;
var toDesc = key => [key, Object.getOwnPropertyDescriptor(global, key)];
var allDescriptor = Object.getOwnPropertyNames(global).map(toDesc);

var allKey  =allDescriptor.filter(overrideDisabled).map(([key]) => key);
console.log(allKey); */

/* var isRewrited = function(obj, key) {
    return obj.hasOwnProperty(key) && (key in Object.getPrototypeOf(obj));
}

var isInherited = function(obj, key) {
    return (key in obj) && !obj.hasOwnProperty(key);
}

var x = new String();
console.log(isInherited(x, 'charAt'));

console.log(String.prototype.hasOwnProperty('charAt'));
console.log(isInherited(String.prototype, 'charAt'));

x.charAt = new Function;
console.log(isRewrited(x, 'charAt'));
console.log(isInherited(x, 'charAt'));
console.log('----------------------------');

var getPropertyOwner = function f(obj, key) {
    return !obj ? null
    : obj.hasOwnProperty(key) ? obj 
    : f(Object.getPrototypeOf(obj), key);
}

console.log(isRewrited(x, 'charAt'));
console.log(getPropertyOwner(x, 'charAt') === x);

x.branew = 'Bran-new';

console.log(isInherited(x, 'branew'));

console.log(getPropertyOwner(Object.getPrototypeOf(x), 'branew')); */

/* function MyObject() {

}

MyObject.prototype.name = 'MyObject';

var obj1 = new MyObject();
var obj2 = new MyObject();

delete obj1.name;
console.log(obj1.name);

delete Object.getPrototypeOf(obj1).name;
console.log(obj1.name);
console.log(obj2.name); */

/* var getPropertyOwner = function f(obj, key) {
    return !obj ? null :
        obj.hasOwnProperty(key) ? obj :
        f(Object.getPrototypeOf(obj), key);
}

// 从对象（以及其原型）中删除属性
function deepDeleteProperty(obj, key) {
    if (!(key in obj)) return false;

    while (obj = getPropertyOwner(obj, key)) {
        if (!Reflect.deleteProperty(obj, key)) return false;
    }

    return true;
}

// 创建实例
var baseObj = Object.create({
    value: 100
});
var obj1 = Object.create(baseObj);
var obj2 = Object.create(baseObj);

// 重写
obj1.value = 200;
console.log(obj1.value);
console.log(obj2.value);

deepDeleteProperty(obj1, 'value');
console.log(obj1.value);
console.log(obj2.value); */

/* var y = 100;

with({
    x: 100
}) {
    valueOf().y = 300;
    console.log(x, y);
    delete y;
    console.log(x, y);
} */

/* var x = 100, y = 200, tries = 0;

with({x, y}) for (key in valueOf()) {
    if (tries++ === 0) {
        valueOf().z = 300;
        console.log("SHOW : ", 'z', z);
    }

    console.log("FORIN: ", key, eval(key));
}

console.log('-------------------------');
with([x, y]) for (value of valueOf()) {
    if (length === 2) {
        push(300);
        console.log("ARRAY: ", length, " elements, values: ", ...valueOf());
    }

    console.log('FOROF: ', value);
} */

/* function MyObject() {
    this = null;
}

this = null;
new MyObject(); */

/* global.this = 'hello';
console.log(this === global);
console.log(this.this); */

/* var x ={value: 100};
var value = 1000;

with({ this: x }) {
    console.log(this.value);
} */

/* var obj = obj1 = {};
var obj2 = {};

switch(obj) {
    case obj = obj2: console.log('obj2'); break;
    case obj1: console.log('obj1'); break;
}

console.log(obj === obj2); */

/* function foo(x) {
    try {
        return x;
    } finally {
        x = x*2;
    }
}

console.log(foo(100)); */

/* function foo(x) {
    try {
        return x;
    } finally {
        x.push(100);
    }
}

console.log(foo([1, 2, 3])); */

/* function f(eval) {
    "use strict"
} */

/* var thisArg = new Object;

function foo(data) {
    var test = x => eval('console.log(this === thisArg, x)');
    test(data);
}

foo.call(thisArg, 100);

var obj = { x: 1 };
var that = this;
with(obj) {
    eval('console.log(this === global, x)');
    console.log(this === that);
    console.log(global);
    console.log(this);
}

module.exports  = obj */

/* var x = 100;
eval('x = 1000');
console.log(x);

if (true) {
    let x = 'a';
    eval('x = "b"');
    console.log(x);
}

console.log(x);

var obj = { eval, x: true };
with(obj) eval('x=false');
console.log(obj.x);
console.log(x); */

/* var obj = { eval, x: 100 };
var x = 'global';

with(obj) {
    console.log(x);

    eval('console.log(x)');
    obj.eval('console.log(x)');

    eval('delete obj.x');
    console.log(x);

    eval('obj.x = 200');
    console.log(x);

    let y = 'with';
    eval("let y = 'eval'; console.log(y);");
    console.log(y);
} */

/* var f1 = () => eval('let x = new.target');

function foo() {
    var x, f2 = () => eval('x = new.target');
    f2();
    console.log(x === foo);
} */

/* function foo() {
    "use strict";
    var x = 100, obj = { eval };
    obj.eval('console.log(++x)');
}

foo();
console.log(x);
var x = 'global';
console.log(x); */
/* "use strict"
try {
    x  = 100;
} catch (error) {
    console.log('in strict:', error.message);
} finally {
    console.log('now, s is:', typeof x);
}

function foo() {
    var obj = {eval};
    obj.eval(`
        try {
            x = 100;
        } finally {
            console.log("in obj.eval, x is:", x);
        }
    `);

}

foo();
console.log('in global, x is: ', x); */

/* var exec = eval;
var f = () => eval;

exec(`console.log("indirect call")`);

f()('console.log("indirect call")');

eval.call(null, 'console.log("indirect call")');

(0, eval)('console.log("indirect call")'); */

/* eval(`
    "use strict";

    try {
        undefined = void 0;
    } catch(e) {
        console.log(e.message);
    }

    function x() {
        "use strict";

    }

    console.log("A function declaration:", typeof x);
`) */

/* var x = 100;

eval(`
    "use strict";
    var x = x * 2;
    console.log("stice mode:", x);
`);

eval(`
    var x = x * 2;
    console.log("normal mode:", x);
`) */

/* var global_f = f;
function f() {
    var x = 100;
    eval('function f() {}; var x = x * 2;');
    console.log(f === global_f);
    console.log(x);
} */

/* var obj = {};
function foo() {
    var x = 100;
    eval('let y = 200; obj.x = () => x; obj.y = () => y;');
}

foo();
console.log(obj.x());
console.log(obj.y()); */

/* console.log(eval('true'))
console.log(eval('"this is a string"'))
console.log(eval('3'))
console.log(eval('{ name: "MyName", value: 1 }')); */

/* var func = new Function('console.log("Hello, World!")');

var f1 = new Function('return ' + func.toString());

var f2 = eval(`( ${func.toString()} )`); */

/* var obj = {
    foo: function() {},
    data: 'string',
    tag: false
};

obj.foo.x = obj;

var nonEmpty = x => (Object.keys(x).length > 0) && x;
function functionFilter(k, v) {
    return (typeof v == 'function') && nonEmpty(Object.assign({}, v)) || v;
}

console.log(JSON.stringify(obj));

delete obj.foo.x;
console.log(JSON.stringify(obj, functionFilter));

obj.foo.x = 100;
console.log(JSON.stringify(obj, functionFilter));

console.log(JS); */

/* require('./cycle');

var obj = {};
obj.x = obj;

console.log(JSON.stringify(JSON.decycle(obj)));

var jsonText = JSON.stringify(JSON.decycle(obj));
console.log(JSON.parse(jsonText));

console.log(JSON.retrocycle(JSON.parse(jsonText))); */

/* var obj = { foo() {} };

var methodToString = (k, v) => {
    if (typeof v == 'function') {
        return v.toString().replace(/(function )?/, 'function ');
    }

    return v;
}

var str = JSON.stringify(obj, methodToString);
console.log(str);


var obj2 = eval('(' + str + ')');
console.log(typeof obj.foo);
console.log(typeof obj2.foo); */

/* var i = 100;

function myFunc(ctx) {
    console.log('value is: ' + i);
    eval(ctx);
    console.log('value is: ' + i);
}

myFunc('var i = 10;'); */

/* var AsyncFunction = (async x => x).constructor;
var valueInScope = 'global';

function test() {
    var valueInScope = 'function test';
    (async function() { return 'def: ' + valueInScope })().then(console.log);
    (new AsyncFunction("return 'new: ' + valueInScope"))().then(console.log);
}

test(); */

// console.log((async x => x).constructor);

/* let global = Function('return this')();
console.log(global); */

/* {
    x: 2
} */

/* function foo(message) {
    let x = 100;
    let t = `${message}: ${x}`;
    return t;
}

var x = 200;
console.log(foo('Hi')); */



