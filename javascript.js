let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  let randomFloat = Math.random();

  function getComputerChoice() {
    if (randomFloat <= 1 / 3) {
      return "rock";
    } else if (randomFloat > 1 / 3 && randomFloat <= 2 / 3) {
      return "paper";
    } else if (randomFloat > 2 / 3 && randomFloat < 1) {
      return "scissors";
    }
  }

  let humanChoice = prompt(
    "This is a rock-paper-scissors game against the computer, please enter your choice below."
  ).toLowerCase();

  function getHumanChoice() {
    if (humanChoice === "rock") {
      return "rock";
    } else if (humanChoice === "paper") {
      return "paper";
    } else if (humanChoice === "scissors") {
      return "scissors";
    } else {
      alert("Invalid choice, please enter rock, paper, or scissors!");
      return; // Return to skip the current round if the choice is invalid
    }
  }

  const humanSelection = getHumanChoice();
  if (humanSelection === undefined) continue; // Skip the current round if the choice is invalid

  const computerSelection = getComputerChoice();

  function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      console.log("It's a tie! Go again!");
    } else if (
      // write the conditionals in this way to keep code clean and logical
      (humanSelection === "rock" && computerSelection === "paper") ||
      (humanSelection === "paper" && computerSelection === "scissors") ||
      (humanSelection === "scissors" && computerSelection === "rock")
    ) {
      console.log("Computer wins this round!");
      computerScore += 1;
    } else {
      console.log("You win this round!");
      humanScore += 1;
    }
    console.log(
      `Your score is ${humanScore}, computer score is ${computerScore}`
    );
  }

  playRound(humanSelection, computerSelection);
  console.log(`computer chose ${getComputerChoice()}`);
  console.log(randomFloat);
}

console.log(
  `Final score: Your score is ${humanScore}, computer score is ${computerScore}`
);

if (humanScore === computerScore) {
  console.log("The final result is a tie!");
} else if (humanScore > computerScore) {
  console.log("Congratulations, you won the game!");
} else if (computerScore > humanScore) {
  console.log("Computer wins this game, you lose!");
}
