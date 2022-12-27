// start of a packet is indicated by 4 chars that are all different

// your subroutine needs to identify the first position where 
// the four most recently received characters were all different

const isUnique = (slice) => {
  const unique = []
  slice.forEach(element => {
    if(!unique.includes(element)) unique.push(element)
  });
  return unique.length === 4
}

const day6 = (input) => {
  const inputArr = input.split('')
  let index = 0
  while (isUnique(inputArr.slice(index, index + 4)) === false) {
    index++
  }
  return index + 4
};

module.exports = { day6 };
