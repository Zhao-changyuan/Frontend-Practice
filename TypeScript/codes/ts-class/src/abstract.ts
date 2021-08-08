void function () {
  
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    abstract sayHello(): void;
  }

  class Dog extends Animal {
    sayHello(): void {
      console.log('汪汪汪。。。')
    }
    
  }

  const dog = new Dog('旺财');
  console.log(dog)
  dog.sayHello()

  console.log('1111')

}();