
// 
void function () {
  /**
   * 抽象类
   */
  abstract class Animal {
    abstract name: string
    // 抽象方法
    abstract eat(): void;
    // 实例方法

    sayHi() {
      console.log('您好呀')
    }
  }

  // 定义一个子类Dog
  class Dog extends Animal {
    name:string = '小黄'
    // 重新的实现抽象类中的方法，
    eat(): void {
      console.log('舔着吃，真好吃')
    }

  }

  const dog: Animal = new Dog()
  dog.eat()
  dog.sayHi()
  console.log(dog.name)

  // const animal: Animal = new 
  
}()