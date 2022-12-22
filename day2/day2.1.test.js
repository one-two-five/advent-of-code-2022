const day2 = require("./day2.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day2/example.txt");
  const result = day2(input);
  expect(result).toBe(24000);
});

test("should match final input", () => {
  const input = readFile("./day2/input.txt");
  const result = day2(input);
  expect(result).toBe(68787);
});
