const { day10, updatePixels } = require("./day10.2");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day10/example.txt");
  const result = day10(input);
  // see concole.table
});

test("should match final input", () => {
  const input = readFile("./day10/input.txt");
  const result = day10(input);
  // see concole.table
});

describe("updatePixels", () => {
  test("should draw pixel when signal is within the sprite ", () => {
    expect(updatePixels(1, 1)).toStrictEqual([0, 0]);
    expect(updatePixels(2, 1)).toStrictEqual([0, 1]);
    expect(updatePixels(4, 3)).toStrictEqual([0, 3]);
    expect(updatePixels(39, 39)).toStrictEqual([0, 38]);
    expect(updatePixels(40, 40)).toStrictEqual([0, 39]);
    expect(updatePixels(41, 1)).toStrictEqual([1, 0]);
    expect(updatePixels(61, 20)).toStrictEqual([1, 20]);
    expect(updatePixels(63, 22)).toStrictEqual([1, 22]);
  });
  test("should not draw pixel when signal is within the sprite ", () => {
    expect(updatePixels(1, 3)).toStrictEqual(null);
    expect(updatePixels(40, 43)).toStrictEqual(null);
    expect(updatePixels(200, 1)).toStrictEqual(null);
  });
});
