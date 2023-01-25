const { day11, transformInput } = require("./day11.1");
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
    const expected = [ 3, [ 74 ], [ '+', '3' ], 17, 0, 1 ]
    expect(transformInput(monkey, 3)).toStrictEqual(expected)
  });
});
