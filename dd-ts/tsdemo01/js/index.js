"use strict";
/* function f(x: number[] | undefined | null) {
  if (typeof x === 'object') {
    x;
  } else {
    x;
  }
} */
/* interface FooFunction {
  (): void;
}

function f(x: FooFunction | undefined) {
  if (typeof x === 'function') {
    x
  } else {
    x
  }
} */
/* class A {}
class B {}

function f(x: A | B) {
  if (x instanceof A) {
    x
  }
} */
/* interface A {
  x: number;
}

interface B {
  y: string;
}

function f(x: A | B) {
  if ('x' in x) {
    x
  }
} */
/* interface Options {
  location?: {
    x?: number,
    y?: number
  }
}

function f(options?: Options) {
  if (options && options.location && options.location.x) {
    const x = options.location.x;
  }

  if (options && options.location && options.location.x) {
    options = {location: {x: 1, y: 1}}

    const x = options.location.x;
  }
} */
/* function f0(x: boolean | undefined | null) {
  if (x == undefined) {
    x
  }

  if (x === undefined) {
    x
  }

  if (x == null) {
    x
  }
} */
/* function func(x: string | number, y: string | boolean) {
  if (x === y) {
    x;
    y;
  }
} */
/* type A = { a: string }
type B = { b: string }

function isTypeA(x: A | B): x is A {
  return (x as A).a !== undefined;
} */
/* interface A {
  kind: true,
  type: 'A'
}

interface B {
  kind: false,
  type: 'B'
}

type T = A | B;

function f(t: T) {
  if (t.kind === true) {
    t
  }

  if (t.type === 'A') {
    t
  }
} */
/* let x;

x = true;
x; */
/* let x: boolean | 'x'
x = 'x'

x;

x = true;
x; */
function assertIsBoolean(x) {
    if (typeof x !== 'boolean') {
        throw new TypeError('Boolean type expected.');
    }
}
function assertTruthy(x) {
    if (!x) {
        throw new TypeError(`${x} should be a truthy value.`);
    }
}
assertTruthy(null);
