const { day11 } = require("./day11.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day11/example.txt");
  const result = day11(input);
  expect(result).toBe(0);
});

test("should match final input", () => {
  const input = readFile("./day11/input.txt");
  // const result = day11(input);
  // expect(result).toBe(14760);
});
