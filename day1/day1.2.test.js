const day1 = require("./day1.2");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day1/example.txt");
  const result = day1(input);
  expect(result).toBe(45000);
});

test("should match final input", () => {
  const input = readFile("./day1/input.txt");
  const result = day1(input);
  expect(result).toBe(198041);
});
