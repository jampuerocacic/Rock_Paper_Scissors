console.log("hello")
// create a rule to select rock paper or scissors based on numbers from 1 to 100 for the machine// 
function getcomputerchoice() {
    if (Math.random() * 100 < 33) {
        return "Rock";
    } else if (Math.random() * 100 < 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


// create a prompt thing to let people input their choice , limit it so it can only be rock paper or tijeras//
function gethumanchoice() {
    let answer = prompt("Letś play Rock, Paper, Scissors. Pick your choice!").toLowerCase().slice(0)
    if (answer === "rock" || answer === "paper" || answer === "scissors") {
        return answer.at(0).toUpperCase() + answer.slice(1);
    }
    else {
        console.log("invalid answer, please enter Rock, Paper or Scissors");
        return gethumanchoice();
    }
}

// keep track of the score, maybe create some variables that store scores or one variable that adds up for each player (the machine and the person)
let humanscore = 0
let computerscore = 0

function playround() {
    let computerChoice = getcomputerchoice().toLowerCase();
    let humanChoice = gethumanchoice().toLowerCase();
   console.log("computer: " + computerChoice)
   console.log("human: " + humanChoice)

    if (computerChoice === "rock" && humanChoice === "paper") {
        humanscore++; console.log("You win! Paper beats Rock!");
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerscore++; console.log("You Lose! Rock beats Scissors!");
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        computerscore++; console.log("You Lose! Paper beats Rock!");
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanscore++; console.log("You win! Scissors beat Paper!");
    }
    else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanscore++; console.log("You win! Rock beats Scissors!");
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerscore++; console.log("You Lose! Scissors beat Paper!");
    }
    else {console.log("It's a tie!")}

    console.log("computer " + computerscore);
    console.log("human " + humanscore);
    return [humanscore, computerscore];

}


// create a function that makes the game repeat itself 5 times and accumulate scores//

function playGame(rounds) {
    if (rounds > 0) {
    playround();
    playGame(rounds - 1);}
    else { 
        console.log("computer score: " + computerscore + " Human Score: " + humanscore)
    }
}

let rounds = 5
playGame(rounds)

