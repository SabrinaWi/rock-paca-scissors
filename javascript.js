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
  rmvHighlight(computerBtns);
  computerBtn = document.querySelector(
    `#computer-btns button[name="${computerChoice}"]`
  );
  computerBtn.classList.add("active");
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

//Output for the #msg paragraph

let choicesMsg = "";

function evaluateChoices(playerChoice, roundResult) {
  if (playerChoice === "rock") {
    switch (roundResult) {
      case "win":
        choicesMsg =
          `${playerChoice[0].toUpperCase()}` +
          `${playerChoice.slice(1)} beats ${computerChoice}! `;
        break;
      case "loss":
        choicesMsg =
          `The al${computerChoice} ` +
          `spits on the ${playerChoice} and kicks it away! `;
        break;
      case "tie":
        choicesMsg = "Great minds think alike! ";
    }
  } else if (playerChoice === "paca") {
    switch (roundResult) {
      case "win":
        choicesMsg =
          `The al${playerChoice} ` +
          `spits on the ${computerChoice} and kicks it away! `;
        break;
      case "loss":
        choicesMsg =
          `${computerChoice[0].toUpperCase()}` +
          `${computerChoice.slice(1)}
        shear the al${playerChoice}! `;
        break;
      case "tie":
        choicesMsg = "Great minds think alike! ";
    }
  } else if (playerChoice === "scissors") {
    {
      switch (roundResult) {
        case "win":
          choicesMsg =
            `${playerChoice[0].toUpperCase()}` +
            `${playerChoice.slice(1)} shear the al${computerChoice}! `;
          break;
        case "loss":
          choicesMsg =
            `${computerChoice[0].toUpperCase()}` +
            `${computerChoice.slice(1)}
          beats ${playerChoice}! `;
          break;
        case "tie":
          choicesMsg = "Great minds think alike! ";
      }
    }
  }
  return choicesMsg;
}

const msg = document.querySelector("#msg");

function displayResultMsg(roundResult, choicesMsg) {
  // TODO Change colors when creating final style
  switch (roundResult) {
    case "win":
      msg.textContent = `${choicesMsg} You win! Well done!`;
      msg.style.color = "green";
      break;
    case "loss":
      msg.textContent = `${choicesMsg} You lose! Too bad!`;
      msg.style.color = "red";
      break;
    case "tie":
      msg.textContent = `${choicesMsg} It's a tie! `;
      const tieSpan = document.createElement("span");
      tieSpan.textContent = "Let's try that again! Click a button!";
      msg.appendChild(tieSpan);
      msg.style.color = "orange";
      break;
    default:
      msg.textContent =
        "I'm so sorry, something seems to have gone wrong. Maybe the alpaca ran off!";
  }
}

//Count number of wins

let playerWins = 0;

function countPlayerWins(roundResult) {
  if (roundResult === "win") {
    ++playerWins;
    return playerWins;
  }
}

const playerCounter = document.querySelector(".player-counter");

function displayPlayerWins(playerWins) {
  playerCounter.textContent = `${playerWins}`;
}

let computerWins = 0;

function countComputerWins(roundResult) {
  if (roundResult === "loss") {
    ++computerWins;
    return computerWins;
  }
}

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
  evaluateChoices(playerChoice, roundResult);
  displayResultMsg(roundResult, choicesMsg);
}

function updateCountersPhase(roundResult) {
  countPlayerWins(roundResult);
  displayPlayerWins(playerWins);
  countComputerWins(roundResult);
  displayComputerWins(computerWins);
}

//Event handler to start a round

playerBtns.forEach((playerBtn) => {
  playerBtn.addEventListener("click", playGame);
});

//Main game logic for one round

function playRound(playerBtn) {
  choicesPhase(playerBtn);
  evaluationPhase(playerChoice, computerChoice);
  updateCountersPhase(roundResult);
}

//MAIN GAME BEGINNING

//Remove paragraph that says to click a button

function removeInstruction() {
  const instruction = document.querySelector("#instruction");
  if (instruction) {
    instruction.remove();
  }
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
    msg.style.color = "green";
  } else if (winner === "computer") {
    msg.textContent = "I'm sorry, but you've lost the game!";
    msg.style.color = "red";
    // TODO change colors when final style is decided
  }
}

//Stop game and reset page

//Reset textContent

// const initialMessage = document.querySelector(".messages");

// function resetTextContent() {
//   message = initialMessage;
// }

// //Reset buttons

// function resetButtons() {
//   rmvHighlight(playerBtns, computerBtns);
// }

function endGamePhase() {
  evaluateGameResult(playerWins, computerWins);
  deactivatePlayerButtons(winner);
  displayWinner(winner);
}

function playGame() {
  removeInstruction();
  playRound(this);
  endGamePhase();
}
