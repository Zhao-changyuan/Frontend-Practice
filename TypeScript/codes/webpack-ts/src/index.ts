import {hi} from './m1'


function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(123, 456))

console.log('hahah')

console.log(hi)

const obj: {
  name: string,
  age?: number
} = { name: '素悟空' };

console.log(obj)

obj.age = 18;
console.log(obj)

console.log(Promise)


let fn = (a: number, b: number) => a + b;

fn(123, 454)