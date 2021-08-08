
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";


// 游戏控制器，控制其他的所有类
class GameControl {
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分牌
  scorePanel: ScorePanel;

  // 蛇的移动方向（也就是按键的方向）
  direction: string = '';
  // 蛇是否活着
  isLive = true;

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()

    this.init()
  }

  init() {
    // 绑定键盘事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  /**
   * 创建一个键盘按下的响应函数
   * ArrowUp Up
   * ArrowDown Down
   * ArrowLeft Left
   * ArrowRight Right
   * @param event 
   */
  keydownHandler(event: KeyboardEvent) {
    // 检查 上下左右 按键
    this.direction = event.key;
  }

  /**
   * 控制蛇移动的方法
   * 根据 direction 来使蛇的位置改变
   */
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    // 检查蛇是否吃到食物
    this.checkEat(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (error) {
      console.error(error)
      // 游戏结束
      alert(error.message + ', GAME OVER!')
      this.isLive = false
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }
  
  /**
   * 检查蛇是否吃到食物
   * @param x 
   * @param y 
   */
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl;