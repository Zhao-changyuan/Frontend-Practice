
// 泛型
void function () {

  /* function createArray2<T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }

    return arr;
  }

  const arr3 = createArray2('33', 4)
  console.log(arr3[0].split(''))
  console.log(createArray2(1, 4)) */

  /* function swap<K, V> (a: K, b: V): [V, K] {
    return [b, a]
  }

  console.log(swap('abc', 123)) */

  /* interface IBaseCRUD<T> {
    data: T[]
    add: (t: T) => void
    getById: (id: number) => T | undefined
  }

  class User {
    id?: number;
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  class UserCRUD implements IBaseCRUD<User> {
    data: User[] = [];

    add(user: User): void {
      user = {...user, id:Date.now()}
      this.data.push(user)
      console.log('保存user', user.id)
    }
    getById(id: number) {
      return this.data.find(item => item.id === id)
    }
  }

  const userCRUD = new UserCRUD()
  userCRUD.add(new User('tom', 12))
  userCRUD.add(new User('tom2', 13))
  console.log(userCRUD.data) */

  // class GenericNumber<T> {
  //   zeroValue: T
  //   add: (x: T, y: T) => T
  // }

  // let myGenericNumber = new GenericNumber<number>()
  // myGenericNumber.zeroValue = 0
  // myGenericNumber.add = function (x, y) {
  //   return x + y
  // }

  // let myGenericString = new GenericNumber<string>()
  // myGenericString.zeroValue = 'abc'
  // myGenericString.add = function (x, y) {
  //   return x + y
  // }

  // console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
  // console.log(myGenericNumber.add(myGenericNumber.zeroValue, 123))

  /* interface Lengthwise {
    length: number;
  }

  function fn2<T extends Lengthwise>(x: T): void {
    console.log(x.length)
  }

  console.log(fn2('3434')) */
  jQuery('333')
}()