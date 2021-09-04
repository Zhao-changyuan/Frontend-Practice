
/**
 * 函数 demo
 */
void function () {
  // function add(x, y) {
  //   return x + y
  // }

  // const add2 = function (x, y) {
  //   return x + y
  // }

  function add(x: string, y: string):string {
    return x + y;
  }

  const add2 = function (x: number, y: number): number {
    return x + y;
  }

  console.log(add('111', '222'))
  console.log(add2(1, 2))

  const add3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
  }

  console.log(add3(10, 100))
}();