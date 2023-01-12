const { day8, countTreesCol, countTreesRow, fillArray } = require("./day8.1");
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
  test("should count highest", () => {
    const trees = [[1,2,3,4,5,1,2,3,4,8,4,2,1]];
    expect(countTreesRow(trees, 0, false)).toBe(5);
    expect(countTreesRow(trees, 0, true)).toBe(4);
  });
  test("should count highest when trees are same height", () => {
    const trees = [[1,2,3,4,8,8,8,8,8,8,4,2,1]];
    expect(countTreesRow(trees, 0, false)).toBe(5);
    expect(countTreesRow(trees, 0, true)).toBe(4);
  });
  test("should only count first tree", () => {
    const trees = [[9,2,3,4,8,8,8,8,8,8,4,2,9]];
    expect(countTreesRow(trees, 0, false)).toBe(1);
    expect(countTreesRow(trees, 0, true)).toBe(1);
  });
});

describe("countTreesCol", () => {
  test("should count highest", () => {
    const trees = [[1], [3], [9], [5], [5], [3], [9], [6], [2], [1]];
    expect(countTreesCol(trees, 0, false)).toBe(3);
    expect(countTreesCol(trees, 0, true)).toBe(4);
  });
  test("should count highest when trees are same height", () => {
    const trees = [[1], [3], [9], [9], [9], [9], [9], [6], [2], [1]];
    expect(countTreesCol(trees, 0, false)).toBe(3);
    expect(countTreesCol(trees, 0, true)).toBe(4);
  });
  test("should only count first tree", () => {
    const trees = [[9], [3], [8], [8], [8], [8], [8], [6], [2], [9]];
    expect(countTreesCol(trees, 0, false)).toBe(1);
    expect(countTreesCol(trees, 0, true)).toBe(1);
  });
});

describe('fillArray', () => {
  test('fill array with 0s', () => {
    const arr = [[1,2,3,4,5],
                  [1,2,3,4,5],
                  [1,2,3,4,5],
                  [1,2,3,4,5]]
    const expected = [
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0]]
    expect(fillArray(arr)).toStrictEqual(expected)
  });
});
