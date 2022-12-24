const getScore = (char) => {
  const code = char.charCodeAt(0);
  if (code >= 97) return code - 96;
  return code - 38;
};

const splitString = (str) => {
  const itemArr = str.split("");
  if (itemArr.length % 2 !== 0) return [];
  return [
    itemArr.slice(0, itemArr.length / 2),
    itemArr.slice(itemArr.length / 2),
  ];
};

const findDuplicateChar = (strArr1, strArr2, strArr3) => {
  let duplicateChar = "";
  strArr1.forEach((first) => {
    strArr2.forEach((second) => {
      strArr3.forEach((third) => {
        if (first === second && second === third) duplicateChar = first;
      })
    });
  });
  return duplicateChar;
};

const chunkArray = (array, chunkSize) => {
  const chunkedArray = []
  let chunk = []
  array.forEach(el => {
    chunk.push(el)
    if(chunk.length === chunkSize) {
      chunkedArray.push(chunk)
      chunk = []
    }
  })
  return chunkedArray
}

const day3 = (input) => {
  let score = 0;
  const inputArr = input.split("\n").map(rucksack => rucksack.split(''));
  const groups = chunkArray(inputArr, 3)
  groups.forEach((group) => {
    const duplicate = findDuplicateChar(group[0], group[1], group[2])
    if (duplicate !== "") score += getScore(duplicate);
  });
  return score;
};

module.exports = { day3, getScore, splitString, findDuplicateChar, chunkArray };
