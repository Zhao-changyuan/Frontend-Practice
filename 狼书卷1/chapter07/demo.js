
/* const fs = require('fs');

function readJSON(filePath, callback) {
    fs.readFile(filePath, function(err, data) {
        if (err) {
            return callback(err);
        }

        let parsedJson;
        try {
            parsedJson = JSON.parse(data);
        } catch (error) {
            return callback(error);
        }

        return callback(null, parsedJson);
    });
}

readJSON('./package-lock.json', function(error, json) {
    console.log(json);
}); */

/* const EventEmitter = require('events');
const observer = new EventEmitter();

observer.on('topic', () => {
    console.log('topic has occured');
});


function main() {
    console.log('start');
    observer.emit('topic')
    console.log('end');
}

main(); */

/* var EventEmitter = require('events');
var util = require('util');

var MyEmitter = function() {

};

util.inherits(MyEmitter, EventEmitter);
const myEmitter = new MyEmitter();
myEmitter.setMaxListeners(5);

myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});

myEmitter.emit('event', 'a', 'b'); */

/* const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.once('message', function(msg) {
    console.log('message: ' + msg);
});

myEmitter.emit('message', 'this is the first message');
myEmitter.emit('message', 'this is the second message');
myEmitter.emit('message', 'this is the third message'); */

/* const EventEmitter = require('events');
const emitter = new EventEmitter();

function onlyOnce() {
    console.log(emitter.listeners('firstConnection'));
    emitter.off('firstConnection', onlyOnce);
    console.log(emitter.listeners('firstConnection'));
}
emitter.on('firstConnection', onlyOnce);
emitter.emit('firstConnection');
emitter.emit('firstConnection'); */

/* const http = require('http');
http.get('http://nodejs.org/dist/index.json', (res) => {
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error(`Invalid content-type.\n Expected application/json but received ${contentType}`);
    }

    if (error) {
        console.log(error.message);
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        try {
            let parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (error) {
            console.log(error.message);
        }
    });
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
}); */

/* var fs = require('fs');

fs.readFile('../.vscode/launch.json', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
}) */

/* var fs = require('fs');

function hello(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
}

hello('../.vscode/launch.json').then(function(data) {
    console.log('promise result = ' + data);
}).catch(function(err) {
    console.log(err);
}); */

