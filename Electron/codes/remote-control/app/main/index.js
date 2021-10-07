
const { app } = require('electron')
const {execFile} = require('child_process');


// const { create: createMainWindow } = require('./windows/main')
const { create: createControlWindow } = require('./windows/control')
const handleIPC = require('./ipc')

function setupExe() {
  var executablePath = "C:\\Program Files (x86)\\Tencent\\QQ\\Bin\\QQScLauncher.exe";

  execFile(executablePath, function(err, data) {
      if(err){
        console.error(err);
        return;
      }
  
      console.log(data.toString());
  });
}

app.whenReady().then(() => {
  createControlWindow();

  // 处理IPC
  handleIPC();

  require('./robot.js')();

  setupExe()
})

app.on('window-all-closed', () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})