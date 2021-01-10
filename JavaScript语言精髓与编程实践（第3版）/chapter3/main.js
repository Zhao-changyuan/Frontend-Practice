
/* var obj = {
    [Symbol.toStringTag]: 'YourObjectClassname'
}

console.log(obj.toString()); */

/* var obj = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') return NaN;
        return 'invalid';
    }
}

console.log('' + obj);
console.log(+obj); */

/* class MyObject {
    static [Symbol.hasInstance](obj) {
        return super[Symbol.hasInstance](obj) ||
            (obj && obj.className === 'MyObject');
    }
}

var obj = {
    className: 'MyObject'
};
var obj1 = new MyObject;
console.log(obj instanceof MyObject);
console.log(obj1 instanceof MyObject);

var fakedBase = new Object;
fakedBase[Symbol.hasInstance] = (obj) => 'className' in obj;
console.log(obj instanceof fakedBase);

var atom = Object.create(null);
console.log(atom instanceof Object);
atom.className = '[META]';
console.log(new Object instanceof fakedBase);
console.log(atom instanceof fakedBase);
console.log({className: ''} instanceof fakedBase); */

/* var f = new Function;
var constructor = null;

with(f.prototype) {
    console.log(f === constructor);
}

f.prototype[Symbol.unscopables] = {
    constructor: true
};

with(f.prototype) {
    console.log(f === constructor);
} */

/* var obj = [1, 2, 3];

obj[Symbol.isConcatSpreadable] = false;
var arr = [0].concat(obj);
console.log(arr.length);
console.log(arr[1]);

var arr = [0].concat([1, 2, 3]);
console.log(arr.length);
console.log(arr[1]);

console.log([0].concat(new Array(400)).concat(401));
console.log([0].concat({ length: 400, [Symbol.isConcatSpreadable]: true }).concat(401)); */

/* var separator = {};

separator[Symbol.split] = function(str, limit) {
    return str.split(' ', limit);
};

var str = 'hello world';
console.log(str.split(separator)); */

/* let arr = [1, 2, 3, 4, 5];
var newArray = arr.slice(0, 2);

console.log(arr.constructor[Symbol.species]); */

/* var f = () => {};
var MyObject = new Proxy(f, {
    construct: function() {
        console.log('try custom constructor...');
        return new Object;
    }
})

new MyObject(); */

/* var obj = new Object;

var target = new Proxy(obj, {
    getOwnPropertyDescriptor: function(target, key) {
        console.log('[[GetOwnProperty]] on target >>', ...arguments);
        return Reflect.getOwnPropertyDescriptor(...arguments);
    }
});

var proxy = new Proxy(target, {
    getOwnPropertyDescriptor(target, key) {
        console.log('[[GetOwnProperty]] on proxy >>', ...arguments);
        return Reflect.getOwnPropertyDescriptor(...arguments);
    },
    defineProperty(target, key, desc, receiver) {
        console.log('[[DefineOwnProperty]] on proxy >>', ...arguments);
        return Reflect.defineProperty(...arguments);
    }
});

proxy.n1 = 100
console.log(proxy.n1);
 */

/* function MyObject() {}

var obj = new Object;
var obj2 = new MyObject;

console.log(Object.isExtensible(Object.prototype));

Object.prototype.x = 100;
console.log(obj.x);
console.log(obj2.x); */

/* function intrudeOnPrototype(Class, handler) {
    var orginal = Object.getPrototypeOf(Class.prototype);
    var target = Object.create(orginal);
    var { proxy, revoke } = Proxy.revocable(target, handler);
    Object.setPrototypeOf(Class.prototype, proxy);

    return () => revoke(Object.setPrototypeOf(Class.prototype, orginal));
}

var str = new String('OldString');
var recovery = intrudeOnPrototype(String, {
    get: function(target, prop) {
        if (prop === 't') return 100;
        return Reflect.get(...arguments);
    }
});
var str2 = new String('NewString');

console.log(Object.getPrototypeOf(str) === Object.getPrototypeOf(str2));
console.log(str.t);
console.log(str2.t);

console.log((new Object).t);
recovery();
console.log(str.t);
console.log(str2.t); */

class Meta extends null {
    constructor() {
        return Object.setPrototypeOf(class extends null {
            constructor() {
                return Object.create(new.target.prototype);
            }

            static [Symbol.hasInstance](obj) {
                return Object.prototype.isPrototypeOf.call(this.prototype, obj);
            }
        }, new.target);
    }

    static [Symbol.hasInstance](obj) {
        return Object.prototype.isPrototypeOf.call(this, obj);
    }
}

Object.setPrototypeOf(Meta, null);
class MetaClass extends Meta {}
class MetaObject extends new MetaClass {}

console.log(MetaObject instanceof MetaClass);
console.log(MetaClass instanceof Meta);

var obj = new MetaObject();
console.log(obj instanceof MetaObject);

console.log(obj instanceof Object);
console.log(typeof obj);