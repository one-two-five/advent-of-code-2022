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

  const row = reverse ? treeArr[index].reverse() : treeArr[index];

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
  console.log("inputArr", inputArr);
  return 0;
};

module.exports = { day8, countTreesCol, countTreesRow };
