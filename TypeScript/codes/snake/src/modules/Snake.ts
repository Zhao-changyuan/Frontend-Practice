

class Snake {
  // 表示蛇头元素
  head: HTMLElement;
  // 蛇的身体（包括身体）
  bodies: HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')!;
    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {
    if (this.X === value) return

    if (value < 0 || value > 290) {
      // 蛇死了
      throw new Error('蛇撞墙了')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }

    this.moveBody()
    this.head.style.left = value + 'px';
    this.checkHeadBody()

  }

  set Y(value) {
    if (this.Y === value) return

    if (value < 0 || value > 290) {
      // 蛇死了，抛出异常
      throw new Error('蛇撞墙了')
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }

    this.moveBody()
    this.head.style.top = value + 'px';
    this.checkHeadBody()
  }

  // 蛇增加身体
  addBody() {
    this.element.insertAdjacentHTML("beforeend", `<div></div>`)
  }

  /**
   * 移动身体
   * 从后往前修改，将后一节的位置更新为前一节的位置
   */
  moveBody() {
    if (this.bodies.length === 1) return

    for (let i = this.bodies.length - 1; i > 0; i--) {
      const prev = this.bodies[i - 1] as HTMLElement;
      const cur = this.bodies[i] as HTMLElement;
      let X = prev.offsetLeft;
      let Y = prev.offsetTop;

      cur.style.left = X + 'px';
      cur.style.top = Y + 'px';
    }
  }

  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      const cur = this.bodies[i] as HTMLElement;
      if (this.X === cur.offsetLeft && this.Y === cur.offsetTop) {
        throw new Error('蛇头撞到了自己。')
      }
    }
  }
}

export default Snake