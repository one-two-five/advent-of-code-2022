const day3 = require("./day3.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day3/example.txt");
  const result = day3.day3(input);
  expect(result).toBe(157);
});

test("should match final input", () => {
  // const input = readFile("./day3/input.txt");
  // const result = day3.day3(input);
  // expect(result).toBe(13448);
});

