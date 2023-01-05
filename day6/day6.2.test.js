const {
  day6
} = require("./day6.2");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  expect(day6('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(19)
  expect(day6('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(23)
  expect(day6('nppdvjthqldpwncqszvftbrmjlhg')).toBe(23)
  expect(day6('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(29)
  expect(day6('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(26)
});

test("should match final input", () => {
  const input = readFile("./day6/input.txt");
  expect(day6(input)).toBe(2974)
});
