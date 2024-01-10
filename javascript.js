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

function playRound() {
    const playerSelection = getPlayerChoice();
        console.log(playerSelection);
    const computerSelection = getComputerChoice();
        console.log(computerSelection);
        if (playerSelection === 'rock') {
            switch (computerSelection) {
                case 'rock': 
                    return roundResult = 'tie';
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
                    return roundResult = 'tie';
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
                    return roundResult = 'tie';
            };      
        } else {
                return roundResult = 'error';
            }
        }

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
        };
        alert(`You have ${wins} wins and ${losses} losses!`)
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

/*function finalResult() {
    
}
*/

function fullRound() {
    playRound();
    countWins()
    countLosses();
    showRoundResult();
}
//test game

function testGame() {
    fullRound();
    fullRound();
}

TAKE TIE OPTION OUT OF ROUND RESULT FUNCTION!

testGame();

// play 5 rounds
// write a function to alert wins and losses
// use a variable to set 5 - wins as the losses
// add alert to fullRound();
// add final result alert