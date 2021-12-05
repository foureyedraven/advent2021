const values = document.body.textContent.split(`\n`).map(line => line.split(' ')) // array of array of 2 vals
const position = {
  depth: 0,
  breadth: 0
}
values.forEach(val => {
  const direction = val[0]
  const num = Number(val[1])
  if (direction === "forward") {
    position.breadth += num
  } else if (direction === "up") {
    position.depth -= num
  } else if (direction === "down") {
    position.depth += num
  }
})

position.breadth * position.depth
// 1636725
