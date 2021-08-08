"use strict";
void function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物再叫');
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪~~');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵~');
        }
    }
    const dog = new Dog('旺财', 3);
    console.log(dog);
    dog.sayHello();
    const cat = new Cat('咪咪', 2);
    console.log(cat);
    cat.sayHello();
}();
