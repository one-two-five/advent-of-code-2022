const { day8, countTreesCol, countTreesRow } = require("./day8.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day8/example.txt");
  const result = day8(input);
  expect(result).toBe(21);
});

test("should match final input", () => {
  const input = readFile("./day8/input.txt");
  // const result = day8(input);
  // expect(result).toBe(0);
});

describe("countTreesRow", () => {
  const trees = [[1,2,3,4,5,1,2,3,4,8,4,2,1]];
  test("should count highest from left to right", () => {
    expect(countTreesRow(trees, 0, false)).toBe(5);
  });
  test("should count highest from right to left", () => {
    expect(countTreesRow(trees, 0, true)).toBe(4);
  });
});

describe("countTreesCol", () => {
  const trees = [[1], [3], [9], [5], [5], [3], [9], [6], [2], [1]];
  test("should count highest from top to bottom", () => {
    expect(countTreesCol(trees, 0, false)).toBe(3);
  });
  test("should count highest from bottom to top", () => {
    expect(countTreesCol(trees, 0, true)).toBe(4);
  });
});
