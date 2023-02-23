// ---------- STOP GAME ---------- //

function stopGame() {
  console.log("STOP GAME");

  hasGameFinished = true;
  orcsAttacking = 0;

  clearTimeout(orc1SpawnTimerId);
  clearTimeout(orc2SpawnTimerId);
  clearTimeout(orc3SpawnTimerId);
  clearTimeout(orc4SpawnTimerId);
  clearInterval(crystalHPTimerId);
  clearInterval(countdownIntervalId);

  orc1_container.removeEventListener("animationend", orc1Attack);
  orc1_sprite.removeEventListener("animationend", orc1Attack);
  orc2_container.removeEventListener("animationend", orc2Attack);
  orc2_sprite.removeEventListener("animationend", orc2Attack);
  orc3_container.removeEventListener("animationend", orc3Attack);
  orc3_sprite.removeEventListener("animationend", orc3Attack);
  orc4_container.removeEventListener("animationend", orc4Attack);
  orc4_sprite.removeEventListener("animationend", orc4Attack);

  crystalsprite.classList.remove("crystal_attacked");

  document.querySelector('#healthText').classList.remove('critical_health');

  orc1_container.classList.add("pauseAnimation");
  orc1_sprite.classList.add("pauseAnimation");
  orc1_container.className = "";
  orc1_sprite.className = "";
  orc2_container.classList.add("pauseAnimation");
  orc2_sprite.classList.add("pauseAnimation");
  orc2_container.className = "";
  orc2_sprite.className = "";
  orc3_container.classList.add("pauseAnimation");
  orc3_sprite.classList.add("pauseAnimation");
  orc3_container.className = "";
  orc3_sprite.className = "";
  orc4_container.classList.add("pauseAnimation");
  orc4_sprite.classList.add("pauseAnimation");
  orc4_container.className = "";
  orc4_sprite.className = "";

  elementsHide();
 
}

// ---------- RESTART GAME ---------- //

function restartGame() {
  console.log("RESTART GAME");
  document.querySelector("#win").style.visibility = "hidden";
  document.querySelector("#game_over").style.visibility = "hidden";

  elementsShow();

  crystalHP = 100;
  crystalHPSpeed = 300;
  countdown = 60;
  mana = 4;
  kills = 0;
  orcsAttacking = 0;
  orbClicked = false;
  hasGameFinished = false;
  fullMana();
  // resetOrb();
  startGame();
}
