"use strict";

// ---------- CRYSTAL STATES ---------- //

function crystalHealth() {
  // console.log("CRYSTAL HEALTH: " + crystalHP);
  const crystalHealthDisplay = document.querySelector("#healthText");

  crystalHPTimerId = setInterval(() => {
    crystalHealthDisplay.innerHTML = crystalHP + "%";

    if (orcsAttacking > 0) {
      crystalHP--;
      crystalAttacked();
    } else {
      document
        .querySelector("#crystal_sprite")
        .classList.remove("crystal_attacked");
    }
    if (crystalHP < 25) {
      document.querySelector("#healthText").classList.add("critical_health");
    }
    if (crystalHP === 0) {
      console.log("YOU LOSE");
      gameOverScreen();
      return;
    }
  }, crystalHPSpeed);
}

function crystalAttacked() {
  if (orcsAttacking > 0) {
    document.querySelector("#crystal_sprite").classList.add("crystal_attacked");
  }
}
