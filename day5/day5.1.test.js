const { day5 }= require("./day5.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day5/example.txt");
  const result = day5(input);
  expect(result).toBe('CMZ');
});

test("should match final input", () => {
  // const input = readFile("./day4/input.txt");
  // const result = day4(input);
  // expect(result).toBe(595);
});