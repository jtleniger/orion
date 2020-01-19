const { execSync } = require('child_process')

const CMD = 'gphoto2'
const SET_CFG_FLAG = '--set-config'
const GET_CFG_FLAG = '--get-config'

export class CameraControl {
  model = ''

  connect () {
    let modelConfig

    try {
      modelConfig = this.getConfig('/main/status/cameramodel')
    } catch (e) {
      return false
    }

    if (!modelConfig) {
      return false
    }

    this.model = /Current: (.+)[\r\n]+/g.exec(modelConfig)[1]

    return true
  }

  runCommand (flags) {
    const stdout = execSync(`${CMD} ${flags}`).toString()

    console.log(stdout)

    return stdout
  }

  setConfig (config) {
    return this.runCommand(`${SET_CFG_FLAG} ${config}`)
  }

  getConfig (config) {
    return this.runCommand(`${GET_CFG_FLAG} ${config}`)
  }

  capturePreview () {
    return this.runCommand('--capture-preview --force-overwrite')
  }
}
