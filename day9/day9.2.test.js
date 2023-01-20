const { day9, moveHead, moveTail, findUnique } = require("./day9.2");
const readFile = require("../utils/readFile");

test("should match example input 1", () => {
  const input = readFile("./day9/example.txt");
  const result = day9(input);
  expect(result).toBe(1);
});

test("should match example input 2", () => {
  const input = readFile("./day9/example2.txt");
  const result = day9(input);
  expect(result).toBe(36);
});

test("should match final input", () => {
  const input = readFile("./day9/input.txt");
  const result = day9(input);
  expect(result).toBe(2458);
});

describe("moveHead", () => {
  test("head should move in specified direction", () => {
    expect(moveHead({ row: 5, col: 5 }, ["U", 2])).toStrictEqual([
      {
        row: 6,
        col: 5,
      },
      {
        row: 7,
        col: 5,
      },
    ]);
    expect(moveHead({ row: 5, col: 5 }, ["D", 2])).toStrictEqual([
      {
        row: 4,
        col: 5,
      },
      {
        row: 3,
        col: 5,
      },
    ]);
    expect(moveHead({ row: 5, col: 5 }, ["L", 2])).toStrictEqual([
      {
        row: 5,
        col: 4,
      },
      {
        row: 5,
        col: 3,
      },
    ]);
    expect(moveHead({ row: 5, col: 5 }, ["R", 2])).toStrictEqual([
      {
        row: 5,
        col: 6,
      },
      {
        row: 5,
        col: 7,
      },
    ]);
  });
});

describe("moveTail", () => {
  test("should move up", () => {
    expect(
      moveTail(
        [
          { row: 8, col: 10 },
          { row: 7, col: 10 },
          { row: 6, col: 10 },
        ],
        { row: 10, col: 10 }
      )
    ).toStrictEqual([
      {
        row: 9,
        col: 10,
      },
      {
        row: 8,
        col: 10,
      },
      {
        row: 7,
        col: 10,
      },
    ]);
    expect(
      moveTail(
        [
          { row: 8, col: 9 },
          { row: 7, col: 9 },
          { row: 6, col: 9 },
        ],
        { row: 10, col: 10 }
      )
    ).toStrictEqual([
      {
        row: 9,
        col: 10,
      },
      {
        row: 8,
        col: 10,
      },
      {
        row: 7,
        col: 10,
      },
    ]);
    expect(
      moveTail(
        [
          { row: 8, col: 11 },
          { row: 7, col: 11 },
          { row: 6, col: 9 },
        ],
        { row: 10, col: 10 }
      )
    ).toStrictEqual([
      {
        row: 9,
        col: 10,
      },
      {
        row: 8,
        col: 10,
      },
      {
        row: 7,
        col: 10,
      },
    ]);
  });
  test("should move down", () => {
    expect(
      moveTail(
        [
          { row: 4, col: 5 },
          { row: 5, col: 5 },
        ],
        { row: 2, col: 5 }
      )
    ).toStrictEqual([
      {
        row: 3,
        col: 5,
      },
      {
        row: 4,
        col: 5,
      },
    ]);
    expect(
      moveTail(
        [
          { row: 4, col: 5 },
          { row: 5, col: 5 },
        ],
        { row: 2, col: 4 }
      )
    ).toStrictEqual([
      {
        row: 3,
        col: 4,
      },
      {
        row: 4,
        col: 4,
      },
    ]);
    expect(
      moveTail(
        [
          { row: 4, col: 5 },
          { row: 5, col: 5 },
        ],
        { row: 2, col: 6 }
      )
    ).toStrictEqual([
      {
        row: 3,
        col: 6,
      },
      {
        row: 4,
        col: 6,
      },
    ]);
  });
  test("should move right", () => {
    expect(
      moveTail(
        [
          { row: 4, col: 5 },
          { row: 4, col: 4 },
        ],
        { row: 4, col: 7 }
      )
    ).toStrictEqual([
      {
        row: 4,
        col: 6,
      },
      {
        row: 4,
        col: 5,
      },
    ]);
    expect(
      moveTail(
        [
          { row: 4, col: 5 },
          { row: 4, col: 4 },
        ],
        { row: 3, col: 7 }
      )
    ).toStrictEqual([
      {
        row: 3,
        col: 6,
      },
      {
        row: 3,
        col: 5,
      },
    ]);
    expect(
      moveTail(
        [
          { row: 4, col: 5 },
          { row: 4, col: 4 },
        ],
        { row: 5, col: 7 }
      )
    ).toStrictEqual([
      {
        row: 5,
        col: 6,
      },
      {
        row: 5,
        col: 5,
      },
    ]);
  });
  test("should move left", () => {
    expect(
      moveTail(
        [
          { row: 4, col: 4 },
          { row: 4, col: 5 },
        ],
        { row: 4, col: 2 }
      )
    ).toStrictEqual([
      {
        row: 4,
        col: 3,
      },
      {
        row: 4,
        col: 4,
      },
    ]);
    expect(
      moveTail(
        [
          { row: 4, col: 4 },
          { row: 4, col: 5 },
        ],
        { row: 3, col: 2 }
      )
    ).toStrictEqual([
      {
        row: 3,
        col: 3,
      },
      {
        row: 3,
        col: 4,
      },
    ]);
    expect(
      moveTail(
        [
          { row: 4, col: 4 },
          { row: 4, col: 5 },
        ],
        { row: 1, col: 2 }
      )
    ).toStrictEqual([
      {
        row: 1,
        col: 3,
      },
      {
        row: 1,
        col: 4,
      },
    ]);
  });
  test("should not move", () => {
    expect(
      moveTail(
        [
          { row: 5, col: 5 },
          { row: 4, col: 5 },
        ],
        { row: 5, col: 5 }
      )
    ).toStrictEqual([
      { row: 5, col: 5 },
      { row: 4, col: 5 },
    ]);
    expect(
      moveTail(
        [
          { row: 5, col: 5 },
          { row: 4, col: 5 },
        ],
        { row: 6, col: 5 }
      )
    ).toStrictEqual([
      { row: 5, col: 5 },
      { row: 4, col: 5 },
    ]);
    expect(
      moveTail(
        [
          { row: 5, col: 6 },
          { row: 5, col: 7 },
        ],
        { row: 5, col: 5 }
      )
    ).toStrictEqual([
      { row: 5, col: 6 },
      { row: 5, col: 7 },
    ]);
  });
});

describe("findUnique", () => {
  test("should return unique string values", () => {
    expect(
      findUnique([
        { row: 1, col: 1 },
        { row: 1, col: 1 },
        { row: 1, col: 1 },
        { row: 2, col: 2 },
      ])
    ).toStrictEqual(["1:1", "2:2"]);
  });
});
