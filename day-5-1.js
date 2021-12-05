const inputValues = document.body.textContent.split(`\n`).map(line => line.split('->').map(tuple => tuple.split(',')))
// consider only horizontal and vertical lines
// only use lines where x1 and x2 or y1 and y2 are the same
// log all coords that have been mapped.
// any time // wait, dont remove vals, 'cause you may double count
// make dictionary of each point as key to a count
// sort by x 

const horizontalLines = inputValues.filter(value => {
  (Number(value[0][1].trim()) === Number(value[1][1].trim()))
})

const verticalLines = inputValues.filter(value => {
  (Number(value[0][0].trim()) === Number(value[1][0].trim()))
})

const dangerMap = {}

horizontalLines.forEach(line => {
  const smallX = Math.min(Number(line[0][0]), Number(line[1][0]))
  const largeX = Math.max(Number(line[0][0]), Number(line[1][0]))
  for (let x = smallX; x <= largeX; i++) {
    dangerMap[${`x, value[0][1]`}]++
  }
})

JSON.stringify(dangerMap)
