

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

let obj = {
    [Symbol()]: function() {
        console.log('unnamed symbol method');
    }
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));
let f = obj[Object.getOwnPropertySymbols(obj)[0]];
f.call(obj);