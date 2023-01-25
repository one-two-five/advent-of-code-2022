
const moveHead = (lastPos, newPos) => {
  const { row, col } = lastPos;
  const [direction, moves] = newPos;
  const subMoves = []
  switch (direction) {
    case "U":
      for(index=row+1; index<=(row+moves); index++) {
        subMoves.push({row: index, col:col})
      }
      break
    case "D":
      for(index=row-1; index>=(row-moves); index--) {
        subMoves.push({row: index, col:col})
      }
      break
    case "L":
      for(index=col-1; index>=(col-moves); index--) {
        subMoves.push({row: row, col:index})
      }
      break
    case "R":
      for(index=col+1; index<=(col+moves); index++) {
        subMoves.push({row: row, col:index})
      }
      break
  }
  return subMoves
};

const moveTail = (lastPos, headPos) => {
  const {row: lastRow, col: lastCol} = lastPos
  const {row: headRow, col: headCol} = headPos

  // head above
  if(headRow - lastRow === 2) {
    return{row: lastRow + 1, col: headCol}
  }
  // head below
  if(headRow - lastRow === -2) {
    return{row: lastRow - 1, col: headCol}
  }
  // head right
  if(headCol - lastCol === 2) {
    return{row: headRow, col: lastCol + 1}
  }
  // head left
  if(headCol - lastCol === -2) {
    return{row: headRow, col: lastCol - 1}
  }
  return lastPos
};

const findUnique = (tailPositions) => {
  const unique = []
  tailPositions.forEach(pos => {
    const {row, col} = pos
    const stringified = `${row}:${col}` 
    if(unique.includes(stringified) === false) unique.push(stringified)
  })
  return unique
}

const day9 = (input) => {
  const inputArr = input.split("\n").map((move) => {
    const [first, second] = move.split(" ");
    return [first, parseInt(second)];
  });
  const headCoords = [{ row: 0, col: 0 }];
  const tailCoords = [{ row: 0, col: 0 }];

  inputArr.forEach(move => {
    const headmoves = moveHead(headCoords[headCoords.length - 1], move)
    headmoves.forEach(headPos => {
      const newTailPos = moveTail(tailCoords[tailCoords.length - 1], headPos)
      headCoords.push(headPos)
      tailCoords.push(newTailPos)
    })
  });
  return findUnique(tailCoords).length;
};

module.exports = { day9, moveHead, moveTail, findUnique };
