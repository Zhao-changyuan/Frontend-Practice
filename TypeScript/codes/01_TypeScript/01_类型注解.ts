
// 类型注解：
void function () {
  function showMsg(message: string) {
    return `床前明月光，${message}`
  }

  let msg = '疑是地上霜'
  console.log(showMsg(msg))
}();