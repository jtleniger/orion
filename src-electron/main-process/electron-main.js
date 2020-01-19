import { app, BrowserWindow, nativeTheme } from 'electron'
const fs = require('fs')
const http = require('http')
const express = require('express')
const expressApp = express()
const cors = require('cors')
const router = express.Router()

try {
  if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(require('path').join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) { }

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = require('path').join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

let mainWindow

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      // keep in sync with /quasar.conf.js > electron > nodeIntegration
      // (where its default value is "true")
      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true
    },
    frame: false
  })

  mainWindow.maximize()

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()

  const preview = 'capture_preview.jpg'

  if (fs.existsSync(preview)) {
    fs.unlinkSync(preview)
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

expressApp.use(cors())

router.get('/file/:name', function (req, res) {
  res.sendFile(req.params.name, { root: __dirname })
})

expressApp.use('/', router)

http.createServer(expressApp).listen(8000)