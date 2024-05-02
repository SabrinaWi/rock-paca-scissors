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

function evaluateResultMsg(roundResult, choicesMsg) {
  switch (roundResult) {
    case "win":
      msg.textContent = `${choicesMsg} You win! Well done!`;
      break;
    case "loss":
      msg.textContent = `${choicesMsg} You lose! Too bad!`;
      break;
    case "tie":
      msg.textContent = `${choicesMsg} It's a tie! Let's try that again!`;
      break;
    default:
      msg.textContent =
        "I'm so sorry, something seems to have gone wrong. Maybe the alpaca ran off!";
  }
}

//count number of wins
//TODO display wins in counter/scoreboard

let winsPlayer = 0;

function countWinsPlayer(roundResult) {
  if (roundResult === "win") {
    ++winsPlayer;
    return winsPlayer;
  }
}

const playerCounter = document.querySelector(".player-counter");

function displayWinsPlayer(winsPlayer) {
  playerCounter.textContent = `${winsPlayer}`;
}

let winsComputer = 0;

function countWinsComputer(roundResult) {
  if (roundResult === "loss") {
    ++winsComputer;
    return winsComputer;
  }
}

const computerCounter = document.querySelector(".computer-counter");

function displayWinsComputer(winsComputer) {
  computerCounter.textContent = `${winsComputer}`;
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
  evaluateResultMsg(roundResult, choicesMsg);
}

function updateCountersPhase(roundResult) {
  countWinsPlayer(roundResult);
  displayWinsPlayer(winsPlayer);
  countWinsComputer(roundResult);
  displayWinsComputer(winsComputer);
}

//Main game logic for one round

function playRound() {
  choicesPhase(this);
  evaluationPhase(playerChoice, computerChoice);
  updateCountersPhase(roundResult);
}

//Event handler to start a round

playerBtns.forEach((playerBtn) => {
  playerBtn.addEventListener("click", playRound);
});
