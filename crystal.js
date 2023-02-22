// ---------- CRYSTAL STATES ---------- //

function crystalHealth() {
  // console.log("CRYSTAL HEALTH: " + crystalHP);
  const crystalHealthDisplay = document.querySelector("#healthText");

  crystalHealthDisplay.innerHTML = crystalHP + "%";

  if (orcsAttacking > 0) {
    crystalHP--;
    crystalAttacked();
  } else {
    document
      .querySelector("#crystal_sprite")
      .classList.remove("crystal_attacked");
  }
  if (crystalHP === 0) {
    console.log("YOU LOSE");
    gameOverScreen();
    return;
  }
}

function crystalAttacked() {
  if (orcsAttacking > 0) {
    document.querySelector("#crystal_sprite").classList.add("crystal_attacked");
  }
}
