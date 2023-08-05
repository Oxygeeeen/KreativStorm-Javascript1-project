const options = ["rock", "paper", "scissors"];

function computerPlay() {
  const computerOption = Math.floor(Math.random() * options.length);
  return options[computerOption];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "won";
  } else {
    return "lost";
  }
}

function getUserChoice() {
  let playerSelection;
  while (true) {
    playerSelection = prompt("Enter your choice (Rock/Paper/Scissors)").toLowerCase();
    if (playerSelection === null) {
      alert("You canceled the game. Goodbye!");
      return null;
    }
    playerSelection = playerSelection.trim();

    if (options.includes(playerSelection)) {
      break;
    } else {
      alert("Invalid input! Please enter Rock, Paper, or Scissors.");
    }
  }
  return playerSelection;
}

function displayGameIntro() {
  alert("AI wants to dominate the world through the game of ROCK, PAPER, or SCISSORS! \nDefeat the AI and save mankind. \nTo get the best experience, open your console. \nRight-click on your browser and click inspect to do so. \nGood luck, Human! \nGame starts in 5 seconds");
}

function displayRoundResult(roundResult, roundNumber) {
  if (roundResult === "won") {
    console.log(`You won round ${roundNumber}`);
  } else if (roundResult === "lost") {
    console.log(`You lost round ${roundNumber}`);
  } else {
    console.log(`Round ${roundNumber} was a tie`);
  }
}

function displayFinalResult(playerScore, computerScore) {
  if (playerScore > computerScore) {
    alert("Congratulations! You defeated the evil AI!");
  } else if (playerScore < computerScore) {
    alert("The AI dominated you! Better luck next time!");
  } else {
    alert("It's a tie! The AI is still lurking around!");
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  displayGameIntro();

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      const computerSelection = computerPlay();
      const playerSelection = getUserChoice();
      if (playerSelection === null) {
        return;
      }

      const roundResult = playRound(playerSelection, computerSelection);
      displayRoundResult(roundResult, i + 1);

      if (roundResult === "won") {
        playerScore++;
      } else if (roundResult === "lost") {
        computerScore++;
      }
    }

    setTimeout(() => {
      displayFinalResult(playerScore, computerScore);
    }, 1000);
  }, 5000);
}

game();
