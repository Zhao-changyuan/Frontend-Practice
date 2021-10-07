
const { ipcRenderer } = require('electron')
const remote = require('@electron/remote')

// ipcRenderer.send('do-some-work', 1, 2)

// ipcRenderer.on('do-some-render-work', () => {
//   alert('do some work')
// })

let sharedObject = remote.getGlobal('sharedObject')
let win2WebContentsId = sharedObject.win2WebContentsId

console.log(win2WebContentsId)
setTimeout(() => {
ipcRenderer.sendTo(win2WebContentsId, 'do-some-work', 1)

}, 500)