const day3 = require("./day3.1");
const readFile = require("../utils/readFile");

test("should match example input", () => {
  const input = readFile("./day3/example.txt");
  const result = day3.day3(input);
  expect(result).toBe(157);
});

test("should match final input", () => {
  // const input = readFile("./day3/input.txt");
  // const result = day3.day3(input);
  // expect(result).toBe(13448);
});

describe('getPriority', () => {
  test('should get correct priority', () => {
    const charaters = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D',
    'E','F','G','H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','W','X','Y','Z']
  
    charaters.forEach((char, index) => {
      expect(day3.getPriority(char)).toBe(index + 1)
    })
  });
});