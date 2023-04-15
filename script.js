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
console.log(getComputerChoice());