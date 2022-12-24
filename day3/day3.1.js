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

const findDuplicateChar = (strArr1, strArr2) => {
  let duplicateChar = "";
  strArr1.forEach((first) => {
    strArr2.forEach((second) => {
      if (first === second) duplicateChar = first;
    });
  });
  return duplicateChar;
};

const day3 = (input) => {
  const inputArr = input.split("\n");
  let score = 0;
  inputArr.forEach((rucksack) => {
    const [firstHalf, lastHalf] = splitString(rucksack);
    const duplicate = findDuplicateChar(firstHalf, lastHalf);
    if (duplicate !== "") score += getScore(duplicate);
  });
  return score;
};

module.exports = { day3, getScore, splitString, findDuplicateChar };
