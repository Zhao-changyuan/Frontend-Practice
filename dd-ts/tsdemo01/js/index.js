"use strict";
/* function identity<T>(arg: T): T {
  return arg
}

const foo = identity('foo')
const bar = identity(true)

function assign<T, U>(target: T, source: U): T & U {
  return target;
} */
const a = { value: 0 };
const b = { value: 'b' };
const tree = {
    value: 0,
    left: {
        value: 1,
        left: {
            value: 3,
            left: null,
            right: null,
        },
        right: {
            value: 4,
            left: null,
            right: null,
        }
    },
    right: {
        value: 2,
        left: null,
        right: null
    }
};
