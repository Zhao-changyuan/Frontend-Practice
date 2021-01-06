

/* console.log(typeof null);
var num = 0;

for (const key in null) {
    num++;
    console.log(key);
}

console.log(num); */

/* var num = 0;
for (var n in Object.prototype) {
    num++;
}

console.log(num); */

/* function MyObject() {}

MyObject.prototype.value = 'abc'

var obj1 = new MyObject();
var obj2 = new MyObject();

obj2.value = 10;
console.log(obj1.value);
console.log(obj2.value); */

/* var obj1 = new Object;
var obj2 = new Object;

Object.prototype.value = 'abc';
console.log(obj1.value);
console.log(obj2.value);

console.log(Object.getOwnPropertyNames(obj2));

obj2.value = '10';
console.log(obj1.value);
console.log(obj2.value);
console.log(Object.getOwnPropertyNames(obj2)); */

/* function asConstructor(f) {
    return Object.assign(f, {
        prototype: {'constructor': f}
    });
}


function MyObject() {}
console.log(MyObject.prototype.constructor === MyObject);
delete MyObject.prototype.constructor;
console.log(MyObject.prototype.constructor === Object); */

var empty = {};

var proto = Object.getPrototypeOf(empty);
var props = Object.getOwnPropertyNames(empty);

console.log(proto === Object.prototype);
console.log(props.length);

var propsInChain = Object.getOwnPropertyDescriptors(Object.prototype);
console.log(Object.keys(propsInChain).length);

var enumberableMembers = Object.values(propsInChain).filter(descriptor => descriptor.enumberable);
console.log(enumberableMembers.length);