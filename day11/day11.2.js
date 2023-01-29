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

const handleOperation = (oldValue, operation, newValue) => {
  const value = newValue === "old" ? oldValue : newValue;
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
  const [_, values, operation, test, trueMonkey, falseMonkey, inspections] =
    monkey;
  const monkeyArrCopy = cloneDeep(monkeyArr);
  let inspectionCount = inspections;

  if (values.length > 0) {
    values.forEach((value) => {
      const updatedValue = handleOperation(value, operation);
      const finalValue = Math.floor(updatedValue / 3);
      const targetMonkey = finalValue / test === 0 ? trueMonkey : falseMonkey;
      const monkeyCopy = cloneDeep(monkeyArrCopy[targetMonkey]);
      monkeyCopy[1] = [...monkeyCopy[1], finalValue];
      monkeyArrCopy[targetMonkey] = monkeyCopy;
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
    monkeyArr.forEach((monkey, index) => {
      monkeyArr = handleMonkeyTurn(monkey, index, monkeyArr);
    });
  }

  // monkey inpects left most value
  // operation is applied to the value
  // value divided by 3 and rounded down to nearest int
  // test applied to value
  // item is thrown to another monkey based on whether test is TRUE or FALSE
  // when an item is thrown it is added to the end of the monkey's value list

  // if monkey has no values at the start of the turn the monkeys turn ends
  // in each round the money inspects and throws all values that they have
  // count for 20 rounds
  // find the 2 monkeys who do the most item inpections (most active monkeys)
  console.log("monkeyArr", monkeyArr);
  return 0;
};
module.exports = { day11, transformInput, handleMonkeyTurn, handleOperation };
