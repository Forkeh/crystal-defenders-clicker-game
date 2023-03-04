function reaperSpawn() {
  console.log("REAPER SPAWN");
  reaper_container.classList.add("reaper_path");
  reaper_sprite.setAttribute("src", "images/Reaper/reaper_run.png");
  reaper_container.style.pointerEvents = "auto";
  reaper_container.addEventListener("animationend", reaperAttack);
  reaper_container.addEventListener("mousedown", reaperClick);
}

function reaperAttack() {
  console.log('REAPER ATTACK');
  reaper_container.style.pointerEvents = "none";
  reaper_sprite.setAttribute("src", "images/Reaper/reaper_attack.png");
  reaper_container.removeEventListener("animationend", reaperAttack);
  // reaper_container.classList.add("reaper_attack");
  // reaper_container.addEventListener("animationend", reaperGameOver);
  setTimeout(() => {
    reaperGameOver();
  }, 1000);
}

function reaperClick() {
  console.log(`CLICK REAPER`);
  if (mana > 0) {
    reaperHP--;
    if (reaperHP > 0) {
      console.log(`REAPER HP: ${reaperHP}`);
      // reaper_sprite.classList.add("reaper_click");

    } else if (reaperHP === 0){
      reaperDeath();
    }
  }
}

function reaperDeath() {
  console.log('REAPER DEATH');
  reaper_sprite.removeEventListener("mousedown", reaperClick);
  reaper_sprite.removeEventListener("animationend", reaperGameOver);
  reaper_container.removeEventListener("animationend", reaperAttack);

  reaper_container.classList.add("pauseAnimation");
  reaper_container.style.pointerEvents = "none";
  reaper_sprite.classList.remove("reaper_attack");
  reaper_sprite.classList.add("orc_death");
  reaper_sprite.setAttribute("src", "images/Reaper/reaper_death.png");

  reaperSpawnTimerId = setTimeout(() => {
    reaper_container.classList.add("hidden");
    reaper_sprite.classList.remove("reaper_attack");
    reaper_container.classList.remove("reaper_path");
    reaper_sprite.classList.remove("orc_death");
  }, 1000);
}

function reaperGameOver() {
  console.log("REAPER GAME OVER");
  gameOverScreen();
}
