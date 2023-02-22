// ---------- WIZARD ATTACK ---------- //

function wizardAttack() {
  const sprite = document.querySelector("#wizard_sprite");
  sprite.classList.add("wizard_attack");
  sprite.setAttribute("src", "images/Wizard/wizard_attack.png");

  setTimeout(() => {
    sprite.setAttribute("src", "images/Wizard/wizard_idle.png");
    sprite.classList.remove("wizard_attack");
  }, 400);
}
