

const { app, BrowserWindow, ipcMain, Notification } = require('electron')

require('@electron/remote/main').initialize()

let win = null, win2 = null
app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 300,
    height: 300,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    }
  })
  win.loadFile('./index.html')
  require('@electron/remote/main').enable(win.webContents)

  win2 = new BrowserWindow({
    width: 300,
    height: 300,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    }
  })
  win2.loadFile('./index2.html')
  global.sharedObject = {
    win2WebContentsId: win2.webContents.id
  }

  setTimeout(handleIPC, 500)
})

function handleIPC() {
  /* ipcMain.on('do-some-work', function (e, a, b) {
    console.log('do-dome-work', a, b)
  }) */

  // win.webContents.send('do-some-render-work')
}

