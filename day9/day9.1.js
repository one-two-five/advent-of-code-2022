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
  return [];
};

const day9 = (input) => {
  const inputArr = input.split("\n").map((move) => {
    const [first, second] = move.split(" ");
    return [first, parseInt(second)];
  });
  const headCoords = [{ row: 0, col: 0 }];
  const tailCoodrs = [{ row: 0, col: 0 }];
  // grid can be any size so easier to store an object full of coordinates?
  // e.g. H coodrs = {0,0} move up === {0,1}
  // T looks in last H move and bases move off that
  // work out what to add to the previous coordinate for H - up, down, left, right
  // calculate where T is based on coordinate and add appropriate up, down, left right
  return 0;
};

module.exports = { day9, moveHead, moveTail };
