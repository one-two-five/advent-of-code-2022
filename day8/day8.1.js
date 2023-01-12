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

const isHighest = (treeHeight, treeArr) => {
  let isHighest = true;
  treeArr.forEach((tree) => {
    if (tree >= treeHeight) isHighest = false;
  });
  return isHighest;
};

const isTreeVisible = (row, splitIndex, treeHeight) => {
  let treeIsVisible = false;

  const sliceLeft = row.slice(0, splitIndex);
  const sliceRight = row.slice(splitIndex + 1);

  if (isHighest(treeHeight, sliceLeft) || isHighest(treeHeight, sliceRight))
    treeIsVisible = true;
  return treeIsVisible;
};

const day8 = (input) => {
  const treeArray = input.split("\n").map((row) => row.split(""));
  let treesVisible = fillArray(treeArray);

  treeArray.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (isEdge(treeArray, rowIndex, colIndex)) {
        treesVisible[rowIndex][colIndex] = 1
      } else if (treesVisible[rowIndex][colIndex] === 0) {
        const treeHeight = treeArray[rowIndex][colIndex];
        const columnAsRow = [];
        treeArray.forEach((row) => {
          columnAsRow.push(row[colIndex]);
        });
        const row = treeArray[rowIndex];
        if (
          isTreeVisible(row, colIndex, treeHeight) ||
          isTreeVisible(columnAsRow, rowIndex, treeHeight)
        ) {
          treesVisible[rowIndex][colIndex] = 1;
        }
      }
    });
  });

  let visible = 0
  treesVisible.forEach(row => {
    const rowCount = row.reduce((acc, cur) => acc+=cur)
    visible+=rowCount
  })
  return visible;
};

module.exports = { day8, fillArray, isTreeVisible };
