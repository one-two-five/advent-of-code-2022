const { day8, fillArray, isTreeVisible} = require("./day8.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day8/example.txt");
  const result = day8(input);
  expect(result).toBe(21);
});

test("should match final input", () => {
  const input = readFile("./day8/input.txt");
  const result = day8(input);
  expect(result).toBe(1543);
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

describe('isTreeVisible', () => {
  test('should set visible', () => {
    const row = [1,2,3,2,1]
    expect(isTreeVisible(row, 2, 3)).toBe(true);
  });

  test('should not set visible - lower', () => {
    const row = [3,2,3,2,1]
    expect(isTreeVisible(row, 1, 2)).toBe(false);
  });

  test('should not set visible - equal', () => {
    const row = [3,3,3,2,1]
    expect(isTreeVisible(row, 1, 3)).toBe(false);
  });
});

