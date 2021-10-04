
function remSize() {
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth;

  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }

  if (deviceWidth <= 320) {
    deviceWidth = 320;
  }

  // 保证在750px宽度设计稿时，1rem = 100px, 即 100px = (750px / 7.5)
  // 也就是设备宽度是 1rem(100px) 的 7.5倍
  // 为什么设定1rem=100px，为了方便通过设计稿中元素的px值，计算出rem值，
  // 例如：设计稿宽度750px，其中一个图标宽度的100px，那换算成rem值就是 1rem
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
  
  document.body.style.fontSize = 0.3 + 'rem'
}

window.onload = function () {
  remSize()
}
window.onresize = function () {
  remSize()
}