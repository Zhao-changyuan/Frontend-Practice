
/**
 * 10.6 变量声明
*/

/* function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  }
}

var g = f()
console.log(g()) */

/* function f() {
  var a = 1;
  a = 2;
  var b = g();

  a = 3;
  return b;

  function g() {
    return a;
  }
}

console.log(f()) */

/* function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }

  return x;
}

console.log(f(true))
console.log(f(false)) */

/* for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100 * i)
} */

/* for (var i = 0;i <10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, 100 * i)
  })(i)
  
} */

/* function f(input: boolean) {
  let a = 100;
  if (input) {
    let b = a + 1;
    return b;
  }

  return b;
} */

/* try {
  throw "oh no!"
} catch (error) {
  console.log("Oh well.")
}

console.log(e) */

/* a++;
let a; */

/* function f(x) {
  let x = 100;
} */

/* function g() {
  let x = 100;
  var x = 100;
} */

/* for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100 * i)
} */

/* let input = [1, 2]
let [first, second] = input;
console.log(first)
console.log(second);

([first, second] = [second, first]);
console.log(first, second) */

/* function f([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}

f([1, 2]) */

/* let tuple: [number, string, boolean] = [7, 'hello', true]
let [a, b, c] = tuple;
let [d, ...de] = tuple; */

/* let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}

let { a, b } = o;
console.log(a, b) */

/* let { a, b } = { a: 'baz', b: 101 };
console.log(a, b) */

/* function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
  console.log(a, b)
}

keepWholeObject({a: '1343d3'}) */

let first = [1, 2]
let second = [3, 4]
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus)