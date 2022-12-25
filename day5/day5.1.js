const processInput = (input) => {
  const [start, instructions] = input.split('\n\n')
  const numbers = start.split('\n').pop()
  const letters = start.split('\n').slice(0, -1)
  const processedLetters = letters.map(line => line.split('    ').map(line => line.split(' ')).flat()).reverse()
  console.log('processedLetters', processedLetters)
  const processedNumbers = numbers.split(' ').reduce((acc, cur) => {
    if(parseInt(cur)) acc.push(parseInt(cur))
    return acc
  }, [])
  const processedInstructions = instructions.split('\n').map(line => line.slice(5).split(' from ').map(ins => ins.split(' to ')))
  return [processedLetters, processedNumbers, processedInstructions];
}

const moveCrates = (state, instruction) => {
  return []
}

const getTopCrates = (state) => {
  return []
}

const day5 = (input) => {
  const [startingCrates, numbers, instructions] = processInput(input)
  let state = [...startingCrates]
  instructions.forEach(instruction => {
    state = moveCrates(state, instruction)
  });

  return getTopCrates()
};

module.exports = { day5, processInput, moveCrates, getTopCrates };
