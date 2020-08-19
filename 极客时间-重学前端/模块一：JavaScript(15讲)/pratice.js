
/* var a = 1;
function foo() {
    console.log(a);
    var a = 2;
}

foo(); */

/* var a = 1;

function foo() {
    console.log(a);
    if (false) {
        var a = 2;
    }
}

foo(); */

/* var a = 1;

function foo() {
    var o = {a: 3};
    with(o) {
        var a = 2;
    }

    console.log(o.a);
    console.log(a);
}

foo(); */

/* var a = 1;

var b = a;

console.log(b);
a = 4;
console.log(b); */

/* var a = [];
var i;
var q;
for (i = 0; i < 5; i++) {
    q = i;
    a[i] = function() {
        console.log(q);
    }
}

a[0]()
a[1]()
a[2]()
a[3]() */

/* console.log(foo);
function foo() {} */

/* console.log(foo);
if (true) {
    function foo() {

    }
} */

/* console.log(c);
class c {

} */

/* var c = 1;
function foo() {
    console.log(c);
    class c{}
}

foo(); */

/* let o = {
    [Symbol.iterator]: () => ({
        _value: 0,
        next() {
            if (this._value === 10) {
                return {
                    done: true
                };
            } else {
                return {
                    value: this._value++,
                    done: false
                };
            }
        }
    })
};

for(let e of o) {
    console.log(e);
} */

/* function* foo() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

for (let e of foo()) {
    console.log(e);
} */

/* function sleep(duration) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, duration);
    });
}

async function* foo() {
    i = 0;
    while(true) {
        await sleep(1000);
        yield i++;
    }
}

for await (let e of foo()) {
    console.log(e);
} */

/* const a = 2;
if (true) {
    console.log(a);
    const a = 1;
} */

/* const a = 2;
if (true) {
    console.log(a);
    class a {

    }
} */

/* class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea();
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }
} */

/* function foo() {

}

function* foo1() {
    yield 1;
    yield 2;
    yield 3;
}

async function foo2() {
    await sleep(3000);
    yield 1;
} */

/* function foo(a = 1, ...other) {
    console.log(a, other);
}

foo( 34, 1, 2, 3, 4) */
/* 'abc';
123;
null;
true;
false;
({});
(function(){});
(class{ });
[];
/abc/g;
this;
myVar; */

/* class Cls {
    constructor(n) {
        console.log('cls', n);
        return class {
            constructor(n) {
                console.log('returned', n);
            }
        }
    }
}

new (new Cls(1)); */

/* a.b(c);
super(); */

// a = b, b = 1, null;

// console.log(4 ** 3 ** 2);
// console.log(Number('true'));

/* console.log(false == '0');
console.log(true == 'true');
console.log([] == 0);
console.log([] == false);
console.log(new Boolean('false') == false); */

console.log(false || 1);
console.log(true && undefined);
