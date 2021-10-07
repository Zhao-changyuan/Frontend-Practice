
const { app, BrowserWindow,Notification, ipcMain } = require('electron')
const path = require('path')

let win = null;

/**
 * 创建窗口
 */
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),

      // 下面两个设置保证在渲染进程中可使用Electron Api
      contextIsolation: false,
      nodeIntegration: true,
    }
  })

  win.loadFile('index.html')
  handleIPC()
}

function handleIPC() {
  ipcMain.handle('work-notification', async() => {
    let res = await new Promise((resolve, reject) => {
      let notification = new Notification({
        title: '任务结束',
        body: '是否开始休息？',
        actions: [{ text: '开始休息', type: 'button' }],
        closeButtonText: '继续工作'
      })
  
      notification.show()
      notification.on('click', () => {
        resolve('rest')
      })
      notification.on('close', () => {
        resolve('work')
      })
    })

    return res;
  })

  
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})