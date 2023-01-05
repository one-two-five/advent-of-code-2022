// col1 = other elf
// A = Rock, B = Paper, C = Scissors

// col2 = your play
// X = Rock, Y = Paper, Z = Scissors

// Scores
// Rock = 1, Paper = 2, Scissors = 3
// Lose = 0, Draw = 3, Win = 6
// Total Score === shape chosen + round outcome

// Pt2
// Second column - X = lose, Y = draw, Z = win

const getShape = (elfChoice, matchOutcome) => {
  // lose
  if(matchOutcome === 'X') {
    if(elfChoice == 'A') return 'Z'
    if(elfChoice == 'B') return 'X'
    if(elfChoice == 'C') return 'Y'
  }
  // draw
  if(matchOutcome === 'Y') {
    if(elfChoice == 'A') return 'X'
    if(elfChoice == 'B') return 'Y'
    if(elfChoice == 'C') return 'Z'
  }
  // win
  if(matchOutcome === 'Z') {
    if(elfChoice == 'A') return 'Y'
    if(elfChoice == 'B') return 'Z'
    if(elfChoice == 'C') return 'X'
  }
}

const calculateScore = (elfChoice, myChoice) => {
  let score = 0
    if (myChoice === "X") {
      score+=1
      if (elfChoice === "B") score+=0;
      if (elfChoice === "A") score+=3;
      if (elfChoice === "C") score+=6;
    }
    if (myChoice === "Y") {
      score+=2
      if (elfChoice === "C") score+=0;
      if (elfChoice === "B") score+=3;
      if (elfChoice === "A") score+=6;
    }
    if (myChoice === "Z") {
      score+=3
      if (elfChoice === "A") score+=0;
      if (elfChoice === "C") score+=3;
      if (elfChoice === "B") score+=6;
    }
    return score
};

const day2 = (input) => {
  const inputArr = input.split("\n").map(el => el.split(' '));
  let score = 0;

  inputArr.forEach((game) => {
    const [elfChoice, matchOutcome] = game;
    const myChoice = getShape(elfChoice, matchOutcome)
    score+=calculateScore(elfChoice, myChoice)
  });
  return score
};

module.exports = { day2, calculateScore, getShape };
