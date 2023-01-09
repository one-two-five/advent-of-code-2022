const cloneDeep = require('clone-deep');

const countTreesCol = (treeArr, index, reverse = false) => {
  let treeCount = 0;
  let lastTreeHeight = 0;
  const treeArrCopy = reverse ? cloneDeep(treeArr).reverse() : cloneDeep(treeArr)

  treeArrCopy.every(row => {
    const tree = row[index]
    if (tree > lastTreeHeight) {
      treeCount++;
      lastTreeHeight = tree;
      return true
    } else {
      return false;
    }
  });
  return treeCount;
};

const countTreesRow = (treeArr, index, reverse = false) => {
  let treeCount = 0;
  let lastTreeHeight = 0;
  const treeArrCopy = cloneDeep(treeArr);

  const row = reverse ? treeArrCopy[index].reverse() : treeArrCopy[index];

  row.every((tree) => {
    console.log('tree', tree)
    if (tree > lastTreeHeight) {
      treeCount++;
      lastTreeHeight = tree;
      return true
    } else {
      return false;
    }
  });
  return treeCount
};

const day8 = (input) => {
  const inputArr = input.split("\n").map((row) => row.split(""));
  let treeCount = 0

  inputArr.forEach((_, index) => {
    treeCount += countTreesRow(inputArr, index, false)
    treeCount += countTreesRow(inputArr, index, true)
  });

  inputArr[0].forEach((_, index) => {
    treeCount += countTreesCol(inputArr, index, false)
    treeCount += countTreesCol(inputArr, index, true)
  })

  return treeCount;
};

module.exports = { day8, countTreesCol, countTreesRow };
