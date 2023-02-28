// ---------- CLICK SCREEN ---------- //

function clickScreen() {
  // console.log("CLICK SCREEN");
  if (orbClicked === true) {
    wizardAttack();
  } else if (mana > 0) {
    wizardAttack();
    decrementMana();
  }
  orbClicked = false;
}
