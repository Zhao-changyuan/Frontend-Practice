"use strict";
class Person {
    constructor() {
        this.name = '孙悟空';
    }
    static sayHello() {
        console.log('大家好');
    }
}
const per = new Person();
console.log(per);
// per.sayHello()
Person.sayHello();
