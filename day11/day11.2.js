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
    BigInt(0), // 6: inspections
  ];
};

const handleOperation = (oldValue, operation, opValue) => {
  // console.log('oldValue', oldValue)
  const value = opValue === "old" ? oldValue : opValue;
  // const parsedOldValue = BigInt(oldValue)
  // console.log('oldValue', typeof oldValue)
  // console.log('value', typeof value)
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
  
  // if (values.length > 0) {
    values.forEach((value) => {
      const [op, opValue] = operation
      const updatedValue = BigInt(handleOperation(value, op, opValue));
      // if(Number.isInteger(updatedValue) === false) console.log('---Warning-updated-value')
      // const finalValue = Math.floor(updatedValue / 3);

      const targetMonkey = updatedValue % test === BigInt(0) ? trueMonkey : falseMonkey;
      // if(Number.isInteger(targetMonkey) === false) console.log('---Warning-target-monkey')
      // if(Number.isInteger(test) === false) console.log('---Warning-test')
      monkeyArrCopy[targetMonkey][1].push(updatedValue)
      inspectionCount += BigInt(1);
    });
    monkeyArrCopy[index][6] = inspectionCount;
    monkeyArrCopy[index][1] = [];
  // }
  return monkeyArrCopy;
};

const day11 = (input) => {
  const inputArr = input.split("\n\n").map((ins) => ins.split("\n"));
  let monkeyArr = inputArr.map((monkey, index) => {
    return transformInput(monkey, index);
  });
  console.log('monkeyArr', monkeyArr)

  for (let index = 0; index < 20; index++) {
    for (let monkeyIndex = 0; monkeyIndex < monkeyArr.length; monkeyIndex++) {
      monkeyArr = handleMonkeyTurn(monkeyArr[monkeyIndex], monkeyIndex, monkeyArr)
    }
  }

  console.log('monkeyArr', monkeyArr)
  const [final1, final2] = (monkeyArr.sort((a,b) => b[6]-a[6]).slice(0,2))
  return final1[6] * final2[6];
};
module.exports = { day11, transformInput, handleMonkeyTurn, handleOperation };
