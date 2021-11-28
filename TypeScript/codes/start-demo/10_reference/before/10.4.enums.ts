
/**
 * 10.4 枚举
 */

/* enum Direction {
  Up,
  Down,
  Left,
  Right,
} */

/* enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {

}

respond("Primcess Caroline", UserResponse.Yes) */

/* enum Direction {
  Up = "UP",
  Down = "DOMN",
  Left = "LEFT",
  Right = "RIGHT",
} */

/* enum E {
  X
}

enum E1 {
  X,
  Y,
  Z,
}

enum E2 {
  A = 1,
  B,
  C,
} */

/* enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = "1.23".length
}
 */

/* enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle,
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square,
  radius: 100
} */

/* enum E {
  Foo,
  Bar,
}

function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {

  }
} */

/* enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  return obj.X
}

f(E) */

/* enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type LogLevelStrings = keyof  typeof LogLevel

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key]
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key)
    console.log("Log level value is:", num)
    console.log("Log level message is:", message)
  }
}

printImportant("ERROR", "This is a message") */

/* enum Enum {
  A,
}

let a = Enum.A;
let nameOfA = Enum[a] */

/* const enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
] */

/* declare enum Enum {
  A = 1,
  B,
  C = 2,
} */

/* const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

EDirection.Up;

function walk(dir: EDirection) {

}

type Direction = typeof ODirection[keyof typeof ODirection];

function run(dir: Direction) {

}

walk(EDirection.Left)
run(ODirection.Right) */

