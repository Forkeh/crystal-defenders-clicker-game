"use strict";

window.addEventListener("load", start);

// ---------- GAME VARIABLES ---------- //
let crystalHP = 100;
let countdown = 60;
let mana = 4;
let kills = 0;
let orcsAttacking = 0;
let orbClicked = false;

const energyContainer = document.querySelector("#energy_container");
const energySprite = document.querySelector("#energy_sprite");
const orc1_container = document.querySelector("#orc1_container");
const orc1_sprite = document.querySelector("#orc1_sprite");
const orc2_container = document.querySelector("#orc2_container");
const orc2_sprite = document.querySelector("#orc2_sprite");


// ---------- GAME START ---------- //

function start() {
  console.log("START");

  setInterval(crystalHealth, 300); // How fast crystal loses hp

  document.querySelector("#game").addEventListener("mousedown", clickScreen);

  countDown();
  Orc1Spawn();
  Orc2Spawn();
  spawnOrb();
}

// ---------- COUNTDOWN ---------- //

function countDown() {
  const countdownDisplay = document.querySelector("#countdownText");

  for (let i = countdown; i >= 0; i--) {
    setTimeout(() => {
      countdownDisplay.innerHTML = i;
      if (i === 0) {
        winScreen();
      }
    }, (countdown - i) * 1000);
  }
}

// ---------- CRYSTAL HEALTH ---------- //

function crystalHealth() {
  // console.log("CRYSTAL HEALTH: " + crystalHP);
  const crystalHealthDisplay = document.querySelector("#healthText");

  crystalHealthDisplay.innerHTML = crystalHP + "%";

  if (orcsAttacking > 0) {
    crystalHP--;
    crystalAttacked();
  } else {
    document.querySelector("#crystal_sprite").classList.remove("crystal_attacked");
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

// ---------- SHOW GAME SCREENS ---------- //

function winScreen() {
  document.querySelector("#win").style.visibility = "visible";
  document.querySelector(
    "#orcs-killed-win"
  ).innerHTML = `You killed ${kills} orcs!`;
}

function gameOverScreen() {
  document.querySelector("#game_over").style.visibility = "visible";
  document.querySelector(
    "#orcs-killed-lose"
  ).innerHTML = `You killed ${kills} orcs!`;
}

// ---------- ORC1 FUNCTIONS ---------- //

function orc1Click() {
  console.log("CLICK ORC1");

  if (mana > 0) {
    orc1_sprite.removeEventListener("mousedown", orc1Click);
    orc1_container.style.pointerEvents = 'none';

    orc1_container.classList.add("pauseAnimation");
    // orc1_sprite.classList.add("orc_death");
    void orc1_sprite.offsetLeft;
    orc1_sprite.classList.remove("orc_attack");

    orc1_sprite.setAttribute("src", "images/Orc/orc_death1.png");

    setTimeout(() => {
      orc1_container.style.visibility = "hidden";
      void orc1_container.offsetLeft;
      orc1_sprite.classList.remove("orc_death");
      orc1_container.classList.remove("pauseAnimation");
      orc1_container.classList.remove("orc_run1");
      Orc1Spawn();
    }, 1500);

    //Hvorfor skal der være setTimeout på for at tilføje orc_run?!

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function Orc1Spawn() {
  // console.log("SPAWN ORC");

  //Hvorfor skal der være setTimeout på for at tilføje orc_run?!
  setTimeout(() => {
    orc1_container.classList.add("orc_run1");
    orc1_container.style.pointerEvents = "auto";
    orc1_container.style.visibility = "visible";

    orc1_sprite.setAttribute("src", "images/Orc/orc_run.png");
    orc1_container.addEventListener("animationend", orc1Attack);
  }, 1000);

  orc1_sprite.addEventListener("mousedown", orc1Click);
}

function orc1Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc1_container.removeEventListener("animationend", orc1Attack);

  orc1_sprite.classList.add("orc_attack");
  orc1_sprite.setAttribute("src", "images/Orc/orc_attack.png");
}




// ---------- ORC2 FUNCTIONS ---------- //

function orc2Click() {
  console.log("CLICK ORC2");

  if (mana > 0) {
    orc2_sprite.removeEventListener("mousedown", orc2Click);
    orc2_container.style.pointerEvents = "none";

    orc2_container.classList.add("pauseAnimation");
    // orc2_sprite.classList.add("orc_death");
    void orc2_sprite.offsetLeft;
    orc2_sprite.classList.remove("orc_attack");

    orc2_sprite.setAttribute("src", "images/Orc/orc_death2.png");

    setTimeout(() => {
      orc2_container.style.visibility = "hidden";
      void orc2_container.offsetLeft;
      orc2_sprite.classList.remove("orc_death");
      orc2_container.classList.remove("pauseAnimation");
      orc2_container.classList.remove("orc_run2");
      Orc2Spawn();
    }, 1500);

    //Hvorfor skal der være setTimeout på for at tilføje orc_run?!

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function Orc2Spawn() {
  // console.log("SPAWN ORC");

  //Hvorfor skal der være setTimeout på for at tilføje orc_run?!
  setTimeout(() => {
    orc2_container.classList.add("orc_run2");
    orc2_container.style.pointerEvents = "auto";
    orc2_container.style.visibility = "visible";

    orc2_sprite.setAttribute("src", "images/Orc/orc_run.png");
    orc2_container.addEventListener("animationend", orc2Attack);
  }, 1000);

  orc2_sprite.addEventListener("mousedown", orc2Click);
}

function orc2Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc2_container.removeEventListener("animationend", orc2Attack);

  orc2_sprite.classList.add("orc_attack");
  orc2_sprite.setAttribute("src", "images/Orc/orc_attack.png");
}

// ---------- WIZARD ATTACK ---------- //

function wizardAttack() {
  const sprite = document.querySelector("#wizard_sprite");
  sprite.classList.add("wizard_attack");
  sprite.setAttribute("src", "images/Wizard/wizard_attack.png");

  setTimeout(() => {
    sprite.setAttribute("src", "images/Wizard/wizard_idle.png");
    sprite.classList.remove("wizard_attack");
  }, 400);
}

// ---------- MANA ORB ---------- //

function clickOrb() {
  orbClicked = true;
  fullMana();
  console.log("CLICK ORB: " + mana + " mana");

  energySprite.removeEventListener("mousedown", clickOrb);

  energyContainer.classList.add("pauseAnimation");
  energySprite.classList.remove("energy_idle");

  energySprite.classList.add("energy_click");

  energySprite.addEventListener("animationend", resetOrb);

  function resetOrb() {
    // console.log("RESET ORB");
    energyContainer.style.visibility = "hidden";
    energyContainer.classList.remove("pauseAnimation");
    energyContainer.classList.remove("energy_move");
    energySprite.classList.remove("energy_click");
    spawnOrb();
  }
}

function spawnOrb() {
  // console.log("SPAWN ORB");

  void energyContainer.offsetLeft;
  energyContainer.style.visibility = "visible";
  energySprite.addEventListener("mousedown", clickOrb);
  energyContainer.classList.add("energy_move");
  energySprite.classList.add("energy_idle");
  setTimeout(() => {}, 100);
}

// ---------- CLICK SCREEN AND MANA ICONS ---------- //

function clickScreen() {
  // console.log("CLICK SCREEN");
  if (orbClicked === true) {
  } else if (mana > 0) {
    wizardAttack();
    decrementMana();
  }
  orbClicked = false;
}

function decrementMana() {
  document.querySelector("#mana" + mana).classList.remove("active_mana");
  document.querySelector("#mana" + mana).classList.add("inactive_mana");
  mana--;
  console.log("CURRENT MANA: " + mana);
}

function fullMana() {
  mana = 4;
  document.querySelector("#mana1").classList.remove("inactive_mana");
  document.querySelector("#mana1").classList.add("active_mana");
  document.querySelector("#mana2").classList.remove("inactive_mana");
  document.querySelector("#mana2").classList.add("active_mana");
  document.querySelector("#mana3").classList.remove("inactive_mana");
  document.querySelector("#mana3").classList.add("active_mana");
  document.querySelector("#mana4").classList.remove("inactive_mana");
  document.querySelector("#mana4").classList.add("active_mana");
  // console.log("FULL MANA: " + mana);
}


