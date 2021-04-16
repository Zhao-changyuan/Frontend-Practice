// console.log('test');

/* var x = new Object;
var p3 = Promise.resolve(x);

p5 = p3.finally(value => {
    console.log(typeof value);
    return 100;
});

p5.then(value => {
    console.log('value saved:', value === x);
})

p5 = p3.finally(() => {
    return Promise.reject('finally rewrite');
});

p5.catch(reason => {
    console.log(`value overrided: rejected, and reason is <${reason}>`);
}) */

/* var time1 = 1000, time2 = 5000;

p = new Promise((resolve, reject) => {
    setTimeout(reject, time1);
});

setTimeout(function() {
    p2 = p.then(x => x);
}, time2); */

/* Promise.all([1, 2, 3])
    .then(([v1, v2, v3]) => {

    }); */

/* async function foo() {
    var v = await x;
}

// 类似于
function foo() {
    var v;
    Promise.suspend_until_resolve(x).then(x => v = x);
    ....
} */

/* var x = Promise.reject('error of promise');
async function foo() {
    try {
        var v = await x;
    } catch (e) {
        console.log(typeof e, e);
    }

    return 'Done.'
}

foo().then(console.log); */

// function* myGenerator() {
//     yield 10;
//     yield 20;
// }

// tor = myGenerator();

// async function* myAsyncGenerator() {
//     yield 10;
//     yield 20;
// }
// tor2 = myAsyncGenerator();

// console.log(tor.next().value);

// p = tor2.next();
// p.then(result => {
//     console.log(result.value);
// })

// var all = []
// var output = () => console.log(all);

// var tor2 = myAsyncGenerator();
// function picker(result) {
//     if (result.done) return output();
//     all.push(result.value);
//     return tor2.next().then(picker);
// }

// tor2.next().then(picker);

// var output = all => console.log(all);
// var tor2 = myAsyncGenerator();
// async function picker2(tor) {
//     var all = [], extract = ({ value, done }) => !done && all.push(value);
//     while(extract(await tor.next()));
//     return all;
// }

// picker2(tor2).then(output);

/* function sleep(tag, n, value) {
    console.log(tag);
    return new Promise(resolve => setTimeout(() => resolve(value), n));
}

async function* myAsyncGenerator() {
    yield sleep('yield 1st', 10000, 'value 2 delay 10s');
    yield sleep('yield 2nd', 1000, 'value 2 now');
} */


/* function* myGenerator() {
    yield 10;
    yield 20;
}

tor = myGenerator();

async function* myAsyncGenerator() {
    yield 10;
    yield 20;
}
tor2 = myAsyncGenerator();

console.log(Symbol.iterator in tor);

for (const x of tor) console.log(x);

console.log(Symbol.iterator in tor2);
console.log(Symbol.asyncIterator in tor2);

void async function() { 
    for await (const x of tor2) 
        console.log(x);
 }(); */

/* void async function () {
    var promises = [Promise.resolve(10), Promise.resolve(20)];
    for await (let x of promises) {
        console.log(x);
    }

    var values = [10, 20];
    for await (let x of values) {
        console.log(x);
    }
}(); */

/* var p = Promise.resolve(10);

p.then(function(value) {
    console.log(value * 10);
})

async function foo() {
    console.log(await p * 10);
}

var resolveObj = Promise.resolve(new Object);
async function foo2() {
    console.log((await resolveObj).toString());
} */

/* p = Promise.resolve(x);
p = new Promise(function(resolve, reject) {
    x.then(resolve, reject);
});

p = (async function() {
    return await x;
})();

let resolved = async x => await x;
p = resolved(x); */

/* function sleep(tag, n, value) {
    console.log(tag);
    return new Promise(resolve => setTimeout(() => resolve(value), n));
}

data = new Object;
x = sleep('10s', 10*1000, data);
p = Promise.resolve(x);

(async function() {
    console.log(await p === data);
})(); */

/* let Thenabled = Promise.prototype.then;

x = Promise.resolve(100);
p = new Promise(Thenabled.bind(x));

class MyPromise extends Promise {};
x2 = MyPromise.resolve(100);
p2 = new Promise(Thenabled.bind(v2)); */

/* var x = {
    result: 100,
    then: function(resolve) {
        resolve(this.result);
    }
}

p2 = Promise.resolve(x);
p2.then(console.log); */

/* var thenableObj2 = {
    then: function(resolve) {
        resolve('result in thenableObj2');
    }
}

var x = {
    then: function(resolve) {
        resolve(thenableObj2);
    }
}

Promise.resolve(x).then(value => {
    console.log(value);
}) */

/* void function() {
    Promise.resolve('hello world')
        .then(console.log);

p = Promise.resolve(10);
p.then(x => 10*x).then(console.log);
}(); */

/* AsyncFunction = (async x=>x).constructor;

foo = new AsyncFunction('x,y,p', 'return x + y + await p');
foo(1, 2, Promise.resolve(3))
    .then(console.log); */

/* const { Worker } = require('worker_threads');
const queue = new Array;

process.on('release', coordination);

process.on('require', worker => {
    console.log(`[${worker.threadId}] require`);
    queue.push(worker);
});

for (var i = 1000; i < 1005; i++) {
    let workerData = {seq: i};
    let threadModule = __filename.replace(/\.js$/, '_thread$&');
    let worker = new Worker(threadModule, { workerData });
    worker.on('message', message => process.emit(message, worker));
}

coordination(); */

