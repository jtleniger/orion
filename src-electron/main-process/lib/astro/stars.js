/**
* Given a Sharp image, returns a list of stars.
*/
export async function findStars (sharp) {
  // Extract metadata, stats, and raw pixel values.
  const metadata = await getRawData(sharp)
  // const stats = await sharp.stats()
  const rawData = await getRawData(sharp)

  // Find white pixels.
  let whitePixels = getWhitePixels(rawData, metadata)

  // Get list of stars.
  const stars = buildStars(whitePixels)

  // Populate metadata.
  stars.forEach(star => {
    determineCenter(star)
    determineWeight(star)
  })

  return stars
}

/**
* Gets an image as a normalized, thresholded raw buffer.
* @param {Sharp} sharp object
*/
async function getRawData (sharp) {
  try {
    return await sharp
      .greyscale()
      .median()
      .normalise()
      .threshold()
      .raw()
      .toBuffer()
  } catch (error) {
    console.log(error)
    return null
  }
}

/**
* Given a raw data buffer, returns { x:, y: } coords for white pixels.
* @param {ArrayBuffer} raw buffer
* @param {Sharp.metadata} metadata
*/
function getWhitePixels (rawData, metadata) {
  let i = 0
  let whitePixels = []

  for (var pixel of rawData.values()) {
    if (pixel) {
      whitePixels.push({
        x: i % metadata.width,
        y: Math.floor(i / metadata.width)
      })
    }

    i++
  }

  return whitePixels
}

/**
* Creates star objects given an array of white pixels.
*/
function buildStars (whitePixels) {
  let stars = []

  while (whitePixels.length) {
    let first = whitePixels[0]

    let star = {
      pixels: [first]
    }

    checkNeighbors(whitePixels, star, first)

    stars.push(star)
  }

  return stars
}

/**
* Given an array of white pixels, a star, and a first pixel of interest,
* checks neighbors and pops them from the white pixels array.
*/
function checkNeighbors (whitePixels, star, first) {
  let neighbors = []

  for (var i = 0; i < whitePixels.length; i++) {
    let pixel = whitePixels[i]

    if (pixel.x <= first.x + 1 &&
      pixel.x >= first.x - 1 &&
      pixel.y <= first.y + 1 &&
      pixel.y >= first.y - 1) {
      neighbors.push(pixel)
    }
  }

  for (i = 0; i < neighbors.length; i++) {
    whitePixels.splice(whitePixels.indexOf(neighbors[i]), 1)
  }

  star.pixels = star.pixels.concat(neighbors)

  for (i = 0; i < neighbors.length; i++) {
    checkNeighbors(whitePixels, star, neighbors[i])
  }
}

/**
  * Determines the center of a star.
  */
function determineCenter (star) {
  let sumX = 0
  let sumY = 0

  for (var i = 0; i < star.pixels.length; i++) {
    sumX += star.pixels[i].x
    sumY += star.pixels[i].y
  }

  star.center = {
    x: Math.round(sumX / star.pixels.length),
    y: Math.round(sumY / star.pixels.length)
  }
}

/**
  * Determines the center of a star.
  */
function determineWeight (star) {
  star.weight = star.pixels.length
}
