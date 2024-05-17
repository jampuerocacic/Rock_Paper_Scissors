console.log("hello")
// create a rule to select rock paper or scissors based on numbers from 1 to 100 for the machine// 
function getcomputerchoice() {
    if (Math.random() * 100 < 33) {
        console.log("Rock")
    } else if (Math.random() * 100 < 66) {
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}
getcomputerchoice()

// create a prompt thing to let people input their choice , limit it so it can only be rock paper or tijeras//
// keep track of the score, maybe create some variables that store scores or one variable that adds up for each player (the machine and the person)
// create the logic for the game, who wins and who loses , a lot of if if if//
// create a function that makes the game repeat itself 5 times and accumulate scores//

