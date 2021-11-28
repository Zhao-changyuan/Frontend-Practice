
/**
 * 声明合并
 */

/* interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 }


interface Animal {

}

interface Sheep extends Animal {}
interface Dog extends Animal {}
interface Cat extends Animal {}

interface Cloner {
  clone(animal: Animal): Animal;
}
interface Cloner {
  clone(animal: Sheep): Sheep;
}
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
} */

/* namespace Animals {
  export class Zebra {}
}

namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
} */

/* namespace Animal {
  let haveMuscles = true;

  export function animalsHaveMuscles() {
    return haveMuscles;
  }
}

namespace Animal {
  export function doAnimalHaveMuscles() {
    return haveMuscles;
  }
} */

/* class Album {
  label: Album.AlbumLabel;
}

namespace Album {
  export class AlbumLabel {}
} */

/* function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
  export let suffix = ""
  export let prefix = "Hello, "
}

console.log(buildLabel("Sam Smith")) */

enum Color {
  red = 1,
  green = 2,
  blue = 4,
}

namespace Color {
  export function mixColor(colorName: string) {
    if (colorName === "yellow") {
      return Color.red + Color.green;
    } else if (colorName === "white") {
      return Color.red + Color.green + Color.blue;
    } else if (colorName === "magenta") {
      return Color.red + Color.blue;
    } else if (colorName === "cyan") {
      return Color.green + Color.blue
    }
  }
}