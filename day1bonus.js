const newFn = (prevSum, idx) => {
  const v1 = values[idx]
  const v2 = values[idx + 1]
  const v3 = values[idx + 2]
  const sum = v1 + v2 + v3
  if (v1 && v2 && v3) {
    if (sum > prevSum) {
      count2++
    }
    newFn(sum, idx + 1) 
  }
}
