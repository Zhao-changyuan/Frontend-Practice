"use strict";
exports.__esModule = true;
var fs = require("fs");
function loadJSONSync(filename) {
    return JSON.parse(fs.readFileSync(filename));
}
console.log(loadJSONSync('good.json'));
