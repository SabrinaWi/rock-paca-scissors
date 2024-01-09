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

function playRound () {
    const playerSelection = getPlayerChoice();
        console.log(playerSelection);
    const computerSelection = getComputerChoice();
        console.log(computerSelection);
        if (playerSelection === 'rock') {
            switch (computerSelection) {
                case 'rock': 
                    return 'tie';
                    break;
                case 'paper':
                    return 'lose';
                    break;
                case 'scissors':
                    return 'win';
            };
        } else if (playerSelection === 'paper') {
            switch (computerSelection) {
                case 'rock': 
                    return 'win';
                    break;
                case 'paper':
                    return 'tie';
                    break;
                case 'scissors':
                    return 'lose';
            };       
        } else if (playerSelection === 'scissors') {
            switch (computerSelection) {
                case 'rock': 
                    return 'lose';
                    break;
                case 'paper':
                    return 'win';
                    break;
                case 'scissors':
                    return 'tie';
            };      
        } else {
                return 'error';
            }
        }

let roundResult = playRound();

//return output to the player and initiate another round in case it was a tie

function showRoundResult() {
        if (roundResult === 'win' || roundResult === 'lose') {
            alert(`You ${roundResult}!`);
        } else if (roundResult === 'tie') {
            alert(`It's a ${roundResult}! Let's play again!`);
            roundResult = playRound();
            showRoundResult();
        } else {
            alert(`There must have been an ${roundResult}! I cannot understand what you chose.`)
        }
    }

showRoundResult();  

//GAME OF FIVE

//count number of wins and losses after each round

function winCount() {
    let wins = 0;
    let losses = 0; 
    roundResult === 'win' ? ++wins : ++losses; 
}

//alert number of wins and losses after each round

//alert a final result of win or loss




