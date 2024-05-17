console.log("hello")
// create a rule to select rock paper or scissors based on numbers from 1 to 100 for the machine// 
function getcomputerchoice() {
    if (Math.random() * 100 < 33) {
        return "Rock"
    } else if (Math.random() * 100 < 66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
console.log(getcomputerchoice())

// create a prompt thing to let people input their choice , limit it so it can only be rock paper or tijeras//
function gethumanchoice() {
    let answer = prompt("Letś play Rock, Paper, Scissors. Pick your choice!").toLowerCase().slice(0)
    if (answer === "rock" || answer === "paper" || answer === "scissors") {
        console.log(answer.at(0).toUpperCase() + answer.slice(1))
        return answer.at(0).toUpperCase() + answer.slice(1);
    }
    else {
        console.log("invalid answer, please enter Rock, Paper or Scissors");
        gethumanchoice();
    }
}

// keep track of the score, maybe create some variables that store scores or one variable that adds up for each player (the machine and the person)
let humanscore = 0
let computerscore = 0

function playround() {
    if (getcomputerchoice().toLowerCase() === "rock" && gethumanchoice().toLowerCase() === "paper") {
        humanscore++
    }
    else if (getcomputerchoice().toLowerCase() === "rock" && gethumanchoice().toLowerCase() === "scissors") {
        computerscore++
    }
    else if (getcomputerchoice().toLowerCase() === "paper" && gethumanchoice().toLowerCase() === "rock") {
        computerscore++
    }
    else if (getcomputerchoice().toLowerCase() === "paper" && gethumanchoice().toLowerCase() === "scissors") {
        humanscore++
    }
    else if (getcomputerchoice().toLowerCase() === "scissors" && gethumanchoice().toLowerCase() === "rock") {
        humanscore++
    }
    else if (getcomputerchoice().toLowerCase() === "scissors" && gethumanchoice().toLowerCase() === "paper")
    computerscore++;
    console.log(humanscore)
    console.log(computerscore)
    return {humanscore, computerscore}
}
playround()

// create the logic for the game, who wins and who loses , a lot of if if if//
// create a function that makes the game repeat itself 5 times and accumulate scores//

