// col1 = other elf
// A = Rock, B = Paper, C = Scissors

// col2 = your play
// X = Rock, Y = Paper, Z = Scissors

// Scores
// Rock = 1, Paper = 2, Scissors = 3
// Lose = 0, Draw = 3, Win = 6
// Total Score === shape chosen + round outcome

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
    const [elfChoice, myChoice] = game;
    score+=calculateScore(elfChoice,myChoice)
  });
  return score
};

module.exports = { day2, calculateScore };
