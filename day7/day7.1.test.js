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
  expect(result).toBe(1583951);
});

describe("handleInstruction", () => {
  test("should handle cd {dir}", () => {
    const dirTracker = ["a"];
    const dirData = {};
    const instruction = "$ cd b";
    const spent = [];
    handleInstruction(dirTracker, dirData, instruction);
    expect(dirTracker).toStrictEqual(["a", "a/b"]);
    expect(dirData).toStrictEqual({});
    expect(spent).toStrictEqual([]);
  });
  test("should add data to dir", () => {
    const dirTracker = ["a", "a/b"];
    const dirData = { a: { data: 50 } };
    const instruction = "50 d.log";
    const spent = [];
    handleInstruction(dirTracker, dirData, instruction, spent);
    expect(dirTracker).toStrictEqual(["a", "a/b"]);
    expect(dirData).toStrictEqual({ "a": { data: 100 }, "a/b": { data: 50 } });
    expect(spent).toStrictEqual([]);
  });
  test("should not add data to dir if dir in spent", () => {
    const dirTracker = ["a", "a/b"];
    const dirData = { "a": { data: 50 } };
    const instruction = "50 d.log";
    const spent = ["a"];
    handleInstruction(dirTracker, dirData, instruction, spent);
    expect(dirTracker).toStrictEqual(["a", "a/b"]);
    expect(dirData).toStrictEqual({ "a": { data: 50 }, "a/b": { data: 50 } });
    expect(spent).toStrictEqual(["a"]);
  });
  test("should not add data to dir if dir in spent 2", () => {
    const dirTracker = ["a", "a/b"];
    const dirData = { "a": { data: 50 }, "a/b": { data: 50 }};
    const instruction = "50 d.log";
    const spent = ["a/b"];
    handleInstruction(dirTracker, dirData, instruction, spent);
    expect(dirTracker).toStrictEqual(["a", "a/b"]);
    expect(dirData).toStrictEqual({ "a": { data: 100 }, "a/b": { data: 50 } });
    expect(spent).toStrictEqual(["a/b"]);
  });
  test("should handle cd ..", () => {
    const dirTracker = ["a", "a/b", "a/b/c"];
    const dirData = { a: { data: 50 } };
    const instruction = "$ cd ..";
    const spent = [];
    handleInstruction(dirTracker, dirData, instruction, spent);
    expect(dirTracker).toStrictEqual(["a", "a/b"]);
    expect(dirData).toStrictEqual({ a: { data: 50 } });
    expect(spent).toStrictEqual(["a/b/c"]);
  });
});
