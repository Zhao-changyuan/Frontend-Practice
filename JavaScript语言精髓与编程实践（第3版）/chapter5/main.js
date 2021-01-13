
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

function print(msg) {
    console.log(msg);
    console.log(arguments);
}

var i = 100;
print(i+=20, i*=2, 'value: ' + i);
print(i);