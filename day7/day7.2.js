const handleInstruction = (dirTracker, dirData, instruction, spent) => {
  if (instruction.split(" ")[1] === "cd" && instruction.split(" ")[2] !== '..' && instruction !== "$ cd /") {
    const dir = [dirTracker[dirTracker.length -1],instruction.split(" ")[2]].join('/')
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
  const totalSpace = dirData['/'].data
  const freeSpaceNeeded = totalSpace + (30000000 - 70000000)
  const freeSpace = dataArr.filter(data => data >= freeSpaceNeeded).sort((a,b) => b-a).pop()
  return freeSpace;
};

module.exports = { day7, handleInstruction };
