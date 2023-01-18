const moveHead = (lastPos, newPos) => {
  const { row, col } = lastPos;
  const [direction, moves] = newPos;

  switch (direction) {
    case "U":
      return { row: (row + moves), col: col };
    case "D":
      return { row: (row - moves), col: col };
    case "L":
      return { row: row, col: (col - moves) };
    case "R":
      return { row: row, col: (col + moves) };
  }
};

const moveTail = (lastPos, headPos) => {
  const {row: lastRow, col: lastCol} = lastPos
  const {row: headRow, col: headCol} = headPos
  const moves = []
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
    const newHeadPos = moveHead(headCoords[headCoords.length - 1], move)
    const newTailPos = moveTail(tailCoords[tailCoords.length - 1], newHeadPos)
    headCoords.push(newHeadPos)
    tailCoords.push(newTailPos)
  });
  console.log('headCoords', headCoords)
  console.log('tailCoords', tailCoords)
  return findUnique(tailCoords);
};

module.exports = { day9, moveHead, moveTail, findUnique };
