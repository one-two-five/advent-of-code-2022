const arrayFromTxtNewLines = require('./arrayFromTxtNewLines')

test('should convert text file to array of text', () => {
    const expected = [
        '100', '101',
        '105', '106',
        '103', '104',
        '106', '108',
        '112'
      ]
    const arr = arrayFromTxtNewLines('./utils/linesOfData.txt')
    expect(arr).toEqual(expected);
})

test('should convert text file to array of numbers', () => {
    const expected = [
        100, 101,
        105, 106,
        103, 104,
        106, 108,
        112
      ]
    const arr = arrayFromTxtNewLines('./utils/linesOfData.txt', true)
    expect(arr).toEqual(expected);
})

test('should return empty array when file is not provided', () => {
    const arr = arrayFromTxtNewLines()
    expect(arr).toEqual([]);
})

test('should return empty array when file does not exist', () => {
    const arr = arrayFromTxtNewLines('fileblahhhh')
    expect(arr).toEqual([]);
})
