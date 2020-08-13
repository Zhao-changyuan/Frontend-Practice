
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

var c = 1;
function foo() {
    console.log(c);
    class c{}
}

foo();