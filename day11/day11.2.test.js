const {
  day11,
  transformInput,
  handleMonkeyTurn,
  handleOperation,
} = require("./day11.2");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day11/example.txt");
  const result = day11(input);
  expect(result).toBe(2713310158);
});

test("should match final input", () => {
  const input = readFile("./day11/input.txt");
  const result = day11(input);
  expect(result).toBe(23641658401);
});

describe("transformInput", () => {
  test("transforms input", () => {
    const monkey = [
      "Monkey 3:",
      "  Starting items: 74",
      "  Operation: new = old + 3",
      "  Test: divisible by 17",
      "    If true: throw to monkey 0",
      "    If false: throw to monkey 1",
    ];
    const expected = [3, [74n], ["+", 3n], 17n, 0n, 1n, 0];
    expect(transformInput(monkey, 3)).toStrictEqual(expected);
  });
});

describe("handleMonkeyTurn", () => {
  test("should process monkey values and update array 1", () => {
    const monkeyArr = [
      [0, [74n, 35n], ["*", 3n], 2n, 1n, 2n, 0],
      [1, [], ["-", 3n], 2n, 0n, 1n, 0],
      [2, [], ["-", 3n], 2n, 0n, 1n, 0],
    ];
    const expectedArr = [
      [0, [], ["*", 3n], 2n, 1n, 2n, 2],
      [1, [6n], ["-", 3n], 2n, 0n, 1n, 0],
      [2, [1n], ["-", 3n], 2n, 0n, 1n, 0],
    ];
    const monkey = monkeyArr[0];
    const lcm = 2n * 2n * 2n
    const updatedArr = handleMonkeyTurn(monkey, 0, monkeyArr, lcm);
    expect(updatedArr).toStrictEqual(expectedArr);
  });

  test("should process monkey values and update array 2", () => {
    const monkeyArr = [
      [0n, [74n, 35n], ["-", 4n], 2n, 1n, 2n, 0],
      [1n, [], ["-", 3n], 2n, 0n, 1n, 0],
      [2n, [], ["-", 3n], 2n, 0n, 1n, 0],
    ];
    const expectedArr = [
      [0n, [], ["-", 4n], 2n, 1n, 2n, 2],
      [1n, [6n], ["-", 3n], 2n, 0n, 1n, 0],
      [2n, [7n], ["-", 3n], 2n, 0n, 1n, 0],
    ];
    const lcm = 2n * 2n * 2n
    const monkey = monkeyArr[0];
    const updatedArr = handleMonkeyTurn(monkey, 0, monkeyArr, lcm);
    expect(updatedArr).toStrictEqual(expectedArr);
  });

  test("should return original array if money has no values", () => {
    const monkeyArr = [
      [0n, [], ["+", 3n], 17n, 0n, 1n, 0n],
      [1n, [], ["-", 3n], 17n, 0n, 1n, 0n],
    ];
    const monkey = monkeyArr[0];
    const updatedArr = handleMonkeyTurn(monkey, 0, monkeyArr);
    expect(updatedArr).toStrictEqual(monkeyArr);
  });
});

describe("handleOperation", () => {
  test("should apply +", () => {
    expect(handleOperation(5, "+", 10)).toBe(15);
    expect(handleOperation(5, "+", "old")).toBe(10);
  });
  test("should apply -", () => {
    expect(handleOperation(5, "-", 2)).toBe(3);
    expect(handleOperation(5, "-", "old")).toBe(0);
  });
  test("should apply *", () => {
    expect(handleOperation(5, "*", 6)).toBe(30);
    expect(handleOperation(5, "*", "old")).toBe(25);
  });
  test("should apply /", () => {
    expect(handleOperation(8, "/", 2)).toBe(4);
    expect(handleOperation(8, "/", "old")).toBe(1);
  });
});
