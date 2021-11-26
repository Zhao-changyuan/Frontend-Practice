"use strict";
/*
import { ZipCodeValidator } from './ZipCodeValidator'

let myValidator = new ZipCodeValidator()

import { ZipCodeValidator as ZCV } from './ZipCodeValidator'

let myValidator1 = new ZCV() */
exports.__esModule = true;
/* import * as validator from "./ZipCodeValidator"

let myValidator = new validator.ZipCodeValidator() */
/* import validator from './ZipCodeValidator'

let myValidator = new validator() */
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var strings = ["Hello", "98052", "101"];
strings.forEach(function (s) {
    console.log("\"".concat(s, "\" ").concat((0, StaticZipCodeValidator_1["default"])(s) ? "matches" : "does not match"));
});
