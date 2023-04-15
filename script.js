function getComputerChoice () {
    let a = Math.floor(Math.random()*3);
    if (a == 0) {
        return "rock";
    }
    else if (a == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function answerChecker (a) {
    if (a == "rock" || a == "paper" || a == "scissors") {
        return a;
    }
    else {
        alert("that's not a valid option... google the rules maybe? Idk. Idc.")
    }
}

function rockf (a, b) {
    if (a == "rock") {
        tieGame(a, b);
    }
    else if (a == "paper") {
        youLose(a, b);
    }
    else {
        youWin(a,b);
    }
}

function paperf (b, a) {
    if (a == "rock") {

    }
    else if (a == "paper") {

    }
    else {
        
    }
}

function scissorsf (b, a) {
    if (a == "rock") {

    }
    else if (a == "paper") {

    }
    else {
        
    }
}


let computerSelection = getComputerChoice();

let getPlayerSelection = prompt("Choose rock, paper, or scissors.");

let playerSelection = answerChecker(getPlayerSelection.toLowerCase());

switch (playerSelection) {
    case "rock":
        rockf (computerSelection, playerSelection);
        break;
    case "paper":
        paperf (computerSelection, playerSelection);
        break;
    case "scissors":
        scissorsf (computerSelection, playerSelection);
        break;
    default:
        prompt("something went wrong, Josh needs to write better code!");
}

console.log("Computer has selected " + computerSelection);
console.log("You have selected " + playerSelection);
