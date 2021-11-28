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
function buildLabel(name) {
    return buildLabel.prefix + name + buildLabel.suffix;
}
(function (buildLabel) {
    buildLabel.suffix = "";
    buildLabel.prefix = "Hello, ";
})(buildLabel || (buildLabel = {}));
console.log(buildLabel("Sam Smith"));
