function getComputerChoice() {
    let compCh = (Math.random() * 4)
    if (compCh >= 3) {
        return "rock";
    } else if (compCh >= 2 && compCh < 3) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerChoice () {
    let playCh = prompt("rock, paper, or scissors?").toLowerCase();
        if (playCh === "rock") {
            return "rock";
        } else if (playCh === "paper") {
            return "paper";
        } else if (playCh === "scissors") {
            return "scissors"
        } else {
            console.log("Somebody a stinky");
        }
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "Win"
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "Loss"
    } else {
        return "Loss"
    }
}

function determineWinner(scoreOne, scoreTwo) {
    if (scoreOne > scoreTwo) {
        console.log("You won the BO5!")
    } else if (scoreOne < scoreTwo) {
        console.log("You lost the BO5!")
    } else {
        console.log("It's an overall tie!")
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === "Tie") {
            console.log("Round " + (i + 1) + " is a tie")
        } else if (result === "Win") {
            console.log("Round " + (i + 1) + " is your win")
            playerScore++
        } else if (result === "Loss") {
            console.log("Round " + (i + 1) + " is your loss")
            computerScore++
        }
    }

    determineWinner(playerScore, computerScore);
}

game();
