import React, {useState, useEffect} from 'react'

import logo from './logo.svg';
import './App.css';
import { ipcRenderer } from 'electron'
// const {ipcRenderer} = window.require('electron')

function App() {
  const [remoteCode, setRemoteCode] = useState('')
  const [localCode, setLocalCode] = useState('')
  const [controlText, setControlText] = useState('')

  const login = async () => {
    let code = await ipcRenderer.invoke('login')
    setLocalCode(code)
  }

  // 如果想执行只运行一次的effect（仅在组件挂载和卸载时执行），可以传递一个空数组最为第二个参数。
  useEffect(() => {
    login()
    ipcRenderer.on('control-state-change', handleControlState)
    return () => {
      ipcRenderer.removeListener('control-state-change', handleControlState)
    }
  }, [])

  const startControl = (remoteCode) => {
    ipcRenderer.send('control', remoteCode)
  }

  /**
   * 控制状态被改变
   * @param {*} e 
   * @param {*} name 
   * @param {*} type 
   */
  const handleControlState = (e, name, type) => {
    let text = ''
    if (type === 1) {
      // 控制别人
      text = `正在远程控制${name}`
    } else if (type === 2) {
      // 被控制
      text = `被${name}控制中`
    }

    setControlText(text)
  }

  return (
    <div className="App">
      {
        controlText === '' ? <>
          <div>您的控制码 {localCode}</div>
          <input type="text" value={remoteCode} onChange={e => setRemoteCode(e.target.value)} />
          <button onClick={() => startControl(remoteCode)}>确认</button>
        </> : <div>{ controlText }</div>
      }
    </div>
  );
}

export default App;
