"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logProperty(params) {
    return function (target, attr) {
        console.log(1);
        console.log(target);
        console.log(attr);
        target.url = '这是url啊';
    };
}
class HttpClient {
    constructor() {
        console.log(2);
        // this.url = '123'
    }
    getData() {
        console.log(3);
        console.log(this);
        console.log(this.hasOwnProperty('url'));
        console.log(this.__proto__);
    }
}
__decorate([
    logProperty('123')
], HttpClient.prototype, "url", void 0);
var http = new HttpClient();
http.getData();
