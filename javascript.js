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




