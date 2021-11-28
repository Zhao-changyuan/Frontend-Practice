
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

/* let strings = ["Hello", "93321", "101"]

let validators: { [s: string]: Validation.StringValidator } = {}
validators["ZIP code"] = new Validation.ZipCodeValidator()
validators["Letters only"] = new Validation.LettersOnlyValidator()

for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s)
    console.log(`'${s}' ${isMatch ? "matchs" : "does not match"} '${name}'`)
  }
} */

namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import ploygons = Shapes.Polygons;
let sq = new ploygons.Square()