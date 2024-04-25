//Save the player's choice in a variable and highlight the chosen button

let playerChoice = "";

const playerBtns = document.querySelectorAll("#player-btns button");

playerBtns.forEach((playerBtn) =>
  playerBtn.addEventListener("click", function (e) {
    playerBtns.forEach((playerBtn) => playerBtn.classList.remove("active"));
    this.classList.add("active");
    playerChoice = playerBtn.getAttribute("name");
    return playerChoice;
  })
);
