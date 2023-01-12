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
  let isHighest = true
  treeArr.forEach(tree => {
    if(tree >= treeHeight) isHighest = false
  })
  return isHighest
}

const setTreeVisibleRow = (treeArray, treesVisible, rowIndex, colIndex) => {
  const treeArrayCopy = cloneDeep(treeArray);
  const treesVisibleCopy = cloneDeep(treesVisible);
  const treeHeight = treeArrayCopy[rowIndex][colIndex]
  const row = treeArrayCopy[rowIndex]
  let treeIsVisible = false

  const sliceLeft = row.slice(0, colIndex)
  const sliceRight = row.slice(colIndex + 1)
 
  if(isHighest(treeHeight, sliceLeft) || isHighest(treeHeight, sliceRight)) treeIsVisible = true
  if(treeIsVisible) treesVisibleCopy[rowIndex][colIndex] = 1
  return treesVisibleCopy
}

const setTreeVisibleCol = (treeArray, treesVisible, rowIndex, colIndex) => {
  const treeArrayCopy = cloneDeep(treeArray);
  const treesVisibleCopy = cloneDeep(treesVisible);
  const treeHeight = treeArrayCopy[rowIndex][colIndex]
  const columnAsRow = []
  let treeIsVisible = false

  treeArrayCopy.forEach(row => {
    columnAsRow.push(row[colIndex])
  })
  const sliceLeft = columnAsRow.slice(0, rowIndex)
  const sliceRight = columnAsRow.slice(rowIndex + 1)
 
  if(isHighest(treeHeight, sliceLeft) || isHighest(treeHeight, sliceRight)) treeIsVisible = true
  if(treeIsVisible) treesVisibleCopy[rowIndex][colIndex] = 1
  return treesVisibleCopy
}

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
      } else if (treesVisible[rowIndex][colIndex] === 0) {
        //scan rows
        //scan cols
      }
    });
  });

  console.log("treesVisible", treesVisible);
  return 0;
};

module.exports = { day8, fillArray, setTreeVisibleRow, setTreeVisibleCol };
