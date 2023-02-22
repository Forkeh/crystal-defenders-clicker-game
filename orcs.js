// ---------- ORC RANDOM SPAWN DELAY ---------- //
function randomSpawnDelay() {
  const delay = Math.floor(Math.random() * 3000) + 1000;
  return delay;
}

// ---------- ORC RANDOM SPAWN PATH ---------- //
const orcPathList = ["orc_run1", "orc_run2"];

function randomOrcPath(element, classList) {
  const randomIndex = Math.floor(Math.random() * orcPathList.length);
  const randomPath = classList[randomIndex];
  element.classList.add(randomPath);
}

// ---------- ORC1 FUNCTIONS ---------- //

function Orc1Spawn() {
  // console.log("SPAWN ORC");

  //Hvorfor skal der være setTimeout på for at tilføje orc_run?!
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

function Orc2Spawn() {
  // console.log("SPAWN ORC");

  //Hvorfor skal der være setTimeout på for at tilføje orc_run?!
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

function orc2Attack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc2_container.removeEventListener("animationend", orc2Attack);

  orc2_sprite.classList.add("orc_attack");
  orc2_sprite.setAttribute("src", "images/Orc/orc_attack.png");
}
