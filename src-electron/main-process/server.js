const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const router = express.Router()
const sharp = require('sharp')

const PREVIEW_FILE = 'preview.jpg'

app.use(cors())

router.get('/preview', function (req, res) {
  if (!fs.existsSync(PREVIEW_FILE)) {
    res.sendFile(path.join(__statics, '/logo.png'))

    return
  }

  res.sendFile(PREVIEW_FILE, { root: process.cwd() })
})

router.get('/stars', function (req, res) {
  res.send('stars')
})

app.use('/', router)

export const expressApp = app
