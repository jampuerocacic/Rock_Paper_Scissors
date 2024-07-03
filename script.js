console.log("hello")
// create a rule to select rock paper or scissors based on numbers from 1 to 100 for the machine// 
function getComputerChoice() {
    if (Math.random() * 100 < 33) {
        return "rock";
    } else if (Math.random() * 100 < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}


// create a prompt thing to let people input their choice , limit it so it can only be rock paper or tijeras//
// function gethumanchoice() {
//     let answer = prompt("Lets play Rock, Paper, Scissors. Pick your choice!").toLowerCase().slice(0)
//     if (answer === "rock" || answer === "paper" || answer === "scissors") {
//         return answer.at(0).toUpperCase() + answer.slice(1);
//     }
//     else {
//         console.log("invalid answer, please enter Rock, Paper or Scissors");
//         return gethumanchoice();
//     }
// }
const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

// keep track of the score, maybe create some variables that store scores or one variable that adds up for each player (the machine and the person)
let humanScore = 0
let computerScore = 0

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = "";
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        result = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
        computerScore++;
        result = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
    }

    resultsDiv.textContent = result;
    scoreDiv.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;


    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function announceWinner() {
    if (humanScore === 5) {
        resultsDiv.textContent = 'Congratulations! You have won the game!';
    } else {
        resultsDiv.textContent = 'Sorry! The computer has won the game!';
    }

 // Disable buttons after the game is over
 buttons.forEach(button => {
    button.disabled = true;
});
}

