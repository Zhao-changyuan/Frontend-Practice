
/**
  7.4 索引访问类型
*/

/* type Person = { age: number, name: string, alive: boolean }
type Age = Person["age"]

type I1 = Person["age" | "name"]

type I2 = Person[keyof Person]

type AliveOrName = "alive" | "name"
type I3 = Person[AliveOrName]

type I4 = Person["alve"] */

/* const MyArray = [
  { name: 'Alice', age: 15 },
  { name: "Bob", age: 33 },
  { name: "Eve", age: 38 },
  { name: 'Jack', age: "33" }
]

type Person = typeof MyArray[number]

type Age = typeof MyArray[number]["age"]

type Age2 = Person["age"] */

/* const key = "age"

type t1 = keyof Person

type Age2 = Person[t1] */

/* const type1 = typeof 2132
console.log(type1) */