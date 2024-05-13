//Safe player and computer choices to variables

let playerChoice = "";
let computerChoice = "";

const playerBtns = document.querySelectorAll("#player-btns button");
const computerBtns = document.querySelectorAll("#computer-btns button");

//Get player choice

function getPlayerChoice(playerBtn) {
  playerChoice = playerBtn.getAttribute("name");
}

//Highlight player choice

function highlightPlayerChoice(playerBtn) {
  if (playerBtn.classList.contains("active")) {
    // Button is already active, toggle to second color
    playerBtn.classList.toggle("second-color");
  } else {
    // Button is not active, toggle to active color
    rmvHighlight(playerBtns);
    playerBtn.classList.remove("second-color");
    playerBtn.classList.add("active");
  }
}

//Generate computer choice

function generateComputerChoice() {
  const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  switch (random) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paca";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
}

//Highlight computer choice

function highlightComputerChoice(computerChoice) {
  computerBtn = document.querySelector(
    `#computer-btns button[name="${computerChoice}"]`
  );
  if (computerBtn.classList.contains("active")) {
    computerBtn.classList.toggle("second-color");
  } else {
    rmvHighlight(computerBtns);
    computerBtn.classList.remove("second-color");
    computerBtn.classList.add("active");
  }
}

// Function to remove highlight from buttons

function rmvHighlight(buttons) {
  buttons.forEach((button) => button.classList.remove("active"));
}

//Evaluate result for one round

let roundResult = "";

function evaluateRoundResult(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        roundResult = "tie";
        break;
      // itsATie();
      case "paca":
        roundResult = "loss";
        break;
      case "scissors":
        roundResult = "win";
    }
  } else if (playerChoice === "paca") {
    switch (computerChoice) {
      case "rock":
        roundResult = "win";
        break;
      case "paca":
        roundResult = "tie";
        break;
      // itsATie();
      case "scissors":
        roundResult = "loss";
    }
  } else if (playerChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        roundResult = "loss";
        break;
      case "paca":
        roundResult = "win";
        break;
      case "scissors":
        roundResult = "tie";
      // itsATie();
    }
  } else {
    roundResult = "error";
  }
  return roundResult;
}

//Output round result for the #msg paragraph

let resultMsg = "";

function createResultMsg(playerChoice, roundResult) {
  if (playerChoice === "rock") {
    switch (roundResult) {
      case "win":
        resultMsg =
          `${playerChoice[0].toUpperCase()}` +
          `${playerChoice.slice(1)} beats ${computerChoice}! `;
        break;
      case "loss":
        resultMsg =
          `The al${computerChoice} ` +
          `spits on the ${playerChoice} and kicks it away! `;
        break;
      case "tie":
        resultMsg = "Great minds think alike! ";
    }
  } else if (playerChoice === "paca") {
    switch (roundResult) {
      case "win":
        resultMsg =
          `The al${playerChoice} ` +
          `spits on the ${computerChoice} and kicks it away! `;
        break;
      case "loss":
        resultMsg =
          `${computerChoice[0].toUpperCase()}` +
          `${computerChoice.slice(1)}
        shear the al${playerChoice}! `;
        break;
      case "tie":
        resultMsg = "Great minds think alike! ";
    }
  } else if (playerChoice === "scissors") {
    {
      switch (roundResult) {
        case "win":
          resultMsg =
            `${playerChoice[0].toUpperCase()}` +
            `${playerChoice.slice(1)} shear the al${computerChoice}! `;
          break;
        case "loss":
          resultMsg =
            `${computerChoice[0].toUpperCase()}` +
            `${computerChoice.slice(1)}
          beats ${playerChoice}! `;
          break;
        case "tie":
          resultMsg = "Great minds think alike! ";
      }
    }
  }
  return resultMsg;
}

const msg = document.querySelector("#msg");

function displayResultMsg(roundResult, resultMsg) {
  switch (roundResult) {
    case "win":
      msg.textContent = `${resultMsg} You win! Well done!`;
      msg.style.color = "rgb(163, 212, 163)";
      break;
    case "loss":
      msg.textContent = `${resultMsg} You lose! Too bad!`;
      msg.style.color = "rgb(255,79,91)";
      break;
    case "tie":
      msg.textContent = `${resultMsg} It's a tie! `;
      const tieMsg = document.createElement("p");
      tieMsg.textContent = "Let's try that again! Click a button!";
      msg.appendChild(tieMsg);
      msg.style.color = "rgb(255,153,102)";
      break;
    default:
      msg.textContent =
        "I'm so sorry, something seems to have gone wrong. Maybe the alpaca ran off!";
  }
}

//Count number of player wins

let playerWins = 0;

function countPlayerWins(roundResult) {
  if (roundResult === "win") {
    ++playerWins;
    return playerWins;
  }
}

//Display number of player wins

const playerCounter = document.querySelector(".player-counter");

function displayPlayerWins(playerWins) {
  playerCounter.textContent = `${playerWins}`;
}

//Count number of computer wins

let computerWins = 0;

function countComputerWins(roundResult) {
  if (roundResult === "loss") {
    ++computerWins;
    return computerWins;
  }
}

//Display number of computer wins

const computerCounter = document.querySelector(".computer-counter");

function displayComputerWins(computerWins) {
  computerCounter.textContent = `${computerWins}`;
}

//Main game logic for one round in phases

function choicesPhase(playerBtn) {
  getPlayerChoice(playerBtn);
  highlightPlayerChoice(playerBtn);
  generateComputerChoice();
  highlightComputerChoice(computerChoice);
}

function evaluationPhase(playerChoice, computerChoice) {
  evaluateRoundResult(playerChoice, computerChoice);
  createResultMsg(playerChoice, roundResult);
  displayResultMsg(roundResult, resultMsg);
}

function updateCountersPhase(roundResult) {
  countPlayerWins(roundResult);
  displayPlayerWins(playerWins);
  countComputerWins(roundResult);
  displayComputerWins(computerWins);
}

//MAIN GAME BEGINNING

//Event handler to start a game

playerBtns.forEach((playerBtn) => {
  playerBtn.addEventListener("click", playGame);
});

//Remove paragraph that says to click a button

const instruction = document.querySelector("#instruction");

function removeInstruction() {
  instruction.textContent = "";
}

//PLAY GAME

//Main game logic for one round

function playRound(playerBtn) {
  choicesPhase(playerBtn);
  evaluationPhase(playerChoice, computerChoice);
  updateCountersPhase(roundResult);
}

//END OF GAME PHASE

//Check for amount of wins and return gameResult

let winner = "";

function evaluateGameResult(playerWins, computerWins) {
  if (playerWins === 5) {
    winner = "player";
  } else if (computerWins === 5) {
    winner = "computer";
  }
  return winner;
}

function deactivatePlayerButtons(winner) {
  if (winner === "player" || winner === "computer") {
    playerBtns.forEach((playerBtn) => {
      playerBtn.disabled = true;
    });
  }
}

function displayWinner(winner) {
  if (winner === "player") {
    msg.textContent = "You've won the game, congratulations!";
    msg.style.color = "rgb(163, 212, 163)";
  } else if (winner === "computer") {
    msg.textContent = "I'm sorry, but you've lost the game!";
    msg.style.color = "rgb(255,79,91)";
  }
}

function endGamePhase() {
  evaluateGameResult(playerWins, computerWins);
  deactivatePlayerButtons(winner);
  displayWinner(winner);
}

//Reset Game/Page phase

const resetGameBtn = document.createElement("button");

function createResetButton(instruction) {
  if (
    msg.textContent === "You've won the game, congratulations!" ||
    msg.textContent === "I'm sorry, but you've lost the game!"
  ) {
    resetGameBtn.textContent = "Click to start a new game!";
    instruction.appendChild(resetGameBtn);
    resetGameBtn.style.backgroundColor = msg.style.color;
  }
}

//Reloads the page

function reloadPage(resetGameBtn) {
  if (resetGameBtn) {
    location.reload();
  }
}

resetGameBtn.addEventListener("click", reloadPage);

//PLAY A FULL GAME

function playGame() {
  removeInstruction();
  playRound(this);
  endGamePhase();
  createResetButton(instruction);
}
