const { day12 } = require("./day12.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day12/example.txt");
  const result = day12(input);
  expect(result).toBe(0);
});

test("should match final input", () => {
  const input = readFile("./day12/input.txt");
  // const result = day11(input);
  // expect(result).toBe(102399);
});
