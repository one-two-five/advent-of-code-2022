const {
  day6
} = require("./day6.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  expect(day6('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(7)
  expect(day6('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5)
  expect(day6('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6)
  expect(day6('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10)
  expect(day6('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11)
});

test("should match final input", () => {
  const input = readFile("./day6/input.txt");
  const result = day6(input);
  expect(day6(input)).toBe(1760)
});
