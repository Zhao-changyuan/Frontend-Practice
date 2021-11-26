

import { StringValidator } from './Validation'

const lettersRegexp = /^[A-Za-z]+$/

export class LettersOnlyValidator implements StringValidator {
  isAcceptalbe(s: string): boolean {
      return lettersRegexp.test(s)
  }
}