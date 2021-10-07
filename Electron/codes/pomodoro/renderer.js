
const { ipcRenderer }  = require('electron')
const Timer = require('timer.js')

console.log('ipcRenderer', ipcRenderer)

function startWork() {
  let workTimer = new Timer({
    ontick: (ms) => {
      updateTime(ms)
    },
    onend: () => {
      notification()
    }
  })

  workTimer.start(10)
}

/**
 * 更新时间
 * @param {number} ms 剩余的毫秒数 
 */
function updateTime(ms) {
  let timeContainer = document.getElementById('timer-container');
  let s = (ms / 1000).toFixed(0)
  let ss = s % 60;
  let mm = (s / 60).toFixed(0);
  timeContainer.innerText = `${mm.toString().padStart(2, 0)} : ${ss.toString().padStart(2, 0)}`;
}

/**
 * 通知
 */
async function notification() {
  let res = await ipcRenderer.invoke('work-notification')
  
  if (res === 'rest') {
    setTimeout(() => {
      console.log('开始休息')
      alert('休息')
    }, 5 * 1000)
  } else if (res === 'work') {
    console.log('继续工作')
    startWork()
  }
}

startWork();