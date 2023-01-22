const { day10, captureSignal } = require("./day10.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day10/example.txt");
  const result = day10(input);
  expect(result).toBe(13140);
});

test("should match final input", () => {
  const input = readFile("./day10/input.txt");
  const result = day10(input);
  expect(result).toBe(14760);
});

describe('captureSignal', () => {
  test('should capture signal values', () => {
    expect(captureSignal(20,2,[])).toStrictEqual([40])
    expect(captureSignal(60,2,[])).toStrictEqual([120])
    expect(captureSignal(100,2,[])).toStrictEqual([200])
    expect(captureSignal(140,2,[])).toStrictEqual([280])
    expect(captureSignal(180,2,[])).toStrictEqual([360])
    expect(captureSignal(220,2,[])).toStrictEqual([440])
  });
  test('should not capture signal values', () => {
    expect(captureSignal(19,2,[])).toStrictEqual([])
    expect(captureSignal(21,2,[])).toStrictEqual([])
    expect(captureSignal(70,2,[])).toStrictEqual([])
    expect(captureSignal(101,2,[])).toStrictEqual([])
    expect(captureSignal(203,2,[])).toStrictEqual([])
    expect(captureSignal(225,2,[])).toStrictEqual([])
  });
});