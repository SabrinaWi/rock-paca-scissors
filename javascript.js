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
        roundResult = "loss";
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
        roundResult = "loss";
    }
  } else if (playerChoice === "scissors-btn") {
    switch (computerChoice) {
      case "rock-btn":
        roundResult = "loss";
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

//Output for the #msg paragraph

const msg = document.querySelector("#msg");

function evaluateResultMsg(roundResult) {
  switch (roundResult) {
    case "win":
      msg.textContent = "You win! Well done!";
      break;
    case "loss":
      msg.textContent = "You lose! Too bad!";
      break;
    case "tie":
      msg.textContent = "It's a tie! Let's try that again!";
      break;
    default:
      msg.textContent =
        "I'm so sorry, something seems to have gone wrong. Maybe the alpaca ran off!";
  }
}

//Main game logic for one round
//TODO rmv console.log();

function playRound() {
  getPlayerChoice(this);
  highlightPlayerChoice(this);
  generateComputerChoice();
  highlightComputerChoice(computerChoice);
  console.log(playerChoice, computerChoice);
  evaluateRoundResult(playerChoice, computerChoice);
  console.log(roundResult);
  evaluateResultMsg(roundResult);
}

//Event handler to start a round

playerBtns.forEach((playerBtn) => {
  playerBtn.addEventListener("click", playRound);
});
