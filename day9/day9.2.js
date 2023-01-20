const cloneDeep = require('clone-deep')

const moveHead = (lastPos, newPos) => {
  const { row, col } = lastPos;
  const [direction, moves] = newPos;
  const subMoves = [];
  switch (direction) {
    case "U":
      for (index = row + 1; index <= row + moves; index++) {
        subMoves.push({ row: index, col: col });
      }
      break;
    case "D":
      for (index = row - 1; index >= row - moves; index--) {
        subMoves.push({ row: index, col: col });
      }
      break;
    case "L":
      for (index = col - 1; index >= col - moves; index--) {
        subMoves.push({ row: row, col: index });
      }
      break;
    case "R":
      for (index = col + 1; index <= col + moves; index++) {
        subMoves.push({ row: row, col: index });
      }
      break;
  }
  return subMoves;
};

const updateTailPart = (oldPos, targetPos) => {
  const { row: oldRow, col: oldCol } = oldPos;
  const { row: targetRow, col: targetCol } = targetPos;
  // head above
  if (targetRow - oldRow === 2) {
    return { row: oldRow + 1, col: targetCol };
  }
  // head below
  if (targetRow - oldRow === -2) {
    return { row: oldRow - 1, col: targetCol };
  }
  // head right
  if (targetCol - oldCol === 2) {
    return { row: targetRow, col: oldCol + 1 };
  }
  // head left
  if (targetCol - oldCol === -2) {
    return { row: targetRow, col: oldCol - 1 };
  }
  return oldPos;
};

const moveTail = (lastTailPosArr, headPos) => {
  const newTailPositions = [];
  let shouldMove = false;
  lastTailPosArr.forEach((tailPart, index) => {
    if (index === 0) {
      const move = updateTailPart(tailPart, headPos);
      if (move.row !== tailPart.row || move.col !== tailPart.col)
        shouldMove = true;
      newTailPositions.push(move);
    } else {
      if(shouldMove === true) {
        newTailPositions.push(lastTailPosArr[index - 1]);
      } else {
        newTailPositions.push(lastTailPosArr[index]);
      }
    }
  });
  return newTailPositions;
};

const findUnique = (tailPositions) => {
  const unique = [];
  tailPositions.forEach((pos) => {
    const { row, col } = pos;
    const stringified = `${row}:${col}`;
    if (unique.includes(stringified) === false) unique.push(stringified);
  });
  return unique;
};

const day9 = (input) => {
  const inputArr = input.split("\n").map((move) => {
    const [first, second] = move.split(" ");
    return [first, parseInt(second)];
  });
  const headCoords = [{ row: 1000, col: 1000 }];
  let tailCoords = Array(9).fill([{ row: 1000, col: 1000 }]);
  
  inputArr.forEach((move) => {
    const headmoves = moveHead(headCoords[headCoords.length - 1], move);
    headmoves.forEach((headPos) => {
      const lastCoords = tailCoords.map((coord) => coord[coord.length - 1]);
      const newTailPositions = moveTail(lastCoords, headPos);
      newTailPositions.forEach((pos, index) => {
        const tailCoordsCopy = cloneDeep(tailCoords)
        tailCoordsCopy[index].push(pos)
        tailCoords = tailCoordsCopy
      });
      headCoords.push(headPos);
    });
  });
  console.log('tailCoords', tailCoords)
  return findUnique(tailCoords.pop()).length;
};

module.exports = { day9, moveHead, moveTail, findUnique };
