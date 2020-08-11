
/*





var a = 1, b = 1, c = 1;
a
++
b
++
c
console.log(a, b, c);

function f() {
    return 1;
}


console.log(f());
*/

outter: for(var j = 0; j < 10; j++) {
    for (var i = 0; i < j; i++) {
        continue /* no LineTerminator here */ outter
    }
}

outter: for(var j = 0; j < 10; j++) {
    for (var i = 0; i < j; i++) {
        break /* no LineTerminator here */ outter
    }
}

function f() {
    return /* no LineTerminator here */1;
}

i/* no LineTerminator here */++
i/* no LineTerminator here */--

throw /* no LineTerminator here */ new Exception('error')

async /* no LineTerminator here */ function f() {

}

const f = async/* no LineTerminator here */ x => x* x

const f = x/*no LineTerminator here*/=> x*x


function *g() {
    var i = 0;
    while(true) {
        yield/* no LineTerminator here */i++;
    }
}