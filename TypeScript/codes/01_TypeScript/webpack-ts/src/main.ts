

// 接口
void function () {

  class Person {
    constructor(readonly name: string = '大甜甜') {}
  }

  const person = new Person();
  console.log(person)
  console.log(new Person('牛魔王'))
}()