const { day7, handleInstruction } = require("./day7.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day7/example.txt");
  const result = day7(input);
  expect(result).toBe(95437);
});

test("should match final input", () => {
  const input = readFile("./day7/input.txt");
  const result = day7(input);
  expect(result).toBe(1075948);
});

test("should match example 2", () => {
  const input = readFile("./day7/example2.txt");
  const result = day7(input);
  expect(result).toBe(95937);
});

describe("handleInstruction", () => {
  test("should handle cd {dir}", () => {
    const dirTracker = ["a"];
    const dirData = {};
    const instruction = "$ cd b";
    handleInstruction(dirTracker, dirData, instruction);
    expect(dirTracker).toStrictEqual(["a", "b"]);
    expect(dirData).toStrictEqual({});
  });
  test("should add data to dir", () => {
    const dirTracker = ["a", "b"];
    const dirData = {a: {data : 50}};
    const instruction = "50 d.log";
    handleInstruction(dirTracker, dirData, instruction);
    expect(dirTracker).toStrictEqual(["a", "b"]);
    expect(dirData).toStrictEqual({ a: { data: 100 }, b: { data: 50 } });
  });
  test("should handle cd ..", () => {
    const dirTracker = ['a', 'b', 'c'];
    const dirData = {a: {data : 50}};
    const instruction = "$ cd ..";
    handleInstruction(dirTracker, dirData, instruction);
    expect(dirTracker).toStrictEqual(['a', 'b']);
    expect(dirData).toStrictEqual({a: {data : 50}});
  });
});


