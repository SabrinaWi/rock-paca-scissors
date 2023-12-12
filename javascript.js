//USER INPUT
//Prompt user to input a string saying either 'Rock', 'Paper' or 'Scissors'
//Save the user choice in a variable playerSelection
//Set the user choice string to lowercase

//const playerSelection = prompt("Please choose 'Rock', 'Paper', or 'Scissors'!").toLowerCase();


//COMPUTER CHOICE

//Declare a variable computerSelection
//Choose a random option of either 'rock', 'paper', or 'scissors' <-- How? ==> Random number generator
// generate a random number between 1 and 3
    //const min = 1;
    //const max = 3;
    //const random = Math.floor(Math.random() * (max - min + 1)) + min;
    //match numbers to different return values
//Save that option in computerSelection
function getComputerChoice () {
    
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
                break;

    }
}

let computerSelection = getComputerChoice();

console.log(computerSelection);


//PLAY ROUND

//Evaluate the user choice against the computer choice
//If playerSelection is 'rock' and computerSelection is
//    'rock'     --> tie
//    'paper'    --> loss
//    'scissors' --> win
//If playerSelection is 'paper' and computerSelection is
//    'rock'     --> win
//    'paper'    --> tie
//    'scissors' --> loss
////If playerSelection is 'scissors' and computerSelection is
//    'rock'     --> loss
//    'paper'    --> win
//    'scissors' --> tie
//Save string of 'win', 'loss', or 'tie' in variable roundResult 

//OUTPUT

//Alert message according to win, loss, or tie 
//Remember to use template literals to include player and computer choices
//If result was a tie, display message 'Let's try again!'
//Prompt user to try again.