"use strict";
void function () {
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log(this.name + '大家好');
        }
    }
    new MyClass('悟空').sayHello();
}();
