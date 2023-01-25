const cloneDeep = require("clone-deep");

const updatePixels = (cycle, signal) => {
  const newCycle = (cycle - 1) % 40
  if (signal < (newCycle + 2) && (signal > newCycle - 2)) {
    const col = newCycle
    const row = Math.floor((cycle - 1) / 40);
    return [row, col];
  }
  return null;
};

const updatePixelArray = (cycle, signal, pixelArray) => {
  const pixelArrayCopy = cloneDeep(pixelArray);
  const litPixel = updatePixels(cycle, signal);
  if (litPixel) {
    const [row, col] = litPixel;
    pixelArrayCopy[row][col] = 1;
  }
  return pixelArrayCopy;
};

const day10 = (input) => {
  const inputArr = input
    .split("\n")
    .map((ins) => ins.split(" "))
    .map((ins) => {
      if (ins[0] !== "noop") {
        return [ins[0], parseInt(ins[1])];
      } else {
        return ins;
      }
    });

  let pixelArray = Array(6).fill(Array(40).fill('.'));
  let cycle = 1;
  let signal = 1;
  
  inputArr.forEach((ins) => {
    if (ins[0] === "noop") {
      pixelArray = updatePixelArray(cycle, signal, pixelArray);
      cycle += 1;
    } else {
      pixelArray = updatePixelArray(cycle, signal, pixelArray);
      cycle += 1;
      pixelArray = updatePixelArray(cycle, signal, pixelArray);
      cycle += 1;
      signal += ins[1];
    }
  });
  console.table(pixelArray);
  return 0;
};
module.exports = { day10, updatePixels };
