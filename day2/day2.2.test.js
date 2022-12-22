const day = require("./day2.2");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day2/example.txt");
  const result = day2(input);
  expect(result).toBe(45000);
});

test("should match final input", () => {
  const input = readFile("./day2/input.txt");
  const result = day2(input);
  expect(result).toBe(198041);
});
