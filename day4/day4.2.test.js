const {day4, isOverlapping}= require("./day4.2");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day4/example.txt");
  const result = day4(input);
  expect(result).toBe(4);
});

test("should match final input", () => {
  const input = readFile("./day4/input.txt");
  const result = day4(input);
  expect(result).toBe(952);
});

describe('isOverlapping', () => {
  test('should return true if digits in arrays overlap', () => {
    expect(isOverlapping([2,2],[2,6])).toBe(true)
    expect(isOverlapping([3,4],[2,5])).toBe(true)
    expect(isOverlapping([2,5],[3,4])).toBe(true)
    expect(isOverlapping([5,5],[5,5])).toBe(true)
    expect(isOverlapping([1,6],[5,6])).toBe(true)
    expect(isOverlapping([24,47],[23,66])).toBe(true)
    expect(isOverlapping([78,88],[79,87])).toBe(true)
    expect(isOverlapping([27,77],[27,77])).toBe(true)
    expect(isOverlapping([6,71],[7,71])).toBe(true)
    expect(isOverlapping([3,98],[3,99])).toBe(true)
    expect(isOverlapping([19,19],[18,86])).toBe(true)
    expect(isOverlapping([33,38],[32,38])).toBe(true)
    expect(isOverlapping([5,91],[3,92])).toBe(true)
    expect(isOverlapping([1,2],[2,6])).toBe(true)
    expect(isOverlapping([3,8],[2,5])).toBe(true)
    expect(isOverlapping([2,5],[3,8])).toBe(true)
    expect(isOverlapping([40,48],[47,92])).toBe(true)
    expect(isOverlapping([12,99],[5,13])).toBe(true)
    expect(isOverlapping([27,77],[28,78])).toBe(true)
    expect(isOverlapping([11,58],[10,21])).toBe(true)
    expect(isOverlapping([3,5],[4,99])).toBe(true)
    expect(isOverlapping([4,5],[5,5])).toBe(true)
    expect(isOverlapping([5,5],[5,6])).toBe(true)
  });
  test('should return false if digits in arrays do not overlap', () => {
    expect(isOverlapping([99,99],[5,29])).toBe(false)
    expect(isOverlapping([2,2],[10,95])).toBe(false)
    expect(isOverlapping([1,1],[2,2])).toBe(false)
    expect(isOverlapping([2,2],[1,1])).toBe(false)
    expect(isOverlapping([5,5],[6,8])).toBe(false)
    expect(isOverlapping([1,10],[11,20])).toBe(false)
    expect(isOverlapping([11,20],[1,10])).toBe(false)
  });
});