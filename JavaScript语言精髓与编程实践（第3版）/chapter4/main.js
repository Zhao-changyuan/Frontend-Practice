

/* function foo() {
    foo = 100;
    console.log(foo);
}
foo();
console.log(foo); */

/* (function foo() {
    foo = 100;
    console.log(foo);
})(); */

/* var x = 'outer', y = 'outer';

function foo() {
    console.log([x,y]);
    if (true) {
        function x() {

        }
    } else {
        function y() {

        }
    }
    console.log([x, y]);
}
foo(); */

/* var x = 'outer', y = 'outer';

function foo() {
    console.log([x, y]);
    if (true) {
        console.log(x);
        console.log(typeof x);
        
        function x() {}
    }
}
foo(); */

/* console.log(foo);

function foo() {

} */

/* switch(x) {
    case 100:
    let y = x;
    case 200:
    let y = x*2;
} */

/* var y = 100, x = 100;
switch(x) {
    case 100:
        console.log(y);
    case 200:
        let y = x*2;
} */

/* for (var x = 102; x < 105; x++) {

} */

/* try {
    throw { message: 'A Error', code: 1234 };
} catch ({ message, code }) {
    console.log(`${code}: ${message}`);
} */

/* let x = 100;
y = 200;

console.log(x, y);
console.log(global.x);
console.log(global.y);
console.log(global);
console.log((new Function('return this'))()); */

/* let obj = {
    [Symbol()]: function() {
        console.log('unnamed symbol method');
    }
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));
let f = obj[Object.getOwnPropertySymbols(obj)[0]];
f.call(obj); */

/* function foo() {
    
}

console.log(global); */

/* console.log('hoisting x:', x);
var x = 100;
console.log('value x:', x);

eval('var y = 100');
console.log('dynamic define y:', y);

z = 100;
console.log('global z:', global.z); */

/* function f() {
    var x = 100;
    eval('var y = 1000');
    console.log('values if x,y:', x, y);
}
f() */


/* var x = 100;

y = 200;

eval('var z = 300');
console.log(global.hasOwnProperty('y'));
console.log(global.hasOwnProperty('x'));

console.log(delete y, typeof y);
console.log(delete x, x);

console.log(global);

console.log('------------------');
var desc = Object.getOwnPropertyDescriptor(global, 'z');
console.log(desc); */

/* "use strict";

(0, eval)('var a = 1000');


function f2() {
    "use strict";
    (0, eval)('var b = 2000');
}

f2();
console.log(a, b); */

