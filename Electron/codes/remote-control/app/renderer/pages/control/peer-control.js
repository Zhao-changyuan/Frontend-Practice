

const EventEmitter = require('events')
const peer = new EventEmitter()

// 以下应该是peer-puppet的代码
const { ipcRenderer, desktopCapturer } = require('electron')
async function getScreenStream() {
  const sources = await desktopCapturer.getSources({ types: ['screen'] })

  navigator.webkitGetUserMedia({
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: sources[0].id,
        maxWidth: window.screen.width,
        maxHeight: window.screen.height
      }
    }
  }, (stream) => {
    peer.emit('add-stream', stream)
  }, error => {
    // handle err
    console.error(error)
  })
}

getScreenStream();

peer.on('robot', (type, data) => {
  if (type === 'mouse') {
    data.screen = {
      width: window.screen.width,
      height: window.screen.height,
    }
  }

  setTimeout(() => {
    ipcRenderer.send('robot', type, data)
  }, 2000)
})

module.exports = peer