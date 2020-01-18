const assert = require('assert')
const hfd = require('../lib/hfd')
const fs = require('fs')

describe('hfd', function () {
  it('should return a high value for a blurry star', async function () {
    const blurry = fs.readFileSync('src/test/blurry.jpg')

    let result = await hfd.calculate(blurry)

    console.log(`Blurry star HFD: ${result}`)

    assert(result > 30)
  })

  it('should return a low value for a sharp star', async function () {
    const blurry = fs.readFileSync('src/test/sharp.jpg')

    let result = await hfd.calculate(blurry)

    console.log(`Sharp star HFD: ${result}`)

    assert(result < 20)
  })
})
