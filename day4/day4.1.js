
const isContained = (arr1, arr2) => {
  const contained1 = arr1[0] >= arr2[0] && arr1[1] <= arr2[1]
  const contained2 = arr2[0] >= arr1[0] && arr2[1] <= arr1[1]

  if(contained1 === true || contained2 === true) return true 
  return false
}

const day4 = (input) => {
  let score = 0
  const assignmentPairs = input.split("\n").map(line => line.split(',').map(assignment => assignment.split('-').map(digit => parseInt(digit))))
  assignmentPairs.forEach(pair => {
    const [assignment1, assignment2] = pair
    if(isContained(assignment1, assignment2)) score++
  })
  return score;
};

module.exports = { day4, isContained };
