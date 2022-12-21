
const arrayFromTxtNewLines = require("../utils/arrayFromTxtNewLines")

const day1 = (dataPath) => {
  console.time('day1-1')
  const arr = arrayFromTxtNewLines(dataPath, true)
  const result = arr.reduce((acc, cur, index, arr) => {
    if((index > 0) && cur > arr[index - 1]) {
      acc++
    }
    return acc
  }, 0)

  console.timeEnd('day1-1')
  return result
}

module.exports = day1;