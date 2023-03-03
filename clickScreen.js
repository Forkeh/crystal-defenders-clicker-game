// ---------- CLICK SCREEN ---------- //

function clickScreen() {
  // console.log("CLICK SCREEN");
  if (orbClicked === true) {
    soundClickOrb();
    wizardAttack();
  } else if (mana > 0) {
    soundClickScreen();
    wizardAttack();
    decrementMana();
  } else {
    soundClickNoMana();
  }
  orbClicked = false;
}
