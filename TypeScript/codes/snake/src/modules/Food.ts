
// 定义食物类 Food
class Food {
  // 定义一个睡醒表示事务所对应的元素
  element: HTMLElement;

  constructor() {
    // 获取页面中的food元素
    this.element = document.getElementById('food')!;
  }

  // 获取食物x轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物位置的方法
  change() {
    // 生成一个随机的位置
    const left = Math.round(Math.random() * 29) * 10
    const top = Math.round(Math.random() * 29) * 10

    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}



export default Food