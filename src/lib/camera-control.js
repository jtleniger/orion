const util = require('util')
const exec = util.promisify(require('child_process').exec)

const CMD = 'gphoto2'
const SET_CFG_FLAG = '--set-config'
const GET_CFG_FLAG = '--get-config'

export class CameraControl {
  static async connect () {
    let modelConfig

    try {
      modelConfig = await this.getConfig('/main/status/cameramodel')
    } catch (e) {
      return {
        success: false,
        model: ''
      }
    }

    if (!modelConfig) {
      return {
        success: false,
        model: ''
      }
    }

    const model = /Current: (.+)[\r\n]+/g.exec(modelConfig)[1]

    await this.setConfig('/main/capturesettings/capturemode', 0)

    return {
      success: true,
      model
    }
  }

  static async capturePreview () {
    await this.setConfig('/main/capturesettings/imagequality', 0)
    await this.runCommand('--capture-image-and-download --force-overwrite --filename=preview.jpg')
  }

  static async runCommand (flags) {
    const { stdout, stderr } = await exec(`${CMD} ${flags}`)

    console.log(stdout)
    console.log(stderr)

    return stdout
  }

  static async setConfig (config, value) {
    return this.runCommand(`${SET_CFG_FLAG} ${config}=${value}`)
  }

  static async getConfig (config) {
    return this.runCommand(`${GET_CFG_FLAG} ${config}`)
  }
}
