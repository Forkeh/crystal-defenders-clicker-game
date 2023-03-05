"use strict";

window.addEventListener("load", programStart);

// ---------- GAME VARIABLES ---------- //
const initialCountdown = 6; // How long the player has to survive to win
let countdown = initialCountdown;
const initialCrystalHP = 100; // How much HP the player has
let crystalHP = initialCrystalHP;
let crystalHPSpeed = 200; // How fast the HP depletes while under attack, lower is faster
let mana = 4; // How many times you can click before needing to 'reload' with an orb
let kills = 0; // keeps track of overall kills
const InitialReaperHP = 10; // How much HP the reaper has
let reaperHP = InitialReaperHP; // How much HP the reaper has
let orcsAttacking = 0; // Keeps track of how many orcs are hitting the crystal
let orbClicked = false;
let hasGameFinished = false;

// Timer Id's, using these to stop timers if game ends
let orc1SpawnTimerId;
let orc2SpawnTimerId;
let orc3SpawnTimerId;
let orc4SpawnTimerId;
let orc5SpawnTimerId;
let orc6SpawnTimerId;
let reaperSpawnTimerId;
let crystalHPTimerId;
let countdownIntervalId;

// ---------- GAME ELEMENTS ---------- //

const ligntningContainer = document.querySelector("#ligntningStrike_container");
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
const orc5_container = document.querySelector("#orc5_container");
const orc5_sprite = document.querySelector("#orc5_sprite");
const orc6_container = document.querySelector("#orc6_container");
const orc6_sprite = document.querySelector("#orc6_sprite");
const reaper_container = document.querySelector('#reaper_container');
const reaper_sprite = document.querySelector('#reaper_sprite');
const reaper_hp_text = document.querySelector("#reaper_hp_text");
const boss_approaching_text = document.querySelector("#boss_approaching_text");

// ---------- GAME START ---------- //
function programStart() {
  // musicTitle();
  elementsHide();
}

function startGame() {
  elementsShow();
  musicGame();
  countDown();
  spawnOrb();
  Orc1Spawn();
  Orc2Spawn();
  Orc3Spawn();
  Orc4Spawn();
  Orc5Spawn();
  Orc6Spawn();
  reaperSpawn();
  crystalHealth(crystalHPSpeed); // How fast crystal loses hp

  document.querySelector("#game").addEventListener("mousedown", clickScreen);
}
