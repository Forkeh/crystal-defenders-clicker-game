function musicTitle() {
  document.querySelector("#musicTitle").currentTime = 0;
  document.querySelector("#musicTitle").volume = 0.2;
  document.querySelector("#musicTitle").play();
}

function musicGame() {
  document.querySelector("#musicTitle").pause();
  document.querySelector("#musicVictory").pause();
  document.querySelector("#musicDefeat").pause();
  document.querySelector("#musicGame").currentTime = 0;
  document.querySelector("#musicGame").volume = 0.1;
  document.querySelector("#musicGame").play();
}

function musicVictory() {
  document.querySelector("#musicGame").pause();

  document.querySelector("#musicVictory").currentTime = 0;
  document.querySelector("#musicVictory").volume = 0.4;
  document.querySelector("#musicVictory").play();
  document.querySelector("#victoryHuzzah").currentTime = 0;
  document.querySelector("#victoryHuzzah").volume = 0.6;
  document.querySelector("#victoryHuzzah").play();
}

function musicDefeat() {
  document.querySelector("#musicGame").pause();

  document.querySelector("#musicDefeat").currentTime = 0;
  document.querySelector("#musicDefeat").volume = 0.5;
  document.querySelector("#musicDefeat").play();
}

function soundClickButton() {
  document.querySelector("#button_click_sound").currentTime = 0;
  document.querySelector("#button_click_sound").volume = 0.4;
  document.querySelector("#button_click_sound").play();
}

function soundClickScreen() {
  if (Math.random() < 0.5) {
    document.querySelector("#clickSpell1").currentTime = 0;
    document.querySelector("#clickSpell1").volume = 0.4;
    document.querySelector("#clickSpell1").play();
  } else {
    document.querySelector("#clickSpell2").currentTime = 0;
    document.querySelector("#clickSpell2").volume = 0.2;
    document.querySelector("#clickSpell2").play();
  }
}
function soundClickNoMana() {
  document.querySelector("#clickNoMana1").currentTime = 0;
  document.querySelector("#clickNoMana1").volume = 0.3;
  document.querySelector("#clickNoMana1").play();
}

function soundClickOrb() {
  document.querySelector("#clickOrb2").currentTime = 0;
  document.querySelector("#clickOrb2").volume = 0.3;
  document.querySelector("#clickOrb2").play();
}

function soundCrystalHit() {
  const randomNum = Math.random();
  if (randomNum > 0.8) {
    document.querySelector("#crystalHit2").volume = 0.1;
    document.querySelector("#crystalHit2").play();
  } else if (randomNum > 0.6) {
    document.querySelector("#crystalHit3").volume = 0.1;
    document.querySelector("#crystalHit3").play();
  } else if (randomNum > 0.4) {
    document.querySelector("#crystalHit4").volume = 0.1;
    document.querySelector("#crystalHit4").play();
  } else if (randomNum > 0.2) {
    document.querySelector("#crystalHit5").volume = 0.1;
    document.querySelector("#crystalHit5").play();
  }
}

function soundClickOrc() {
  if (Math.random() > 0.8) {
    document.querySelector("#orcDeath1").currentTime = 0;
    document.querySelector("#orcDeath1").volume = 0.3;
    document.querySelector("#orcDeath1").play();
  } else if (Math.random() > 0.7) {
    document.querySelector("#orcDeath2").currentTime = 0;
    document.querySelector("#orcDeath2").volume = 0.3;
    document.querySelector("#orcDeath2").play();
  } else if (Math.random() > 0.5) {
    document.querySelector("#orcDeath3").currentTime = 0;
    document.querySelector("#orcDeath3").volume = 0.3;
    document.querySelector("#orcDeath3").play();
  } else if (Math.random() > 0.4) {
    // Play no sound
  }
}

function soundSpawnOrc() {
  if (Math.random() > 0.5) {
    document.querySelector("#grassRun1").currentTime = 0;
    document.querySelector("#grassRun1").volume = 0.2;
    document.querySelector("#grassRun1").play();
  } else {
    // Play no sound
  }
}

function soundBossApproaching() {
  document.querySelector("#boss_approaching_sound").currentTime = 0;
  document.querySelector("#boss_approaching_sound").volume = 0.3;
  document.querySelector("#boss_approaching_sound").play();
}

function soundReaperHit() {
  if (Math.random() > 0.7) {
    document.querySelector("#reaper_hit").currentTime = 0;
    document.querySelector("#reaper_hit").volume = 0.5;
    document.querySelector("#reaper_hit").play();
  } else {
    // Play no sound
  }
}

function soundReaperDeath() {
  document.querySelector("#reaper_hit").pause();
  document.querySelector("#reaper_death").currentTime = 0;
  document.querySelector("#reaper_death").volume = 0.5;
  document.querySelector("#reaper_death").play();
}
