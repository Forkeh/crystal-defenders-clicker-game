// ---------- SHOW GAME SCREENS ---------- //

function startGameButton() {
  // console.log('START GAME BUTTON');

  soundClickButton();

  document.querySelector("#start_window").classList.remove("screen_enter");
  document.querySelector("#start_window").classList.add("screen_exit");
  document.querySelector("#start").classList.add("screen_black_exit");
  setTimeout(() => {
    document.querySelector("#start").classList.add("hidden");
    startGame();
  }, 800);
}

function winScreen() {
  stopGame();
  document.querySelector("#win").style.visibility = "visible";
  document.querySelector("#win").classList.add("screen_black_enter");
  document.querySelector("#win_window").classList.add("screen_enter");

  document
    .querySelector("#win_window")
    .addEventListener("animationend", function () {
      document.querySelector("#win").classList.remove("screen_black_enter");
      document.querySelector("#win_window").classList.remove("screen_enter");
    });

  document.querySelector(
    "#orcs-killed-win"
  ).innerHTML = `You vanquished ${kills} orcs!`;
  musicVictory();
}

function gameOverScreen() {
  stopGame();
  document.querySelector("#game_over").style.visibility = "visible";
  document.querySelector("#game_over").classList.add("screen_black_enter");
  document.querySelector("#game_over_window").classList.add("screen_enter");
document
  .querySelector("#game_over_window")
  .addEventListener("animationend", function () {
    document.querySelector("#game_over").classList.remove("screen_black_enter");
    document.querySelector("#game_over_window").classList.remove("screen_enter");
  });

  document.querySelector(
    "#orcs-killed-lose"
  ).innerHTML = `You killed ${kills} orcs!`;
  musicDefeat();
}
