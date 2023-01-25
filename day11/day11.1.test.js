const { day11, transformInput, handleMonkeyTurn } = require("./day11.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day11/example.txt");
  const result = day11(input);
  expect(result).toBe(0);
});

test("should match final input", () => {
  const input = readFile("./day11/input.txt");
  // const result = day11(input);
  // expect(result).toBe(14760);
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
    const expected = [3, [74], ["+", "3"], 17, 0, 1, 0];
    expect(transformInput(monkey, 3)).toStrictEqual(expected);
  });
});

describe("handleMonkeyTurn", () => {
  test("should process monkey values and update array", () => {
    const monkeyArr = [
      [0, [74, 35], ["*", "3"], 2, 1, 2, 0],
      [1, [], ["-", "3"], 17, 0, 1, 0],
      [2, [], ["-", "3"], 18, 0, 1, 0],
    ];
    const expectedArr = [
      [0, [], ["*", "3"], 2, 1, 2, 0],
      [1, [74], ["-", "3"], 17, 0, 1, 0],
      [2, [35], ["-", "3"], 18, 0, 1, 0],
    ];
    const monkey = monkeyArr[0];
    const updatedArr = handleMonkeyTurn(monkey, 0, monkeyArr)
    expect(updatedArr).toStrictEqual(expectedArr)
  });

  test("should return original array if money has no values", () => {
    const monkeyArr = [
      [0, [], ["+", "3"], 17, 0, 1, 0],
      [1, [], ["-", "3"], 17, 0, 1, 0],
    ];
    const monkey = monkeyArr[0];
    const updatedArr = handleMonkeyTurn(monkey, 0, monkeyArr);
    expect(updatedArr).toStrictEqual(monkeyArr);
  });
});

describe('handleOperation', () => {
  test('should apply +', () => {
    
  });
  test('should apply -', () => {
    
  });
  test('should apply *', () => {
    
  });
  test('should apply /', () => {
    
  });
  test('should handle operation if both params are old', () => {
    
  });
});