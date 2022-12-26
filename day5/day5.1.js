const processInput = (input) => {
  const [start, instructions] = input.split('\n\n')
  const numbers = start.split('\n').pop()
  const letters = start.split('\n').slice(0, -1)
  const processedLetters = letters.map(line => line.split('    ').map(line => line.split(' ')).flat()).reverse()
  const processedNumbers = numbers.split(' ').reduce((acc, cur) => {
    if(parseInt(cur)) acc.push(parseInt(cur))
    return acc
  }, [])
  const processedInstructions = instructions.split('\n').map(line => line.slice(5).split(' from ').map(ins => ins.split(' to ')))
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
  const newState = [...state];
  const [_, [startCol, endCol ]] = instruction
  const crateIndex = getTopCrateIndex(newState, startCol) === -1 ? 0 : getTopCrateIndex(newState, startCol)
  const moveToIndex = getTopCrateIndex(newState, endCol) + 1
  // console.log('newState', newState)
  // console.log('crateIndex', crateIndex)
  // console.log('moveToIndex', moveToIndex)

  // breaking here when crateIndex === -1
  const crate = newState[crateIndex][startCol -1]
  if(moveToIndex > newState.length - 1) {
    const filledArray = Array(newState[0].length).fill('');
    newState.push(filledArray)
  }
  newState[crateIndex][startCol -1] = ''
  newState[moveToIndex][endCol - 1] = crate
  // console.log('---newState---', newState)
  return JSON.parse(JSON.stringify(newState))
}

const moveCrates = (state, instruction) => {
  let newState = state;
  const [quantity, [startCol, endCol]] = instruction
  for (let count = 0; count < quantity; count++) {
    newState = [...moveCrate(state, instruction)]
  }
  
  console.log('instruction', instruction)
  console.log('newState', newState.map(state => console.log(...state)))
  return newState
}

const getTopCrates = (state) => {
  const cols = state[0].length
  // console.log('cols', cols)
  const chars = []
  
  for (let col = 0; col < cols; col++) {
    const crateIndex = getTopCrateIndex(state, col + 1) === -1 ? 0 : getTopCrateIndex(state, col + 1)
    // console.log('crateIndex', crateIndex)
    // console.log('col', col)
    const crate = state[crateIndex][col]
    chars.push(crate.split('')[1])
    // console.log('chars', chars)
  }
  
  return chars.join('')
}

const day5 = (input) => {
  const [startingCrates, _, instructions] = processInput(input)
  let state = [...startingCrates]
  instructions.forEach(instruction => {
    state = moveCrates(state, instruction)
  });

  // console.log('state', state)
  return getTopCrates(state)
};

module.exports = { day5, processInput, moveCrates, getTopCrates, getTopCrateIndex, moveCrate, getTopCrates };
