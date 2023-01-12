const { day8, fillArray } = require("./day8.1");
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
