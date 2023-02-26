// ---------- CLICK SCREEN ---------- //

function clickScreen() {
  // console.log("CLICK SCREEN");
  if (orbClicked === true) {
    wizardAttack();
  } else if (mana > 0) {
    clickLightning();
    wizardAttack();
    decrementMana();
  }
  orbClicked = false;
}
