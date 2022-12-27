const processInput = (input) => {
  const [start, instructions] = input.split('\n\n')
  const numbers = start.split('\n').pop()
  const letters = start.split('\n').slice(0, -1)
  const processedLetters = letters.map(line => line.split('    ').map(line => line.split(' ')).flat()).reverse()
  const processedNumbers = numbers.split(' ').reduce((acc, cur) => {
    if(parseInt(cur)) acc.push(parseInt(cur))
    return acc
  }, [])
  const processedInstructions = instructions.split('\n').map(line => line.slice(5).split(' from ').map(ins => ins.split(' to '))).map(values => {
    return [[parseInt(values[0])],[parseInt(values[1][0]), parseInt(values[1][1])]]
  })
  return [processedLetters, processedNumbers, processedInstructions];
}

const getTopCrateIndex = (state, colum) => {
  const colIndex = colum - 1
  for (let index = state.length -1; index >=0; index--) {
    if(state[index][colIndex] !== '') return index    
  }
  return -1
}

const moveCrate = (state, instruction) => {
  const [_, [startCol, endCol ]] = instruction
  const crateIndex = getTopCrateIndex(state, startCol) === -1 ? 0 : getTopCrateIndex(state, startCol)
  const moveToIndex = getTopCrateIndex(state, endCol) + 1
  const crate = state[crateIndex][startCol -1]
  if(moveToIndex > state.length - 1) {
    const filledArray = Array(state[0].length).fill('');
    state.push(filledArray)
  }
  state[crateIndex][startCol -1] = ''
  state[moveToIndex][endCol - 1] = crate
  return state
}

const moveCrates = (state, instruction) => {
  let newState = state;
  const [quantity, [, ]] = instruction
  for (let count = 0; count < quantity; count++) {
    newState = moveCrate(state, instruction)
  }
  return newState
}

const getTopCrates = (state) => {
  const cols = state[0].length
  const chars = []
  for (let col = 0; col < cols; col++) {
    const crateIndex = getTopCrateIndex(state, col + 1) === -1 ? 0 : getTopCrateIndex(state, col + 1)
    const crate = state[crateIndex][col]
    chars.push(crate.split('')[1])
  }
  return chars.join('')
}

const day5 = (input) => {
  const [startingCrates, _, instructions] = processInput(input)
  let state = [...startingCrates]
  instructions.forEach(instruction => {
    state = moveCrates(state, instruction)
  });
  return getTopCrates(state)
};

module.exports = { day5, processInput, moveCrates, getTopCrates, getTopCrateIndex, moveCrate, getTopCrates };
