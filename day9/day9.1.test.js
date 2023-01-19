const { day9, moveHead, moveTail, findUnique } = require("./day9.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day9/example.txt");
  const result = day9(input);
  expect(result).toBe(13);
});

test("should match final input", () => {
  const input = readFile("./day9/input.txt");
  const result = day9(input);
  expect(result).toBe(6271);
});

describe("moveHead", () => {
  test("head should move in specified direction", () => {
    expect(moveHead({ row: 5, col: 5 }, ["U", 2])).toStrictEqual([{
      row: 6,
      col: 5,
    },{
      row: 7,
      col: 5,
    }]);
    expect(moveHead({ row: 5, col: 5 }, ["D", 2])).toStrictEqual([{
      row: 4,
      col: 5,
    },{
      row: 3,
      col: 5,
    }]);
    expect(moveHead({ row: 5, col: 5 }, ["L", 2])).toStrictEqual([{
      row: 5,
      col: 4,
    },{
      row: 5,
      col: 3,
    }]);
    expect(moveHead({ row: 5, col: 5 }, ["R", 2])).toStrictEqual([
    {
      row: 5,
      col: 6,
    },
    {
      row: 5,
      col: 7,
    }]);
  });
});

describe("moveTail", () => {
    test('should move up', () => {
      expect(moveTail({ row: 4, col: 5 }, { row: 6, col: 5 })).toStrictEqual({
        row: 5,
        col: 5,
      });
      expect(moveTail({ row: 4, col: 5 }, { row: 5, col: 5 })).toStrictEqual({
        row: 4,
        col: 5,
      });
      expect(moveTail({ row: 4, col: 4 }, { row: 6, col: 5 })).toStrictEqual({
        row: 5,
        col: 5,
      });
      expect(moveTail({ row: 4, col: 6 }, { row: 6, col: 5 })).toStrictEqual({
        row: 5,
        col: 5,
      });
    });
    test('should move down', () => {
      expect(moveTail({ row: 4, col: 5 }, { row: 2, col: 5 })).toStrictEqual({
        row: 3,
        col: 5,
      });
      expect(moveTail({ row: 4, col: 5 }, { row: 3, col: 5 })).toStrictEqual({
        row: 4,
        col: 5,
      });
      expect(moveTail({ row: 4, col: 6 }, { row: 2, col: 5 })).toStrictEqual({
        row: 3,
        col: 5,
      });
      expect(moveTail({ row: 4, col: 4 }, { row: 2, col: 5 })).toStrictEqual({
        row: 3,
        col: 5,
      });
    });
    test('should move right', () => {
      expect(moveTail({ row: 4, col: 5 }, { row: 4, col: 7 })).toStrictEqual({
        row: 4,
        col: 6,
      });
      expect(moveTail({ row: 4, col: 6 }, { row: 4, col: 7 })).toStrictEqual({
        row: 4,
        col: 6,
      });
      expect(moveTail({ row: 3, col: 5 }, { row: 4, col: 7 })).toStrictEqual({
        row: 4,
        col: 6,
      });
      expect(moveTail({ row: 5, col: 5 }, { row: 4, col: 7 })).toStrictEqual({
        row: 4,
        col: 6,
      });
    });
    test('should move left', () => {
      expect(moveTail({ row: 4, col: 4 }, { row: 4, col: 2 })).toStrictEqual({
        row: 4,
        col: 3,
      });
      expect(moveTail({ row: 4, col: 4 }, { row: 4, col: 3 })).toStrictEqual({
        row: 4,
        col: 4,
      });
      expect(moveTail({ row: 5, col: 4 }, { row: 4, col: 2 })).toStrictEqual({
        row: 4,
        col: 3,
      });
      expect(moveTail({ row: 3, col: 4 }, { row: 4, col: 2 })).toStrictEqual({
        row: 4,
        col: 3,
      });
    });
    test('should not move', () => {
      expect(moveTail({ row: 5, col: 5 }, { row: 5, col: 5 })).toStrictEqual({
        row: 5,
        col: 5,
      });
    });
});

describe('findUnique', () => {
  test('should return unique string values', () => {
    expect(findUnique([{row: 1, col: 1}, {row: 1, col: 1}, {row: 1, col: 1}, {row: 2, col: 2}])).toStrictEqual(['1:1', '2:2'])
  });
});
