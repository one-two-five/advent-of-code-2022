const {
  day5,
  processInput,
  moveCrates,
  getTopCrates,
  getTopCrateIndex,
  moveCrate,
} = require("./day5.2");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day5/example.txt");
  const result = day5(input);
  expect(result).toBe("MCD");
});

test("should match final input", () => {
  const input = readFile("./day5/input.txt");
  const result = day5(input);
  // expect(result).toBe("ZWHVFWQWW");
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
      [[1], [2, 1]],
      [[3], [1, 3]],
      [[2], [2, 1]],
      [[1], [1, 2]],
    ];

    const [letters, numbers, instructions] = processInput(input);
    expect(letters).toStrictEqual(expectedLetters);
    expect(numbers).toStrictEqual(expectedNumbers);
    expect(instructions).toStrictEqual(expectedInstructions);
  });
});

describe("moveCrates", () => {
  test("should move 1 from 2 to 1", () => {
    const instruction = [1, [2, 1]];
    let initialState = [
      ["[Z]", "[M]", "[P]"],
      ["[N]", "[C]", ""],
      ["", "[D]", ""],
    ];
    const expectedState = [
      ["[Z]", "[M]", "[P]"],
      ["[N]", "[C]", ""],
      ["[D]", "", ""],
    ];
    expect(moveCrates(initialState, instruction)).toStrictEqual(expectedState);
  });

  test("should move 3 from 1 to 3", () => {
    const instruction = [3, [1, 3]];
    const initialState = [
      ["[Z]", "[M]", "[P]"],
      ["[N]", "[C]", ""],
      ["[D]", "", ""],
    ];
    const expectedState = [
      ["", "[M]", "[P]"],
      ["", "[C]", "[Z]"],
      ["", "", "[N]"],
      ["", "", "[D]"],
    ];
    expect(moveCrates(initialState, instruction)).toStrictEqual(expectedState);
  });

  test("should move 2 from 2 to 1", () => {
    const instruction = [2, [2, 1]];
    const initialState = [
      ["", "[M]", "[P]"],
      ["", "[C]", "[D]"],
      ["", "", "[N]"],
      ["", "", "[Z]"],
    ];
    const expectedState = [
      ["[M]", "", "[P]"],
      ["[C]", "", "[D]"],
      ["", "", "[N]"],
      ["", "", "[Z]"],
    ];
    expect(moveCrates(initialState, instruction)).toStrictEqual(expectedState);
  });

  test("should move 1 from 1 to 2", () => {
    const instruction = [1, [1, 2]];
    const initialState = [
      ["[C]", "", "[P]"],
      ["[M]", "", "[D]"],
      ["", "", "[N]"],
      ["", "", "[Z]"],
    ];
    const expectedState = [
      ["[C]", "[M]", "[P]"],
      ["", "", "[D]"],
      ["", "", "[N]"],
      ["", "", "[Z]"],
    ];
    expect(moveCrates(initialState, instruction)).toStrictEqual(expectedState);
  });

  test("should move 2 from 1 to 2", () => {
    const instruction = [2, [1, 2]];
    const initialState = [
      ["[C]", "", "[P]"],
      ["[M]", "", "[D]"],
      ["", "", ""],
      ["", "", ""],
    ];
    const expectedState = [
      ["", "[C]", "[P]"],
      ["", "[M]", "[D]"],
      ["", "", ""],
      ["", "", ""],
    ];
    expect(moveCrates(initialState, instruction)).toStrictEqual(expectedState);
  });
  test("should move 4 from 3 to 1", () => {
    const instruction = [4, [3, 1]];
    const initialState = [
      ["[C]", "", "[P]"],
      ["", "", "[D]"],
      ["", "", "[M]"],
      ["", "", "[Z]"],
    ];
    const expectedState = [
      ["[C]", "", ""],
      ["[P]", "", ""],
      ["[D]", "", ""],
      ["[M]", "", ""],
      ["[Z]", "", ""],
    ];
    expect(moveCrates(initialState, instruction)).toStrictEqual(expectedState);
  });
  test("should move 2 from 2 to 1 from input", () => {
    const instruction = [[2], [2, 1]];
    const initialState = [
      ["[Q]", "[V]", "[C]", "[H]", "[P]", "[Q]", "[Z]", "[D]", "[W]"],
      ["[W]", "[B]", "[V]", "[F]", "[G]", "[T]", "[T]", "[T]", "[P]"],
      ["[P]", "[R]", "[S]", "[G]", "[J]", "[J]", "[W]", "[Z]", "[V]"],
      ["[S]", "[W]", "", "", "[B]", "[H]", "[D]", "[C]", "[M]"],
      ["[Z]", "[Q]", "", "", "[Z]", "[W]", "[L]", "[J]", "[B]"],
      ["[R]", "[H]", "", "", "", "[F]", "[V]", "[G]", "[H]"],
      ["[H]", "[F]", "", "", "", "[L]", "[J]", "[H]", "[H]"],
      ["[D]", "", "", "", "", "", "[N]", "[F]", ""],
    ];
    const expectedState = [
      ["[Q]", "[V]", "[C]", "[H]", "[P]", "[Q]", "[Z]", "[D]", "[W]"],
      ["[W]", "[B]", "[V]", "[F]", "[G]", "[T]", "[T]", "[T]", "[P]"],
      ["[P]", "[R]", "[S]", "[G]", "[J]", "[J]", "[W]", "[Z]", "[V]"],
      ["[S]", "[W]", "", "", "[B]", "[H]", "[D]", "[C]", "[M]"],
      ["[Z]", "[Q]", "", "", "[Z]", "[W]", "[L]", "[J]", "[B]"],
      ["[R]", "", "", "", "", "[F]", "[V]", "[G]", "[H]"],
      ["[H]", "", "", "", "", "[L]", "[J]", "[H]", "[H]"],
      ["[D]", "", "", "", "", "", "[N]", "[F]", ""],
      ["[H]", "", "", "", "", "", "", "", ""],
      ["[F]", "", "", "", "", "", "", "", ""],
    ];
    expect(moveCrates(initialState, instruction)).toStrictEqual(expectedState);
  });
});

describe("getTopCrates", () => {
  test("should return top crates as string", () => {
    const state = [
      ["[C]", "[M]", "[P]"],
      ["", "", "[D]"],
      ["", "", "[N]"],
      ["", "", "[Z]"],
    ];
    expect(getTopCrates(state)).toBe("CMZ");
  });
});

describe("getTopCrateIndex", () => {
  let state = [
    ["[Z]", "[M]", "[P]", ""],
    ["[N]", "[C]", "", ""],
    ["", "[D]", "", ""],
  ];

  test("should return top crate for given colum", () => {
    expect(getTopCrateIndex(state, 1)).toBe(1);
    expect(getTopCrateIndex(state, 2)).toBe(2);
    expect(getTopCrateIndex(state, 3)).toBe(0);
  });

  test("should return 0 index if no crate", () => {
    expect(getTopCrateIndex(state, 4)).toBe(-1);
  });
});

// describe("moveCrate", () => {
//   test("should move 1 from 2 to 1", () => {
//     const instruction = [1, [2, 1]];
//     let initialState = [
//       ["[Z]", "[M]", "[P]"],
//       ["[N]", "[C]", ""],
//       ["", "[D]", ""],
//     ];
//     const expectedState = [
//       ["[Z]", "[M]", "[P]"],
//       ["[N]", "[C]", ""],
//       ["[D]", "", ""],
//     ];
//     expect(moveCrate(initialState, instruction)).toStrictEqual(expectedState);
//   });
//   test("should move 1 from 2 to 3", () => {
//     const instruction = [1, [2, 3]];
//     const initialState = [
//       ["[Z]", "[M]", "[P]"],
//       ["[N]", "[C]", ""],
//       ["", "[D]", ""],
//     ];
//     const expectedState = [
//       ["[Z]", "[M]", "[P]"],
//       ["[N]", "[C]", "[D]"],
//       ["", "", ""],
//     ];
//     expect(moveCrate(initialState, instruction)).toStrictEqual(expectedState);
//   });
//   test("should move 1 from 1 to 3", () => {
//     const instruction = [1, [1, 3]];
//     const initialState = [
//       ["[Z]", "[M]", "[P]"],
//       ["[N]", "[C]", ""],
//       ["", "[D]", ""],
//     ];
//     const expectedState = [
//       ["[Z]", "[M]", "[P]"],
//       ["", "[C]", "[N]"],
//       ["", "[D]", ""],
//     ];
//     expect(moveCrate(initialState, instruction)).toStrictEqual(expectedState);
//   });
//   test("should move 1 from 3 to 1", () => {
//     const instruction = [1, [3, 1]];
//     const initialState = [
//       ["[Z]", "[M]", "[P]"],
//       ["[N]", "[C]", ""],
//       ["[D]", "", ""],
//     ];
//     const expectedState = [
//       ["[Z]", "[M]", ""],
//       ["[N]", "[C]", ""],
//       ["[D]", "", ""],
//       ["[P]", "", ""],
//     ];
//     expect(moveCrate(initialState, instruction)).toStrictEqual(expectedState);
//   });
// });