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

function rockf (a) {
    if (a == "rock") {
        tieGame(computerSelection, playerSelection);
    }
    else if (a == "paper") {
        youLose(computerSelection, playerSelection);
    }
    else {
        youWin(computerSelection, playerSelection);
    }
}

function paperf (a) {
    if (a == "rock") {
        youWin(computerSelection, playerSelection);
    }
    else if (a == "paper") {
        tieGame(computerSelection, playerSelection);
    }
    else {
        youLose(computerSelection, playerSelection);
    }
}

function scissorsf (a) {
    if (a == "rock") {
        youLose(computerSelection, playerSelection);
    }
    else if (a == "paper") {
        youWin(computerSelection, playerSelection);
    }
    else {
        tieGame(computerSelection, playerSelection);
    }
}

function youWin(a, b) {
    console.log ("Congratulations! You win because " + b + " beats " + a + "!");
}

function youLose(a, b) {
    console.log ("You lost. Unfortunately for you, " + a + " beats " + b + ".");
}

function tieGame(a, b) {
    console.log ("It was a tie! Better than losing, but not quite as good as winning, I guess. You both selected " + b + ".");
}


let computerSelection = getComputerChoice();

console.log ("Computer has selected " + computerSelection + ". Good luck!");

let getPlayerSelection = prompt("Choose rock, paper, or scissors.");

let playerSelection = answerChecker(getPlayerSelection.toLowerCase());

switch (playerSelection) {
    case "rock":
        rockf (computerSelection);
        break;
    case "paper":
        paperf (computerSelection);
        break;
    case "scissors":
        scissorsf (computerSelection);
        break;
    default:
        prompt("something went wrong, Josh needs to write better code!");
}

