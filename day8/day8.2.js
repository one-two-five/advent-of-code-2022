const fillArray = (arr) => {
  const newArray = [];
  arr.forEach((row) => {
    newArray.push(Array(row.length).fill(0));
  });
  return newArray;
};

const countTrees = (treeHeight, treeArr) => {
  let treeCount = 0;
  let lastTreeFound = false;
  treeArr.forEach((tree) => {
    if (!lastTreeFound) treeCount++;
    if (tree >= treeHeight) lastTreeFound = true;
  });
  return treeCount;
};

const countVisibleTrees = (row, splitIndex, treeHeight) => {
  const leftEdge = splitIndex === 0;
  const rightEdge = splitIndex === row.length - 1;

  const sliceLeft = leftEdge ? [] : row.slice(0, splitIndex);
  const sliceRight = rightEdge ? [] : row.slice(splitIndex + 1);
  const countLeft = countTrees(treeHeight, sliceLeft.reverse());
  const countRight = countTrees(treeHeight, sliceRight);

  return [countLeft, countRight];
};

const day8 = (input) => {
  const treeArray = input.split("\n").map((row) => row.split(""));
  const treeVisibility = [];

  treeArray.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
      const treeHeight = treeArray[rowIndex][colIndex];
      const columnAsRow = [];
      treeArray.forEach((row) => {
        columnAsRow.push(row[colIndex]);
      });
      const row = treeArray[rowIndex];
      const [left, right] = countVisibleTrees(row, colIndex, treeHeight);
      const [up, down] = countVisibleTrees(columnAsRow, rowIndex, treeHeight);
      treeVisibility.push(up * down * left * right);
    });
  });

  return treeVisibility.sort((a, b) => a - b).pop();
};

module.exports = { day8, fillArray, countVisibleTrees };
