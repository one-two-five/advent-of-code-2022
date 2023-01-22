const { day10 } = require("./day10.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day10/example.txt");
  const result = day10(input);
  expect(result).toBe(13);
});

test("should match final input", () => {
  // const input = readFile("./day10/input.txt");
  // const result = day10(input);
  // expect(result).toBe(6271);
});