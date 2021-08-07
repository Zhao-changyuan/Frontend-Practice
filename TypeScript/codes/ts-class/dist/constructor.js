"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(`${this.name} ,age: ${this.age} 汪汪汪~~~`);
    }
}
const dog = new Dog('小黑', 21);
const dog1 = new Dog('小白', 3);
console.log(dog);
console.log(dog1);
dog.bark();
dog1.bark();
