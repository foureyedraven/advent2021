// input: list of 5 digit binary
const inputValues = document.body.textContent
let sumOfBits = inputValues.shift()
inputValues.forEach(val => {
  for (let i = 0; i < val.length; i++) {
    if (val[i] === "1") {
      sumOfBits.slice(i) //....????
    }
  }
})
// count 
// calc: most common bit val in each place (gamma)
// calc: the inverse (epsilon)
// convert to decimal
// multiply to get power consumption
