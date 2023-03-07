"use strict";

function reaperSpawn() {
  reaperSpawnTimerId = setTimeout(() => {
    // console.log("REAPER SPAWN");

    soundBossApproaching();

    boss_approaching_text.classList.remove("hidden");
    boss_approaching_text.classList.add("boss_approaching");

    reaper_hp_text.style.visibility = "visible";
    reaper_hp_text.classList.add("reaper_hp_text");
    reaper_hp_text.innerHTML = reaperHP + " HP";
    reaper_container.classList.add("reaper_path");
    reaper_sprite.setAttribute("src", "images/Reaper/reaper_run.png");
    reaper_container.style.pointerEvents = "auto";

    let reaper_path_anim = document.querySelector(".reaper_path");

    reaper_path_anim.addEventListener("animationend", reaperAttack);
    reaper_container.removeEventListener("animationend", reaperAttack); //Don't know why this needs to be here, would think line above would be enough
    reaper_container.addEventListener("mousedown", reaperClick);
  }, 40000);
}

function reaperAttack() {
  // console.log("REAPER ATTACK");
  reaper_container.style.pointerEvents = "none";
  reaper_sprite.setAttribute("src", "images/Reaper/reaper_attack.png");
  reaper_container.removeEventListener("animationend", reaperAttack);
  setTimeout(() => {
    reaperGameOver();
  }, 1000);
}

function reaperClick() {
  // console.log(`CLICK REAPER`);
  if (mana > 0) {
    soundReaperHit();

    reaperHP--;

    reaper_hp_text.innerHTML = reaperHP + " HP";

    if (reaperHP > 0) {
      console.log(`REAPER HP: ${reaperHP}`);
      reaper_sprite.classList.remove("reaper_click");
      reaper_sprite.offsetHeight;
      reaper_sprite.classList.add("reaper_click");
    } else if (reaperHP === 0) {
      reaper_hp_text.style.visibility = "hidden";
      reaperDeath();
    }
  }
}

function reaperDeath() {
  // console.log("REAPER DEATH");

  soundReaperDeath();

  reaper_sprite.classList.remove("reaper_click");
  reaper_sprite.offsetHeight;
  reaper_sprite.classList.add("orc_death");

  reaper_sprite.removeEventListener("mousedown", reaperClick);
  reaper_sprite.removeEventListener("animationend", reaperGameOver);
  reaper_container.removeEventListener("animationend", reaperAttack);

  reaper_container.classList.add("pauseAnimation");
  reaper_container.style.pointerEvents = "none";
  reaper_sprite.classList.remove("reaper_attack");
  reaper_sprite.setAttribute("src", "images/Reaper/reaper_death.png");

  reaperSpawnTimerId = setTimeout(() => {
    reaper_container.classList.add("hidden");
    reaper_sprite.classList.remove("reaper_attack");
    reaper_container.classList.remove("reaper_path");
    reaper_sprite.classList.remove("orc_death");
  }, 1000);
}

function reaperGameOver() {
  // console.log("REAPER GAME OVER");
  soundCrystalDeath();
  gameOverScreen();
}
