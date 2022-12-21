const day1 = require("./day1");

describe("day1", () => {
  test("example", () => {
    expect(day1("./One-first/example.txt")).toBe(7);
  });

  test("input", () => {
    const output = day1("./One-first/input.txt");
    expect(output).toBe(1752);
  });
});
