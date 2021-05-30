
namespace Utils {
  export interface Point {
    x: number,
    y: number
  }
}

namespace App {
  import Point = Utils.Point;

  const p: Point = {x: 0, y: 0}
}