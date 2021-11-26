
/**
 * 10.7 混入
 */

class Sprite {
  name = ""
  x = 0
  y = 0

  constructor(name: string) {
    this.name = name
  }
}

type Constructor = new (...args: any[]) => {}

type GContructor<T = {}> = new (...args: any[]) => T;

function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    _scale = 1;

    setScalle(scale: number) {
      this._scale = scale;
    }

    get scale(): number {
      return this._scale;
    }
  }
}

const EigthBitSprite = Scale(Sprite);

const flappySprite = new EigthBitSprite("Bird")
flappySprite.setScalle(0.5)
console.log(flappySprite.scale)

type Positionable = GContructor<{ setPos: (x: number, y: number) => void }>
type Spritable = GContructor<Sprite>
type Loggable = GContructor<{ print: () => void }>

function Jumpable<TBase extends Positionable>(Base: TBase) {
  return class Jumpable extends Base {
    jump() {
      this.setPos(0, 20)
    }
  }
}

