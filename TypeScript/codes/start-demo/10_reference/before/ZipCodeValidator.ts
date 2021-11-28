

/* export default class ZipCodeValidator {
  static numberRegexp = /^[0-9]+$/
  isAcceptable(s: string) {
    return s.length === 5 && ZipCodeValidator.numberRegexp.test(s)
  }
} */

let numberRegexp = /^[0-9]+$/

class ZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}

export ZipCodeValidator;