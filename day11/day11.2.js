const cloneDeep = require("clone-deep");

const transformInput = (monkey, index) => {
  return [
    index, // 0: monkey no
    monkey[1]
      .split(" ")
      .slice(4)
      .map((value) => parseInt(value)), // 1: values
    monkey[2].split(" ").slice(6), // 2: operation
    parseInt(monkey[3].split(" ").pop()), // 3: test
    parseInt(monkey[4].split(" ").pop()), // 4: true outcome
    parseInt(monkey[5].split(" ").pop()), // 5: false outcome
    0, // 6: inspections
  ];
};

const handleOperation = (oldValue, operation, opValue) => {
  const value = opValue === "old" ? parseInt(oldValue) : parseInt(opValue);
  switch (operation) {
    case "+":
      return oldValue + value;
    case "-":
      return oldValue - value;
    case "*":
      return oldValue * value;
    case "/":
      return oldValue / value;
  }
};

const handleMonkeyTurn = (monkey, index, monkeyArr) => {
  const [_, values = [], operation, test, trueMonkey, falseMonkey, inspections] =
  monkey;
  const monkeyArrCopy = cloneDeep(monkeyArr);
  let inspectionCount = inspections;
  
  if (values.length > 0) {
    values.forEach((value) => {
      const [op, opValue] = operation
      const updatedValue = handleOperation(value, op, opValue);
      // const finalValue = Math.floor(updatedValue / 3);
      const targetMonkey = updatedValue % test === 0 ? parseInt(trueMonkey) : parseInt(falseMonkey);
      monkeyArrCopy[targetMonkey][1].push(finalValue)
      inspectionCount += 1;
    });
    monkeyArrCopy[index][6] = inspectionCount;
    monkeyArrCopy[index][1] = [];
  }
  return monkeyArrCopy;
};

const day11 = (input) => {
  const inputArr = input.split("\n\n").map((ins) => ins.split("\n"));
  let monkeyArr = inputArr.map((monkey, index) => {
    return transformInput(monkey, index);
  });
  for (let index = 0; index < 20; index++) {
    for (let monkeyIndex = 0; monkeyIndex < monkeyArr.length; monkeyIndex++) {
      monkeyArr = handleMonkeyTurn(monkeyArr[monkeyIndex], monkeyIndex, monkeyArr)
    }
  }
  const [final1, final2] = (monkeyArr.sort((a,b) => b[6]-a[6]).slice(0,2))
  return final1[6] * final2[6];
};
module.exports = { day11, transformInput, handleMonkeyTurn, handleOperation };
