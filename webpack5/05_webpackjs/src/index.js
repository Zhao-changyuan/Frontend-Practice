import data from './data.json';

import './css/main.css';
import './css/main.less';

// @babel/polyfill会转义所有的ES新语法
// import '@babel/polyfill'

console.log('Hello webpack5');
console.log(data.name, data.desc);

console.log(__dirname);

const showMsg = () => {
  // eslint-disable-next-line
  alert('Hello');
};

// eslint-disable-next-line
window.showMsg = showMsg;

const p = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Promise is working');
    resolve();
  }, 1000);
});

console.log(p);
