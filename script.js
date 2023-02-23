"use strict";

window.addEventListener("load", programStart);

// ---------- GAME VARIABLES ---------- //
let crystalHP = 100; // How much HP the player has
let crystalHPSpeed = 300; // How fast the HP depletes while under attack
let countdown = 60; // How long the player has to survive to win
let mana = 4;
let kills = 0;
let orcsAttacking = 0;
let orbClicked = false;
let hasGameFinished = false;

let orc1SpawnTimerId;
let orc2SpawnTimerId;
let orc3SpawnTimerId;
let orc4SpawnTimerId;
let crystalHPTimerId;
let countdownIntervalId;

// ---------- GAME ELEMENTS ---------- //
const energyContainer = document.querySelector("#energy_container");
const energySprite = document.querySelector("#energy_sprite");
const crystalContainer = document.querySelector("#crystal_container");
const crystalsprite = document.querySelector("#crystal_sprite");
const wizardContainer = document.querySelector("#wizard_container");
const orc1_container = document.querySelector("#orc1_container");
const orc1_sprite = document.querySelector("#orc1_sprite");
const orc2_container = document.querySelector("#orc2_container");
const orc2_sprite = document.querySelector("#orc2_sprite");
const orc3_container = document.querySelector("#orc3_container");
const orc3_sprite = document.querySelector("#orc3_sprite");
const orc4_container = document.querySelector("#orc4_container");
const orc4_sprite = document.querySelector("#orc4_sprite");

// ---------- GAME START ---------- //
function programStart() {
  // console.log("PROGRAM START");

elementsHide();
  
  
}

function startGame() {


  elementsShow();
  countDown();
  spawnOrb();
  Orc1Spawn();
  Orc2Spawn();
  Orc3Spawn();
  Orc4Spawn();
  
  crystalHealth(crystalHPSpeed); // How fast crystal loses hp

  document.querySelector("#game").addEventListener("mousedown", clickScreen);
}