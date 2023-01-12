const cloneDeep = require("clone-deep");

const fillArray = (arr) => {
  const newArray = [];
  arr.forEach((row) => {
    newArray.push(Array(row.length).fill(0));
  });
  return newArray;
};

const isEdge = (treeArray, rowIndex, colIndex) => {
  if (
    colIndex === 0 ||
    rowIndex === 0 ||
    colIndex === treeArray[0].length - 1 ||
    rowIndex === treeArray.length - 1
  )
    return true;
  return false;
};

const setTree = (treesVisible, rowIndex, colIndex) => {
  const treesVisibleCopy = cloneDeep(treesVisible);
  treesVisibleCopy[rowIndex][colIndex] = 1;
  return treesVisibleCopy;
};

const day8 = (input) => {
  const treeArray = input.split("\n").map((row) => row.split(""));
  let treesVisible = fillArray(treeArray);

  treeArray.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (isEdge(treeArray, rowIndex, colIndex)) {
        treesVisible = setTree(treesVisible, rowIndex, colIndex);
      } else
        [
          //scan rows
          //scan cols
        ];
    });
  });

  console.log("treesVisible", treesVisible);
  return 0;
};

module.exports = { day8, fillArray };
