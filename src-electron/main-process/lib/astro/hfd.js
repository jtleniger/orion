/***
 * Calculates the half flux diameter given a Sharp.
 *
 */
export async function hfd (sharp) {
  const meta = await sharp.metadata()

  const data = await sharp
    .removeAlpha()
    .greyscale()
    .raw()
    .toBuffer()

  const outerRadius = 30

  let sum = 0, sumDist = 0

  const centerX = Math.ceil(meta.width / 2.0)
  const centerY = Math.ceil(meta.height / 2.0)

  let x = 0, y = 0

  for (var index = 0; index < data.length; index++) {
    if (insideCircle(x, y, centerX, centerY, outerRadius)) {
      sum += data[index]
      sumDist += data[index] * Math.sqrt(Math.pow(x - centerX, 2.0) + Math.pow(y - centerY, 2.0))
    }

    if (index % meta.width === 0) {
      x = 0
      y++
    } else {
      x++
    }
  }

  return (sum ? 2.0 * sumDist / sum : Math.sqrt(2.0) * outerRadius)
}

function insideCircle (x, y, centerX, centerY, radius) {
  return (Math.pow(x - centerX, 2.0) + Math.pow(y - centerY, 2.0)) <= Math.pow(radius, 2.0)
}
