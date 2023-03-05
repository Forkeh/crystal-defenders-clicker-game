// ---------- ORC RANDOM SPAWN DELAY ---------- //
function randomSpawnDelay() {
  const delay = Math.floor(Math.random() * 5000) + 1000;
  return delay;
}

// ---------- ORC RANDOM SPAWN PATH ---------- //
const orcPathList = ["orc_run1", "orc_run2", "orc_run3"];
// const orcPathList = ["orc_run3"];

function randomOrcPath(orcContainer, classList) {
  const randomIndex = Math.floor(Math.random() * orcPathList.length);
  const randomPath = classList[randomIndex];
  orcContainer.classList.add(randomPath);
}

// ---------- ORC1 FUNCTIONS ---------- //

function Orc1Spawn() {
  // console.log("SPAWN ORC1");

  soundSpawnOrc();

  orc1SpawnTimerId = setTimeout(() => {
    orc1_container.classList.remove("pauseAnimation");
    randomOrcPath(orc1_container, orcPathList);

    orc1_container.style.pointerEvents = "auto";
    orc1_container.style.visibility = "visible";

    orc1_sprite.setAttribute("src", "images/Orc/orc_run.png");

    orc1_container.addEventListener("animationend", orc1Attack);
  }, randomSpawnDelay());

  orc1_sprite.addEventListener("mousedown", orc1Click);
}

function orc1Click() {
  console.log("CLICK ORC1");

  
  if (mana > 0) {
    soundClickOrc();

    orc1_sprite.removeEventListener("mousedown", orc1Click);
    orc1_container.removeEventListener("animationend", orc1Attack);

    orc1_container.style.pointerEvents = "none";

    orc1_container.classList.add("pauseAnimation");
    orc1_sprite.classList.add("orc_death");
    document.querySelector("#orc1_shadow").classList.add("orc_death_shadow");
    orc1_sprite.classList.remove("orc_attack");

    orc1_sprite.setAttribute("src", "images/Orc/orc_death1.png");

    setTimeout(() => {
      orc1_container.style.visibility = "hidden";
      orc1_sprite.classList.remove("orc_death");
      document
        .querySelector("#orc1_shadow")
        .classList.remove("orc_death_shadow");

      orc1_container.className = "";

      if (!hasGameFinished) {
        Orc1Spawn();
      }
    }, 1500);

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function orc1Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);


  orc1_container.removeEventListener("animationend", orc1Attack);
  

  orc1_sprite.classList.add("orc_attack");
  orc1_sprite.setAttribute("src", "images/Orc/orc_attack1.png");
}

// ---------- ORC2 FUNCTIONS ---------- //

function Orc2Spawn() {
  // console.log("SPAWN ORC2");

  soundSpawnOrc();

  orc2SpawnTimerId = setTimeout(() => {
    randomOrcPath(orc2_container, orcPathList);
    orc2_container.style.pointerEvents = "auto";
    orc2_container.style.visibility = "visible";

    orc2_sprite.setAttribute("src", "images/Orc/orc_run.png");

    orc2_container.addEventListener("animationend", orc2Attack);
  }, randomSpawnDelay());

  orc2_sprite.addEventListener("mousedown", orc2Click);
}

function orc2Click() {
  console.log("CLICK ORC2");

  
  if (mana > 0) {
    soundClickOrc();

    orc2_sprite.removeEventListener("mousedown", orc2Click);
    orc2_container.removeEventListener("animationend", orc2Attack);

    orc2_container.style.pointerEvents = "none";

    orc2_container.classList.add("pauseAnimation");
    orc2_sprite.classList.add("orc_death");
    document.querySelector("#orc2_shadow").classList.add("orc_death_shadow");
    orc2_sprite.classList.remove("orc_attack");

    orc2_sprite.setAttribute("src", "images/Orc/orc_death2.png");

    setTimeout(() => {
      orc2_container.style.visibility = "hidden";
      orc2_sprite.classList.remove("orc_death");
      document
        .querySelector("#orc2_shadow")
        .classList.remove("orc_death_shadow");

      orc2_container.className = "";

      if (!hasGameFinished) {
        Orc2Spawn();
      }
    }, 1500);

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function orc2Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc2_container.removeEventListener("animationend", orc2Attack);

  orc2_sprite.classList.add("orc_attack");
  orc2_sprite.setAttribute("src", "images/Orc/orc_attack2.png");
}

// ---------- ORC3 FUNCTIONS ---------- //

function Orc3Spawn() {
  // console.log("SPAWN ORC3");

  soundSpawnOrc();

  orc3SpawnTimerId = setTimeout(() => {
    randomOrcPath(orc3_container, orcPathList);
    orc3_container.style.pointerEvents = "auto";
    orc3_container.style.visibility = "visible";

    orc3_sprite.setAttribute("src", "images/Orc/orc_run.png");

    orc3_container.addEventListener("animationend", orc3Attack);
  }, randomSpawnDelay());

  orc3_sprite.addEventListener("mousedown", orc3Click);
}

function orc3Click() {
  console.log("CLICK ORC3");

  
  if (mana > 0) {
    soundClickOrc();

    orc3_sprite.removeEventListener("mousedown", orc3Click);
    orc3_container.removeEventListener("animationend", orc3Attack);

    orc3_container.style.pointerEvents = "none";

    orc3_container.classList.add("pauseAnimation");
    orc3_sprite.classList.add("orc_death");
    document.querySelector("#orc3_shadow").classList.add("orc_death_shadow");
    orc3_sprite.classList.remove("orc_attack");

    orc3_sprite.setAttribute("src", "images/Orc/orc_death3.png");

    setTimeout(() => {
      orc3_container.style.visibility = "hidden";
      orc3_sprite.classList.remove("orc_death");
      document
        .querySelector("#orc3_shadow")
        .classList.remove("orc_death_shadow");

      orc3_container.className = "";

      if (!hasGameFinished) {
        Orc3Spawn();
      }
    }, 1500);

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function orc3Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc3_container.removeEventListener("animationend", orc3Attack);

  orc3_sprite.classList.add("orc_attack");
  orc3_sprite.setAttribute("src", "images/Orc/orc_attack3.png");
}

// ---------- ORC4 FUNCTIONS ---------- //

function Orc4Spawn() {
  // console.log("SPAWN ORC4");

  soundSpawnOrc();

  orc4SpawnTimerId = setTimeout(() => {
    randomOrcPath(orc4_container, orcPathList);
    orc4_container.style.pointerEvents = "auto";
    orc4_container.style.visibility = "visible";

    orc4_sprite.setAttribute("src", "images/Orc/orc_run.png");

    orc4_container.addEventListener("animationend", orc4Attack);
  }, randomSpawnDelay());

  orc4_sprite.addEventListener("mousedown", orc4Click);
}

function orc4Click() {
  console.log("CLICK ORC4");

  
  if (mana > 0) {
    soundClickOrc();

    orc4_sprite.removeEventListener("mousedown", orc4Click);
    orc4_container.removeEventListener("animationend", orc4Attack);

    orc4_container.style.pointerEvents = "none";

    orc4_container.classList.add("pauseAnimation");
    orc4_sprite.classList.add("orc_death");
    document.querySelector("#orc4_shadow").classList.add("orc_death_shadow");
    orc4_sprite.classList.remove("orc_attack");

    orc4_sprite.setAttribute("src", "images/Orc/orc_death4.png");

    setTimeout(() => {
      orc4_container.style.visibility = "hidden";
      orc4_sprite.classList.remove("orc_death");
      document
        .querySelector("#orc4_shadow")
        .classList.remove("orc_death_shadow");

      orc4_container.className = "";

      if (!hasGameFinished) {
        Orc4Spawn();
      }
    }, 1500);

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function orc4Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc4_container.removeEventListener("animationend", orc4Attack);

  orc4_sprite.classList.add("orc_attack");
  orc4_sprite.setAttribute("src", "images/Orc/orc_attack4.png");
}

// ---------- ORC5 FUNCTIONS ---------- //

function Orc5Spawn() {
  // console.log("SPAWN ORC5");

  soundSpawnOrc();

  orc5SpawnTimerId = setTimeout(() => {
    randomOrcPath(orc5_container, orcPathList);
    orc5_container.style.pointerEvents = "auto";
    orc5_container.style.visibility = "visible";

    orc5_sprite.setAttribute("src", "images/Orc/orc_run.png");

    orc5_container.addEventListener("animationend", orc5Attack);
  }, randomSpawnDelay());

  orc5_sprite.addEventListener("mousedown", orc5Click);
}

function orc5Click() {
  console.log("CLICK ORC5");

  
  if (mana > 0) {
    soundClickOrc();

    orc5_sprite.removeEventListener("mousedown", orc5Click);
    orc5_container.removeEventListener("animationend", orc5Attack);

    orc5_container.style.pointerEvents = "none";

    orc5_container.classList.add("pauseAnimation");
    orc5_sprite.classList.add("orc_death");
    document.querySelector("#orc5_shadow").classList.add("orc_death_shadow");
    orc5_sprite.classList.remove("orc_attack");

    orc5_sprite.setAttribute("src", "images/Orc/orc_death5.png");

    setTimeout(() => {
      orc5_container.classList.add("hidden");
      orc5_sprite.classList.remove("orc_death");
      document
        .querySelector("#orc5_shadow")
        .classList.remove("orc_death_shadow");

      orc5_container.className = "";

      if (!hasGameFinished) {
        Orc5Spawn();
      }
    }, 1500);

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function orc5Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc5_container.removeEventListener("animationend", orc5Attack);

  orc5_sprite.classList.add("orc_attack");
  orc5_sprite.setAttribute("src", "images/Orc/orc_attack5.png");
}

// ---------- ORC6 FUNCTIONS ---------- //

function Orc6Spawn() {
  // console.log("SPAWN ORC6");

  soundSpawnOrc();

  orc6SpawnTimerId = setTimeout(() => {
    randomOrcPath(orc6_container, orcPathList);
    orc6_container.style.pointerEvents = "auto";
    orc6_container.classList.remove("hidden");

    orc6_sprite.setAttribute("src", "images/Orc/orc_run.png");

    orc6_container.addEventListener("animationend", orc6Attack);
  }, randomSpawnDelay());

  orc6_sprite.addEventListener("mousedown", orc6Click);
}

function orc6Click() {
  // console.log("CLICK ORC6");

  if (mana > 0) {
    soundClickOrc();

    orc6_sprite.removeEventListener("mousedown", orc6Click);
    orc6_container.removeEventListener("animationend", orc6Attack);

    orc6_container.style.pointerEvents = "none";

    orc6_container.classList.add("pauseAnimation");
    orc6_sprite.classList.add("orc_death");
    document.querySelector("#orc6_shadow").classList.add("orc_death_shadow");
    orc6_sprite.classList.remove("orc_attack");

    orc6_sprite.setAttribute("src", "images/Orc/orc_death6.png");

    setTimeout(() => {
      orc6_container.classList.add("hidden");
      orc6_sprite.classList.remove("orc_death");
      document
        .querySelector("#orc6_shadow")
        .classList.remove("orc_death_shadow");

      orc6_container.className = "";

      if (!hasGameFinished) {
        Orc6Spawn();
      }
    }, 1500);

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
  }
}

function orc6Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc6_container.removeEventListener("animationend", orc6Attack);

  orc6_sprite.classList.add("orc_attack");
  orc6_sprite.setAttribute("src", "images/Orc/orc_attack6.png");
}
