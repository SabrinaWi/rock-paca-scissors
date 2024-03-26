//Prompt user to choose 'rock', 'paca' or 'scissors'
//TODO replace with button click
//Highlight player choice
//TODO disable buttons on computer side
function getPlayerChoice() {
  const playerChoice = prompt(
    "Please choose 'Rock', 'Paca', or 'Scissors'!"
  ).toLowerCase();
  return playerChoice;
}

//Generate a random choice of 'rock', 'paca' or 'scissors' for the computer's choice

function getComputerChoice() {
  const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paca";
    case 3:
      return "scissors";
  }
}

//TODO show computer choice by highlighting corresponding button

//Play a round of rock. paca, scissors
let roundResult;
let playerSelection;
let computerSelection;

function playRound() {
  playerSelection = getPlayerChoice();
  console.log(playerSelection);
  computerSelection = getComputerChoice();
  console.log(computerSelection);
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        roundResult = "tie";
        itsATie();
        break;
      case "paca":
        return (roundResult = "lose");
        break;
      case "scissors":
        return (roundResult = "win");
    }
  } else if (playerSelection === "paca") {
    switch (computerSelection) {
      case "rock":
        return (roundResult = "win");
        break;
      case "paca":
        roundResult = "tie";
        itsATie();
        break;
      case "scissors":
        return (roundResult = "lose");
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        return (roundResult = "lose");
        break;
      case "paca":
        return (roundResult = "win");
        break;
      case "scissors":
        roundResult = "tie";
        itsATie();
        break;
    }
  } else {
    return (roundResult = "error");
  }
}

//return output to the player and initiate another round in case it was a tie
//TODO display output in message div instead
//TODO change message bc wins will be permanently visible in scoreboard

function showRoundResult() {
  if (roundResult === "win" || roundResult === "lose") {
    alert(
      `You chose ${playerSelection}. \n\n I chose ${computerSelection}! \n\n You ${roundResult}!`
    );
  } else {
    alert(
      `There must have been an ${roundResult}! \n\n I cannot understand what you chose.`
    );
  }
  alert(`You have ${wins} wins and ${winsComputer} winsComputer!`);
}

function itsATie() {
  alert(
    `You chose ${playerSelection}. \n\n I also chose ${computerSelection}! \n\n It's a ${roundResult}! Let's play again!`
  );
  playRound();
}

//count number of wins
//TODO display wins in counter/scoreboard

let winsPlayer = 0;
let winsComputer = 0;

function countWinsPlayer() {
  if (roundResult === "win") {
    ++winsPlayer;
    return wins;
  }
}

function countWinsComputer() {
  if (roundResult === "lose") {
    ++winsComputer;
    return winsComputer;
  }
}

//evaluate wins and winsComputer and announce final result

function finalResult() {
  if (winsPlayer > winsComputer) {
    alert(`CONGRATULATIONS! \n\n YOU WIN!`);
  } else {
    alert(`BOO! \n\n YOU LOSE!`);
  }
}

function fullRound() {
  playRound();
  countWinsPlayer();
  countWinsComputer();
  showRoundResult();
}

//learning loops in next lesson, so only calling the rounds five times for now instead of looping
//TODO replace with loop
const allGames = winsPlayer + winsComputer;

function game() {
  while (allGames < 5) {}

  finalResult();
}

game();
