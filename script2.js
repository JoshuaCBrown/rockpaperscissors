
function getComputerChoice () {
    let a = Math.floor(Math.random()*3);
    if (a == 0) {
        console.log('cpu chooses rock');
        return "rock";
    }
    else if (a == 1) {
        console.log('cpu chooses paper');
        return "paper";
    }
    else {
        console.log('cpu chooses scissors');
        return "scissors";
    }
}


function playRound(a, b) {
    let result;
    if (a === b) {
        result = "It's a tie..."
    }
    else if (
        (a == "rock" && b == "scissors") ||
        (a == "paper" && b == "rock") ||
        (a == "scissors" && b == "paper")
    ) {
        ++playerScore;
        result = "You win!";
        pscore.textContent = playerScore;
    }
    else {
        ++cpuScore;
        result = "You lose :(";
        cscore.textContent = cpuScore;
    }
    console.log(result);
    ++roundNumber;
    roundCount.textContent = roundNumber;
    return result;
};


function gameBoy (myChoice) {
    if (roundNumber <= 5) {
        let computerSelection = getComputerChoice();
        gameLog.textContent += playRound(myChoice, computerSelection) + " You chose " + myChoice + " and the Computer chose " + computerSelection + ".";
        roundsLeft();
    } else {
        gameOver();
    };
};

function roundsLeft() {
    if (roundNumber === 4) {
        gameLog.textContent += "1 round left!";
    } else if (roundNumber < 4) {
        gameLog.textContent += (5-roundCount) + " rounds left!";
    } else {
        //do nothing
    };
};

function gameOver() {
    disableButtons();
    if (playerScore > cpuScore) {
        gameLog.textContent += "Congratulations, you won the game!";
    }
    else if (cpuScore == playerScore) {
        gameLog.textContent += "Tie... it's a tie. You didn't lose, but you didn't win. Your performance was exactly mediocre. Congrats I guess?";
    }
    else {
        gameLog.textContent += "You've lost, you losey lose face. A randomized selection beat you. Maybe rethink your strategy?";
    }
};

function disableButtons() {
    for (let i = 0; i < playButtons.length; ++i) {
        playButtons[i].disabled = true;
    };
};

let playerScore = 0;

let cpuScore = 0;

let roundNumber = 1;

const rockbtn = document.querySelector('#rbtn');
rockbtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

const paperbtn = document.querySelector('#pbtn');
paperbtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

const scissorsbtn = document.querySelector('#sbtn');
scissorsbtn.addEventListener('click', () => {
    gameBoy('scissors');
});

const pscore = document.querySelector('#pscore');
pscore.textContent = playerScore;

const cscore = document.querySelector('#cscore');
cscore.textContent = cpuScore;

const roundCount = document.querySelector('#roundCount');
roundCount.textContent = roundNumber;

const gameLog = document.querySelector('#gameLog');
gameLog.textContent = "Round " + roundNumber;

const playButtons = document.querySelectorAll(".btn");

// gameBoy();


