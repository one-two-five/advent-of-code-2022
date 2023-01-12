const { day8, fillArray, setTreeVisibleRow, setTreeVisibleCol } = require("./day8.1");
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

describe('setTreeVisibleRow', () => {
  test('should set visible', () => {
    const arr = [[1,2,3,2,1]]
    const grid = [[0,0,0,0,0]]
    const expected = [[0,0,1,0,0]]
    expect(setTreeVisibleRow(arr, grid, 0, 2)).toStrictEqual(expected)
  });

  test('should not set visible - lower', () => {
    const arr = [[3,2,3,2,1]]
    const grid = [[0,0,0,0,0]]
    const expected = [[0,0,0,0,0]]
    expect(setTreeVisibleRow(arr, grid, 0, 1)).toStrictEqual(expected)
  });

  test('should not set visible - equal', () => {
    const arr = [[3,3,3,2,1]]
    const grid = [[0,0,0,0,0]]
    const expected = [[0,0,0,0,0]]
    expect(setTreeVisibleRow(arr, grid, 0, 1)).toStrictEqual(expected)
  });
});

describe('setTreeVisibleCol', () => {
  test('should set visible', () => {
    const arr = [[1],[2],[3],[2],[1]]
    const grid = [[0],[0],[0],[0],[0]]
    const expected = [[0],[0],[1],[0],[0]]
    expect(setTreeVisibleCol(arr, grid, 2, 0)).toStrictEqual(expected)
  });

  test('should not set visible - lower', () => {
    const arr = [[3],[2],[3],[2],[1]]
    const grid = [[0],[0],[0],[0],[0]]
    const expected = [[0],[0],[0],[0],[0]]
    expect(setTreeVisibleCol(arr, grid, 1, 0)).toStrictEqual(expected)
  });

  test('should not set visible - equal', () => {
    const arr = [[3],[3],[3],[2],[1]]
    const grid = [[0],[0],[0],[0],[0]]
    const expected = [[0],[0],[0],[0],[0]]
    expect(setTreeVisibleCol(arr, grid, 1, 0)).toStrictEqual(expected)
  });
});
