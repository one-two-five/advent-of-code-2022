const { day5, processInput, moveCrates, getTopCrates } = require("./day5.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day5/example.txt");
  const result = day5(input);
  expect(result).toBe("CMZ");
});

test("should match final input", () => {
  // const input = readFile("./day4/input.txt");
  // const result = day4(input);
  // expect(result).toBe(595);
});

describe("processInput", () => {
  test("should parse input", () => {
    const input = readFile("./day5/example.txt");
    const expectedLetters = [
      ["[Z]", "[M]", "[P]"],
      ["[N]", "[C]", ""],
      ["", "[D]", ""],
    ];
    const expectedNumbers = [1, 2, 3];
    const expectedInstructions = [
      [["1"], ["2", "1"]],
      [["3"], ["1", "3"]],
      [["2"], ["2", "1"]],
      [["1"], ["1", "2"]],
    ];

    const [letters, numbers, instructions] = processInput(input);
    expect(letters).toStrictEqual(expectedLetters);
    expect(numbers).toStrictEqual(expectedNumbers);
    expect(instructions).toStrictEqual(expectedInstructions);
  });
});

describe("moveCrates", () => {
  let state = [
    ["[Z]", "[M]", "[P]"],
    ["[N]", "[C]", ""],
    ["", "[D]", ""],
  ];

  test("should move 1 from 2 to 1", () => {
    const instruction = [1, [2, 1]];
    const expectedState = [
      ["[Z]", "[M]", "[P]"],
      ["[N]", "[C]", ""],
      ["[D]", "", ""],
    ];
    expect(moveCrates(state, instruction)).toStrictEqual(expectedState);
  });

  test("should move 3 from 1 to 3", () => {
    const instruction = [3, [1, 3]];
    const expectedState = [
      ["", "[M]", "[P]"],
      ["", "[C]", "[D]"],
      ["", "", "[N]"],
      ["", "", "[Z]"],
    ];
    expect(moveCrates(state, instruction)).toStrictEqual(expectedState);
  });

  test("should move 2 from 2 to 1", () => {
    const instruction = [2, [2, 1]];
    const expectedState = [
      ["[C]", "", "[P]"],
      ["[M]", "", "[D]"],
      ["", "", "[N]"],
      ["", "", "[Z]"],
    ];
    expect(moveCrates(state, instruction)).toStrictEqual(expectedState)
  });

  test("should move 1 from 1 to 2", () => {
    const instruction = [1, [1, 2]];
    const expectedState = [
      ["[C]", "[M]", "[P]"],
      ["", "", "[D]"],
      ["", "", "[N]"],
      ["", "", "[Z]"],
    ];
    expect(moveCrates(state, instruction)).toStrictEqual(expectedState)
  });
});

describe('getTopCrates', () => {
  test('should ', () => {
    const state = [
      ["[C]", "[M]", "[P]"],
      ["", "", "[D]"],
      ["", "", "[N]"],
      ["", "", "[Z]"],
    ];
    expect(getTopCrates(state)).toBe('CMZ')
  });
});