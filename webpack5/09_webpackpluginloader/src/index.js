import data from './data.json';

import './css/main.css';
import './css/main.less';

// 以模块的方式引入图片
import boy from './image/dt.gif';
import homeIcon from './image/icon/label.png';

// @babel/polyfill会转义所有的ES新语法
// import '@babel/polyfill'

// eslint-disable-next-line
console.log('Hello webpack5');
// eslint-disable-next-line
console.log(data.name, data.desc);

// eslint-disable-next-line
console.log(__dirname);

const showMsg = () => {
  // eslint-disable-next-line
  alert('Hello');
};

// eslint-disable-next-line
window.showMsg = showMsg;

const p = new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log('Promise is working');
    resolve();
  }, 1000);
});

// eslint-disable-next-line
console.log(p);

// eslint-disable-next-line
const img = new Image();
img.src = boy;

// eslint-disable-next-line
document.body.append(img);

// eslint-disable-next-line
const img1 = new Image();
img1.src = homeIcon;

// eslint-disable-next-line
document.body.append(img1);

console.log('接口地址', API_BASE_URL);
