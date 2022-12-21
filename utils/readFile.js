const fs = require('fs');
const path = require('path');

const readFile = (file, castToNumbers = false) => {
  let txtArray;  
  
  if(!file) {
    return []
  }

  const root = process.cwd();
  const filePath = path.join(root, file);

  try {
    txtArray = fs.readFileSync(filePath).toString()
  } catch (error) {
    console.error(`${filePath} -- does not exist`)
    txtArray = []
  }

  return txtArray;
}

module.exports = readFile;