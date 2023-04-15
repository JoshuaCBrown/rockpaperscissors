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
        alert("that's not a valid option... google the rules maybe? Idk. Idc. Reload the webpage to start again.")
    }
}


function playRound(a, b) {
    let result;
    if (a === b) {
        result = "It's a tie"
    }
    else if (
        (a == "rock" && b == "scissors") ||
        (a == "paper" && b == "rock") ||
        (a == "scissors" && b == "paper")
    ) {
        ++playerScore;
        result = "You win!";
    }
    else {
        ++cpuScore;
        result = "You lose :(";
    }
    return result;
}
 

function gameBoy () {
    for (let i = 1; i < 6; i++) {
        let getPlayerSelection = prompt("Round " + i + "! Choose rock, paper, or scissors.");
        let playerSelection = answerChecker(getPlayerSelection.toLowerCase());
        let computerSelection = getComputerChoice();
        console.log("You chose " + playerSelection + " and the Computer chose " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("The score is you: " + playerScore + ". CPU: " + cpuScore + ". " + (5-i) + " rounds left.");
        }    
    console.log("Game over.")
    if (playerScore > cpuScore) {
        console.log("Congratulations, you won!");
    }
    else if (cpuScore == playerScore) {
        console.log("It's a tie!");
    }
    else {
        console.log("You've lost, you losey lose face.");
    }
    console.log("Final Score:\nYou: " + playerScore + "\nCpu: " + cpuScore);
}



let playerScore = 0;

let cpuScore = 0;

gameBoy();

