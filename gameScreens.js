// ---------- SHOW GAME SCREENS ---------- //

function startGameButton() {
  console.log('START GAME BUTTON');
  document.querySelector('#start').classList.add('hidden');
  startGame();
}

function winScreen() {
  stopGame();
  document.querySelector("#win").style.visibility = "visible";
  document.querySelector(
    "#orcs-killed-win"
  ).innerHTML = `You killed ${kills} orcs!`;
}

function gameOverScreen() {
  stopGame();
  document.querySelector("#game_over").style.visibility = "visible";
  document.querySelector(
    "#orcs-killed-lose"
  ).innerHTML = `You killed ${kills} orcs!`;
}


