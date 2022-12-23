
const getPriority = (char) => {
  const charaters = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D',
  'E','F','G','H','I','J','K','L','M','N','O','P','Q',
  'R','S','T','U','V','W','X','Y','Z']
  return charaters.findIndex((el => el === char)) + 1
}

const day3 = (input) => {
  return 0
};

module.exports = { day3, getPriority };
