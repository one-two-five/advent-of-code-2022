const {day4, isContained}= require("./day4.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day4/example.txt");
  const result = day4(input);
  expect(result).toBe(2);
});

test("should match final input", () => {
  const input = readFile("./day4/input.txt");
  const result = day4(input);
  expect(result).toBe(595);
});

describe('isContained', () => {
  test('should return true if digits contained by other array', () => {
    expect(isContained([2,2],[2,6])).toBe(true)
    expect(isContained([3,4],[2,5])).toBe(true)
    expect(isContained([2,5],[3,4])).toBe(true)
    expect(isContained([5,5],[5,5])).toBe(true)
    expect(isContained([1,6],[5,6])).toBe(true)
    expect(isContained([24,47],[23,66])).toBe(true)
    expect(isContained([78,88],[79,87])).toBe(true)
    expect(isContained([27,77],[27,77])).toBe(true)
    expect(isContained([6,71],[7,71])).toBe(true)
    expect(isContained([3,98],[3,99])).toBe(true)
    expect(isContained([19,19],[18,86])).toBe(true)
    expect(isContained([33,38],[32,38])).toBe(true)
    expect(isContained([5,91],[3,92])).toBe(true)
  });
  test('should return false if digits not contained by other array', () => {
    expect(isContained([1,2],[2,6])).toBe(false)
    expect(isContained([3,8],[2,5])).toBe(false)
    expect(isContained([2,5],[3,8])).toBe(false)
    expect(isContained([5,5],[6,8])).toBe(false)
    expect(isContained([1,1],[2,2])).toBe(false)
    expect(isContained([40,48],[47,92])).toBe(false)
    expect(isContained([2,2],[10,95])).toBe(false)
    expect(isContained([12,99],[5,13])).toBe(false)
    expect(isContained([27,77],[28,78])).toBe(false)
    expect(isContained([11,58],[10,21])).toBe(false)
    expect(isContained([99,99],[5,29])).toBe(false)
    expect(isContained([3,5],[4,99])).toBe(false)
  });
});