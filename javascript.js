let playerChoice = "";
let computerChoice = "";

const playerBtns = document.querySelectorAll("#player-btns button");
const computerBtns = document.querySelectorAll("#computer-btns button");

// Function to remove highlight from buttons

function rmvHighlight(buttons) {
  buttons.forEach((button) => button.classList.remove("active"));
}

//Get player choice

function getPlayerChoice(playerBtn) {
  playerChoice = playerBtn.getAttribute("name");
}

//Highlight player choice

function highlightPlayerChoice(playerBtn) {
  rmvHighlight(playerBtns);
  playerBtn.classList.add("active");
}

//Generate computer choice

function getComputerChoice() {
  const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  switch (random) {
    case 1:
      computerChoice = "rock-btn";
      break;
    case 2:
      computerChoice = "paca-btn";
      break;
    case 3:
      computerChoice = "scissors-btn";
      break;
  }
}

//Highlight computer choice

function highlightComputerChoice(computerChoice) {
  rmvHighlight(computerBtns);
  computerBtn = document.querySelector(
    `#computer-btns button[name="${computerChoice}"]`
  );
  computerBtn.classList.add("active");
}

//Get result for one round

let roundResult = "";

function getRoundResult(playerChoice, computerChoice) {
  if (playerChoice === "rock-btn") {
    switch (computerChoice) {
      case "rock-btn":
        return (roundResult = "tie");
      // itsATie();
      case "paca-btn":
        return (roundResult = "lose");
      case "scissors-btn":
        return (roundResult = "win");
    }
  } else if (playerChoice === "paca-btn") {
    switch (computerChoice) {
      case "rock-btn":
        return (roundResult = "win");
      case "paca-btn":
        return (roundResult = "tie");
      // itsATie();
      case "scissors-btn":
        return (roundResult = "lose");
    }
  } else if (playerChoice === "scissors-btn") {
    switch (computerChoice) {
      case "rock-btn":
        return (roundResult = "lose");
      case "paca-btn":
        return (roundResult = "win");
      case "scissors-btn":
        return (roundResult = "tie");
      // itsATie();
    }
  } else {
    return (roundResult = "error");
  }
}

//Main game logic for one round

function playRound() {
  getPlayerChoice(this);
  highlightPlayerChoice(this);
  getComputerChoice();
  highlightComputerChoice(computerChoice);
  console.log(playerChoice, computerChoice);
  getRoundResult(playerChoice, computerChoice);
  console.log(roundResult);
}

//Event handler to start a round

playerBtns.forEach((playerBtn) => {
  playerBtn.addEventListener("click", playRound);
});
