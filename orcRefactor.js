let orc1SpawnTimerId;
let orc2SpawnTimerId;
let orc3SpawnTimerId;
let orc4SpawnTimerId;
let orc5SpawnTimerId;
let orc6SpawnTimerId;

let kills = 0;
let orcsAttacking = 0;

// ---------- ORC RANDOM SPAWN DELAY ---------- //
function randomSpawnDelay() {
  const delay = Math.floor(Math.random() * 3000) + 1000;
  return delay;
}

// ---------- ORC RANDOM SPAWN PATH ---------- //
const orcPathList = ["orc_run1", "orc_run2", "orc_run3"];
// const orcPathList = ["orc_run3"];            // For testing

function randomOrcPath(orcNumber, classList) {
  let orcNum = orcNumber;
  let orcContainer = document.querySelector("#orc" + orcNum + "_container");

  const randomIndex = Math.floor(Math.random() * orcPathList.length);
  const randomPath = classList[randomIndex];
  orcContainer.classList.add(randomPath);
}

// ---------- ORC FUNCTIONS ---------- //
function orcSpawn(orcNumber) {
  console.log("SPAWN ORC");
  let orcNum = orcNumber;
  let orcSprite = document.querySelector("#orc" + orcNum + "_sprite");
  let orcContainer = document.querySelector("#orc" + orcNum + "_container");

  //   orc1SpawnTimerId = setTimeout(() => {
  // }, randomSpawnDelay());

  orcContainer.classList.remove("pauseAnimation");
  orcSprite.setAttribute("src", "images/Orc/orc_run.png");
  orcContainer.style.pointerEvents = "auto";
  orcContainer.style.visibility = "visible";
  randomOrcPath(orcNum, orcPathList);

  orcContainer.addEventListener("animationend", function () {
    orcAttack(orcNum);
    orcContainer.removeEventListener("animationend", orcAttack);
  });

  orcSprite.addEventListener("mousedown", function () {
    orcClick(orcNum);
    orcSprite.removeEventListener("mousedown", orcClick);
  });
}

function orcAttack(orcNumber) {
  console.log("ORC ATTACK");
  let orcNum = orcNumber;
  let orcSprite = document.querySelector("#orc" + orcNum + "_sprite");
  let orcContainer = document.querySelector("#orc" + orcNum + "_container");

  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING UP: " + orcsAttacking);

  orcSprite.classList.add("orc_attack");
  orcSprite.setAttribute("src", "images/Orc/orc_attack.png");
}

function orcClick(orcNumber) {
  console.log("CLICK ORC");

  let orcNum = orcNumber;
  let orcSprite = document.querySelector("#orc" + orcNum + "_sprite");
  let orcContainer = document.querySelector("#orc" + orcNum + "_container");

  if (mana > 0) {
    // orcSprite.removeEventListener("mousedown", function () {
    //   orcClick(orcNum);
    // });
    // orcContainer.addEventListener("animationend", function () {
    //   orcAttack(orcNum);
    // });

    orcContainer.style.pointerEvents = "none";

    orcContainer.classList.add("pauseAnimation");
    orcSprite.classList.add("orc_death");
    orcContainer.querySelector(".orc_shadow").classList.add("orc_death_shadow");
    orcSprite.classList.remove("orc_attack");

    orcSprite.setAttribute("src", "images/Orc/orc_death" + orcNum + ".png");

    setTimeout(() => {
      orcContainer.style.visibility = "hidden";
      orcSprite.classList.remove("orc_death");
      orcContainer
        .querySelector(".orc_shadow")
        .classList.remove("orc_death_shadow");

      orcContainer.className = "";

      if (!hasGameFinished) {
        orcSpawn(orcNum);
      }
    }, 1500);

    kills++;
    console.log(`Kills: ${kills}`);

    if (orcsAttacking > 0) {
      orcsAttacking--;
    }
    console.log("ORCS ATTACKING DOWN: " + orcsAttacking);
  }
}
