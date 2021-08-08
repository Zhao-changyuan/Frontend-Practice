
void function () {
  
  function fn<T>(a: T): T {
    return a;
  }

  let result = fn<string>('hello')
  console.log(result)

  function fn2<T, K>(a: T, b: K): T {
    console.log(b)
    return a;
  }

  fn2(13, 'hello')


  interface Inter {
    length: number;
  }

  function fn3<T extends Inter>(a: T): number {
    return a.length
  }
  
  fn3({
    length: 33,
  })

  class MyClass<T> {
    name: T;
    constructor(name: T) {
      this.name = name;
    }
  }

  const mc = new MyClass<string>('武库')
}()