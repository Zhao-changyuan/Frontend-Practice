/* var str = 'this is a test.';
console.log(typeof str);

console.log(typeof(str));
var a;
var b = true;

console.log(typeof 'test1');
console.log(typeof a);
console.log(typeof b);
console.log(typeof /333/g); */

var str = 'abcde';
var obj = new String(str);

function newToString() {
    return 'hello, world!';
}
function func(val) {
    val.toString = newToString;
}

func(str);
console.log(str);

func(obj);
console.log(String(obj));
console.log(typeof func);
console.log(typeof null);