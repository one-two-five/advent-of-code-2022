const day2 = require("./day2.2");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day2/example.txt");
  const result = day2.day2(input);
  expect(result).toBe(12);
});

test("should match final input", () => {
  const input = readFile("./day2/input.txt");
  const result = day2.day2(input);
  expect(result).toBe(13448);
});

describe('calculateScore', () => {
  test('should win', () => {
    expect(day2.calculateScore('C','X')).toBe(7)
    expect(day2.calculateScore('A','Y')).toBe(8)
    expect(day2.calculateScore('B','Z')).toBe(9)
  });
  test('should draw', () => {
    expect(day2.calculateScore('A','X')).toBe(4)
    expect(day2.calculateScore('B','Y')).toBe(5)
    expect(day2.calculateScore('C','Z')).toBe(6)
  });
  test('should lose', () => {
    expect(day2.calculateScore('B','X')).toBe(1)
    expect(day2.calculateScore('C','Y')).toBe(2)
    expect(day2.calculateScore('A','Z')).toBe(3)
  });
});

describe('getShape', () => {
  test('should lose', () => {
    expect(day2.getShape('A','X')).toBe('Z')
    expect(day2.getShape('B','X')).toBe('X')
    expect(day2.getShape('C','X')).toBe('Y')
  });
  test('should draw', () => {
    expect(day2.getShape('A','Y')).toBe('X')
    expect(day2.getShape('B','Y')).toBe('Y')
    expect(day2.getShape('C','Y')).toBe('Z')
  });
  test('should win', () => {
    expect(day2.getShape('A','Z')).toBe('Y')
    expect(day2.getShape('B','Z')).toBe('Z')
    expect(day2.getShape('C','Z')).toBe('X')
  });
});