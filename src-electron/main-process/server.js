const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const router = express.Router()
const Sharp = require('sharp')
import { findStars } from './lib/astro/stars'

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
  const img = new Sharp(PREVIEW_FILE)
  const stars = findStars(img)
  res.send(stars)
})

app.use('/', router)

export const expressApp = app
