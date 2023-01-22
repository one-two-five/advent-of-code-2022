
const day10 = (input) => {
  const inputArr = input.split('\n').map(ins => ins.split(' ')).map(ins => {
    if(ins[0] !== 'noop') {
      return [ins[0], parseInt(ins[1])]
    } else {
      return ins
    }
  })
  console.log('inputArr', inputArr)



  return 0
}
module.exports = { day10 };
