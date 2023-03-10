const handleInstruction = (dirTracker, dirData, instruction, spent) => {
  if (instruction.split(" ")[1] === "cd" && instruction.split(" ")[2] !== '..' && instruction !== "$ cd /") {
    const dir = [...dirTracker,instruction.split(" ")[2]].join('/')
    dirTracker.push(dir);
  }

  if (instruction.split(" ")[2] === "..") {
    const popped = dirTracker.pop()
    spent.push(popped)
  }

  if (Number.isInteger(parseInt(instruction.split(" ")[0]))) {
    const data = parseInt(instruction.split(" ")[0]);
    dirTracker.forEach((dir) => {
      if (dirData.hasOwnProperty(dir) && spent.includes(dir) === false) {
        const currentData = dirData[dir]?.data;
        dirData[dir].data = currentData + data;
      } else {
        dirData[dir] = { data: data };
      }
    });
  }
};

const day7 = (input) => {
  const inputArr = input.split("\n");

  const dirData = {};
  const dirTracker = ['/'];
  const spent = []
  
  inputArr.forEach((instruction) => {
    handleInstruction(dirTracker, dirData, instruction, spent)
  });
  const dataArr = Object.keys(dirData).map(key => {
    return dirData[key]?.data
  })
  return dataArr.filter(data => data <= 100000).reduce((acc, cur) => acc+=cur);
};

module.exports = { day7, handleInstruction };
