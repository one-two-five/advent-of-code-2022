// start of a packet is indicated by 4 chars that are all different

// your subroutine needs to identify the first position where 
// the four most recently received characters were all different

const isUnique = (slice) => {
  const unique = []
  slice.forEach(element => {
    if(!unique.includes(element)) unique.push(element)
  });
  return unique.length === 14
}

const day6 = (input) => {
  const inputArr = input.split('')
  let index = 0
  while (isUnique(inputArr.slice(index, index + 14)) === false) {
    index++
  }
  return index + 14
};

module.exports = { day6 };
