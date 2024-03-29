"use strict";
void function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            return this._name;
        }
        set name(val) {
            this._name = val;
        }
        get age() {
            return this._age;
        }
        set age(val) {
            if (val >= 0) {
                this._age = val;
            }
        }
    }
    const per = new Person('悟空', 18);
    console.log(per);
    per.age = -33;
    console.log(per.age);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 33);
    console.log(c);
}();
