const readFile = require("../utils/readFile")

test('should return string from data in file', () => {
  const arr = readFile('./utils/linesOfData.txt')
  expect(arr).toEqual("100\n101\n105\n106\n103\n104\n106\n108\n112");
})

test('should return empty array when file is not provided', () => {
  const arr = readFile()
  expect(arr).toEqual([]);
})

test('should return empty array when file does not exist', () => {
  const arr = readFile('fileblahhhh')
  expect(arr).toEqual([]);
})