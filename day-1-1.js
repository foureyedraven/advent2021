// dev tools console
const values = document.body.textContent.split(`\n`).map(Number)
let count = 0
values.forEach((val, i) => (values[i+1] > val) && count++)
