
void function () {
  // 描述一个对象的类型
  type myType = {
    name: string,
    age: number
  }

  /**
   *  接口用来定义一个类结构
   *  用来顶一个一个类中应该包含哪些属性和方法
   */

  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    gender: string;
  }

  // const obj: myInterface = {
  //   name: 'sss',
  //   age: 111,
  //   gender: '男'
  // }

  // console.log('1111')

  interface myInter {
    name: string;

    sayHello(): void;
  }

  class MyClass implements myInter {
    name: string

    constructor(name: string) {
      this.name = name;
    }

    sayHello(): void {
      console.log(this.name + '大家好')
    }

  }

  new MyClass('悟空').sayHello()
}()