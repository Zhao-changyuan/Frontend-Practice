(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mod"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.t = void 0;
    var m = require("mod");
    exports.t = m.something = 1;
});
