function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "It's a tie! Both players chose " + playerChoice;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection;

        while (true) {
            playerSelection = prompt("Round " + (i + 1) + ": Enter your choice (Rock/Paper/Scissors)")

            if (playerSelection === null) {
                alert("You canceled the game. Goodbye!");
                return; // Exit the game if the user cancels the prompt
            }

            playerSelection = playerSelection.toLowerCase().trim();

            if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
                break;
            } else {
                alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
            }
        } // Make sure the user doesn't get a pass until the intended is provided as input

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        alert("Congratulations! You defeated the evil AI!");
    } else if (playerScore < computerScore) {
        alert("The AI dominated you! Better luck next time!");
    } else {
        alert("It's a tie! The AI is still lurking around!");
    }
}

game();
