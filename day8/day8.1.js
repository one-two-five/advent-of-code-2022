const cloneDeep = require("clone-deep");

const fillArray = (arr) => {
  const newArray = [];
  arr.forEach((row) => {
    newArray.push(Array(row.length).fill(0));
  });
  return newArray;
};

const day8 = (input) => {

  return treeCount;
};

module.exports = { day8, countTreesCol, countTreesRow, fillArray };
