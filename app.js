// number guesser


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
 

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    const humanDifference = Math.abs(secretTarget - userGuess)
    const computerDifference = Math.abs(secretTarget - computerGuess)
    return humanDifference <= computerDifference;
}


const updateScore = winner => {
  if(winner === 'human') {
    humanScore++;
  } else if (winner === 'computer'){
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}

 
