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
  playerBtns.forEach((playerBtn) => playerBtn.classList.remove("active"));
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
  computerBtns.forEach((computerBtn) => computerBtn.classList.remove("active"));
  computerBtn = document.querySelector(
    `#computer-btns button[name="${computerChoice}"]`
  );
  computerBtn.classList.add("active");
}

//Main game logic for one round

function playRound() {
  getPlayerChoice(this);
  highlightPlayerChoice(this);
  getComputerChoice();
  highlightComputerChoice(computerChoice);
  console.log(playerChoice, computerChoice);
}

//Event handler to start a round

playerBtns.forEach((playerBtn) => {
  playerBtn.addEventListener("click", playRound);
});
