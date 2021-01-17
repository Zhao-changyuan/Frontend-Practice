
let dayjs = require('dayjs');
let isBetween = require('dayjs/plugin/isBetween');
require('dayjs/locale/zh-cn');

dayjs.extend(isBetween);
dayjs.locale('zh-cn');

// 2021年特殊日期
let holidays = [
    // 春节
    ['2021-02-11', '2021-02-17'],
    // 清明节
    ['2021-04-03', '2021-02-05'],
    // 劳动节
    ['2021-05-01', '2021-05-05'],
    // 端午节
    ['2021-06-12', '2021-06-14'],
    // 中秋节
    ['2021-09-19', '2021-09-21'],
    // 国庆节
    ['2021-10-01', '2021-10-07'],
];

let specificWorkDays = [
    // 春节
    '2021-02-07',
    '2021-02-20',
    // 劳动节
    '2021-04-25',
    '2021-05-08',
    // 中秋节
    '2021-09-18',
    // 国庆节
    '2021-09-26',
    '2021-10-09',
];


// 测试方法
void function() {
    console.log(dayjs('2021-10-09 07:33:00').format());
    console.log(new Date(dayjs('2021-10-09 07:33:00').format()));
}();