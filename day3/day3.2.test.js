const day3 = require("./day3.2");
const readFile = require("../utils/readFile");


test("should match example input", () => {
  const input = readFile("./day3/example.txt");
  const result = day3.day3(input);
  expect(result).toBe(70);
});

test("should match final input", () => {
  const input = readFile("./day3/input.txt");
  const result = day3.day3(input);
  expect(result).toBe(2425);
});

describe("getScore", () => {
  test("should get correct priority", () => {
    const charaters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    charaters.forEach((char, index) => {
      expect(day3.getScore(char)).toBe(index + 1);
    });
  });
});

describe("splitString", () => {
  test("should return string in two halfs if even length", () => {
    const str = "abcdeABCDE";
    expect(day3.splitString(str)).toEqual([
      ["a", "b", "c", "d", "e"],
      ["A", "B", "C", "D", "E"],
    ]);
  });
  test("should return empty array if length is odd", () => {
    const str = "abcdeABCD";
    expect(day3.splitString(str)).toStrictEqual([]);
  });
});

describe("findDuplicateChar", () => {
  test("should find duplicate in 2 strings", () => {
    expect(
      day3.findDuplicateChar(["a", "b", "c", "d"], ["a", "e", "f", "g"], ['a','z','x','y'])
    ).toBe("a");
  });
  test("should return empty string if no duplicate", () => {
    expect(
      day3.findDuplicateChar(["a", "b", "c", "d"], ["z", "e", "f", "g"],['h','i','x','y'])
    ).toBe("");
  });
});

describe("chunkArray", () => {
  test("should chunk array for size", () => {
    expect(day3.chunkArray([1, 1, 1, 1, 1, 1, 1, 1, 1], 3)).toStrictEqual([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]);
  });
});
