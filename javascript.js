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

function generateComputerChoice() {
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

//Evaluate result for one round

let roundResult = "";

function evaluateRoundResult(playerChoice, computerChoice) {
  if (playerChoice === "rock-btn") {
    switch (computerChoice) {
      case "rock-btn":
        roundResult = "tie";
        break;
      // itsATie();
      case "paca-btn":
        roundResult = "lose";
        break;
      case "scissors-btn":
        roundResult = "win";
    }
  } else if (playerChoice === "paca-btn") {
    switch (computerChoice) {
      case "rock-btn":
        roundResult = "win";
        break;
      case "paca-btn":
        roundResult = "tie";
        break;
      // itsATie();
      case "scissors-btn":
        roundResult = "lose";
    }
  } else if (playerChoice === "scissors-btn") {
    switch (computerChoice) {
      case "rock-btn":
        roundResult = "lose";
        break;
      case "paca-btn":
        roundResult = "win";
        break;
      case "scissors-btn":
        roundResult = "tie";
      // itsATie();
    }
  } else {
    roundResult = "error";
  }
  return roundResult;
}

//Main game logic for one round

function playRound() {
  getPlayerChoice(this);
  highlightPlayerChoice(this);
  generateComputerChoice();
  highlightComputerChoice(computerChoice);
  console.log(playerChoice, computerChoice);
  evaluateRoundResult(playerChoice, computerChoice);
  console.log(roundResult);
}

//Event handler to start a round

playerBtns.forEach((playerBtn) => {
  playerBtn.addEventListener("click", playRound);
});
