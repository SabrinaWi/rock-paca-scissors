//Prompt user to choose 'rock', 'paper' or 'scissors'

function getPlayerChoice() {
    const playerChoice = prompt("Please choose 'Rock', 'Paper', or 'Scissors'!").toLowerCase();
    return playerChoice; 
 }

//Generate a random choice of 'rock', 'paper' or 'scissors' for the computer's choice

function getComputerChoice() {
        const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        switch (random) {
            case 1:
                return 'rock';
                break;
            case 2:
                return 'paper';
                break;
            case 3:
                    return 'scissors';
        }
}

//Play a round of rock. paper, scissors
let roundResult;
let playerSelection;
let computerSelection;

function playRound() {
    playerSelection = getPlayerChoice();
        console.log(playerSelection);
    computerSelection = getComputerChoice();
        console.log(computerSelection);
        if (playerSelection === 'rock') {
            switch (computerSelection) {
                case 'rock': 
                    roundResult = 'tie';
                    itsATie();
                    break;
                case 'paper':
                    return roundResult = 'lose';
                    break;
                case 'scissors':
                    return roundResult = 'win';
            };
        } else if (playerSelection === 'paper') {
            switch (computerSelection) {
                case 'rock': 
                    return roundResult = 'win';
                    break;
                case 'paper':
                    roundResult = 'tie';
                    itsATie();
                    break;
                case 'scissors':
                    return roundResult = 'lose';
            };       
        } else if (playerSelection === 'scissors') {
            switch (computerSelection) {
                case 'rock': 
                    return roundResult = 'lose';
                    break;
                case 'paper':
                    return roundResult = 'win';
                    break;
                case 'scissors':
                    roundResult = 'tie';
                    itsATie();
                    break;
            };      
        } else {
                return roundResult = 'error';
            }
        }

//return output to the player and initiate another round in case it was a tie

function showRoundResult() {
        if (roundResult === 'win' || roundResult === 'lose') {
            alert(`You chose ${playerSelection}. \n\n I chose ${computerSelection}! \n\n You ${roundResult}!`);
        } else {
            alert(`There must have been an ${roundResult}! \n\n I cannot understand what you chose.`)
        };
        alert(`You have ${wins} wins and ${losses} losses!`)
    }

function itsATie() {
        alert(`You chose ${playerSelection}. \n\n I also chose ${computerSelection}! \n\n It's a ${roundResult}! Let's play again!`);
        playRound();
    }

//count number of wins

let wins= 0;
let losses = 0;

function countWins() {
    if (roundResult === 'win') {
        ++wins;
        return wins;
    }
}

function countLosses() {
    if (roundResult === 'lose') {
        ++losses;
        return losses;
    }
}

//evaluate wins and losses and announce final result

function finalResult() {
    if (wins > losses) {
        alert(`CONGRATULATIONS! \n\n YOU WIN!`);
    } else {
        alert(`BOO! \n\n YOU LOSE!`);
    }
}


function fullRound() {
    playRound();
    countWins()
    countLosses();
    showRoundResult();
}

//learning loops in next lesson, so only calling the rounds five times for now instead of looping

function game() {
    fullRound();
    fullRound();
    fullRound();
    fullRound();
    fullRound();
    finalResult();
}

game();
