const cloneDeep = require("clone-deep");

const transformInput = (monkey, index) => {
  return [
    index, // 0: monkey no
    monkey[1]
      .split(" ")
      .slice(4)
      .map((value) => {
        const parsedValue = parseInt(value)
        return BigInt(parsedValue)
      }), // 1: values
    monkey[2].split(" ").slice(6).map((op, opIndex) => {
      if(opIndex === 1 && op !== 'old') {
        return BigInt(op) 
      } else {
        return op
      }
    }), // 2: operation
    BigInt(monkey[3].split(" ").pop()), // 3: test
    BigInt(monkey[4].split(" ").pop()), // 4: true outcome
    BigInt(monkey[5].split(" ").pop()), // 5: false outcome
    0, // 6: inspections
  ];
};

const handleOperation = (oldValue, operation, opValue) => {
  const value = opValue === "old" ? oldValue : opValue;
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
  values.forEach((value) => {
    const [op, opValue] = operation
    const updatedValue = BigInt(handleOperation(value, op, opValue));
    const targetMonkey = updatedValue % test === BigInt(0) ? trueMonkey : falseMonkey;
    monkeyArrCopy[targetMonkey][1].push(updatedValue)
    inspectionCount += 1;
  });
  monkeyArrCopy[index][6] = inspectionCount;
  monkeyArrCopy[index][1] = [];
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

  const [first, second] = monkeyArr.map(monkey => monkey[6]).sort((a,b) => b-a).slice(0,2)
  return first * second;
};
module.exports = { day11, transformInput, handleMonkeyTurn, handleOperation };
