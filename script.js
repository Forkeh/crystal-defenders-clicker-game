window.addEventListener("load", start);

// ---------- Game variables ---------- //
let countdown = 60;
let kills = 0;

const orc1_container = document.querySelector("#orc_container");
const orc1_sprite = document.querySelector("#orc_sprite");

// ---------- Game start ---------- //
function start() {
  console.log("START");

  countDown();

  document.querySelector("#orc_sprite").addEventListener("click", orcClick);

  document
    .querySelector("#orc_container")
    .addEventListener("animationend", orcAttack);
}

// ---------- Countdown ---------- //

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

// ---------- Show win screen ---------- //

function winScreen() {
  document.querySelector("#win").style.visibility = "visible";
}

// ---------- ORC FUNCTIONS ---------- //

function orcClick() {
  console.log("CLICK ORC");
  orc1_container.classList.add("pauseAnimation");

  orc1_sprite.removeEventListener("click", orcClick);

  orc1_sprite.classList.add("orc_death");
  orc1_sprite.classList.remove("orc_attack");
  orc1_sprite.setAttribute("src", "images/Orc/orc_death.png");

  setTimeout(() => {
    orc1_container.style.visibility = "hidden";
    orc1_container.classList.remove("orc_run");
    orc1_sprite.classList.remove("orc_attack");
    orc1_sprite.classList.remove("orc_death");
    resetOrc();
  }, 1000);

  kills++;
}

function orcAttack() {
  console.log("ORC ATTACK");

  orc1_container.removeEventListener("animationend", orcAttack);

  orc1_sprite.classList.add("orc_attack");
  orc1_sprite.setAttribute("src", "images/Orc/orc_attack.png");
}

function resetOrc() {
  console.log("RESET ORC");

  orc1_container.classList.remove("pauseAnimation");
  orc1_container.style.visibility = "visible";
  orc1_sprite.setAttribute("src", "images/Orc/orc_run.png");
  orc1_container.classList.add("orc_run");
}

// ---------- Wizard attack animation ---------- //

document.addEventListener("click", wizardAttack);

function wizardAttack() {
  const sprite = document.querySelector("#wizard_sprite");
  document.removeEventListener("click", wizardAttack);

  sprite.classList.add("wizard_attack");
  sprite.setAttribute("src", "images/Wizard/wizard_attack.png");

  setTimeout(() => {
    sprite.setAttribute("src", "images/Wizard/wizard_idle.png");
    document.addEventListener("click", wizardAttack);
    sprite.classList.remove("wizard_attack");
  }, 400);
}
