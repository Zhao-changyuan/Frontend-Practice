
import { StringValidator } from './Validation'

const numberRegexp = /^[0-9]+$/

export class ZipCodeValidator implements StringValidator {
  isAcceptalbe(s: string): boolean {
    return s.length === 5 && numberRegexp.test(s)
  }
}