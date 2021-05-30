"use strict";
var App;
(function (App) {
    function isString(value) {
        return typeof value === 'string';
    }
    App.isString = isString;
})(App || (App = {}));
