const day2 = (input) => {
  const inputArr = input.split("\n\n").map((el) => el.split("\n"));
  const sumOfElf = inputArr.map((elf) =>
  elf.reduce((acc, cur) => {
    acc += parseInt(cur);
    return acc;
  }, 0)
  );
  const topThree = sumOfElf.sort((a,b) => b - a).slice(0,3)
  return topThree.reduce((acc, cur) => acc+=cur)
};

module.exports = day2;
