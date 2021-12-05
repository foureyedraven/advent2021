const values = document.body.textContent.split(`\n`).map(line => line.split(' ')) // array of array of 2 vals
const position = {
  depth: 0,
  breadth: 0,
  aim: 0
}
values.forEach(val => {
  const direction = val[0]
  const num = Number(val[1])
  if (direction === "forward") {
    position.breadth += num
    position.depth += position.aim * num
  } else if (direction === "up") {
    position.aim -= num
  } else if (direction === "down") {
    position.aim += num
  }
})

position.breadth * position.depth
// 1872757425
