

/* function getValue() {
    return 1;
}

var aObject = {
    name: 'Object Loteral',
    value: 123,
    getName: function() {
        return this.name
    },
    getValue,
    get name2() {
        return 'name: ' + this.name;
    }
} */

/* var arr = [, [,,[,,,'abc']]];
console.log(arr[1][2][3]);

var {1: {2: {3: x}}} = arr;
console.log(x); */

/* class MyObject extends function x() {xyz = 123;} {

}
new MyObject; */

function MyObject() {
    console.log('Constructing...');
}

MyObject.prototype.aName = 'value';
MyObject.prototype.aMethod = function() {
    console.log('aMethod');
};

var a = new MyObject();
var b = new MyObject();
console.log(a.aName);
console.log(b.aName);
a.aName = 'changyuan'
console.log(a.aName);
console.log(b.aName);
