const { day8, fillArray, countVisibleTrees} = require("./day8.2");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day8/example.txt");
  const result = day8(input);
  expect(result).toBe(8);
});

test("should match final input", () => {
  const input = readFile("./day8/input.txt");
  const result = day8(input);
  expect(result).toBe(595080);
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

describe('countVisibleTrees', () => {
  test('should count 2 left and right', () => {
    const row = [1,2,3,2,1]
    expect(countVisibleTrees(row, 2, 3)).toStrictEqual([2,2]);
  });

  test('should count 2 left and 1 right', () => {
    const row = [1,2,3,4,5]
    expect(countVisibleTrees(row, 2, 3)).toStrictEqual([2,1]);
  });

  test('should count 1 left and right when height is lower', () => {
    const row = [3,2,3,2,1]
    expect(countVisibleTrees(row, 1, 2)).toStrictEqual([1,1]);
  });

  test('should count 1 left and right when hight is lower when height is equal', () => {
    const row = [3,3,3,2,1]
    expect(countVisibleTrees(row, 1, 3)).toStrictEqual([1,1]);
  });

  test('should count 0 left and right 4 when at left edge', () => {
    const row = [5,3,3,2,1]
    expect(countVisibleTrees(row, 0, 5)).toStrictEqual([0,4]);
  });

  test('should count 0 left and right 4 when at left edge', () => {
    const row = [2,3,3,2,5]
    expect(countVisibleTrees(row, 4, 5)).toStrictEqual([4,0]);
  });
});

