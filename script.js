// ---------- Game varaibles ---------- //

let countdown = 60;
const countdownDisplay = document.getElementById("countdownText");
let kills = 0;

// ---------- Countdown ---------- //

function countDown() {
  for (let i = countdown; i >= 0; i--) {
    setTimeout(() => {
      countdownDisplay.innerHTML = i;
      if (i === 0) {
        winScreen();
      }
    }, (countdown - i) * 1000);
  }
}

countDown();

function winScreen() {
  document.getElementById("win").style.visibility = "visible";
}

// ---------- Click orc ---------- //

document.querySelector("#orc_sprite").addEventListener("click", orcClick);

function orcClick() {
  const container = document.querySelector("#orc_container");
  const sprite = document.querySelector("#orc_sprite");
  container.classList.add("pauseAnimation");

  sprite.removeEventListener("click", orcClick);

  sprite.classList.add("orc_death");
  sprite.setAttribute("src", "images/Orc/orc_death.png");

  setTimeout(() => {
    container.style.visibility = "hidden";
  }, 1000);

  kills++;
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
