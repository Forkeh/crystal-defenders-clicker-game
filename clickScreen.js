// ---------- CLICK SCREEN ---------- //

function clickScreen() {
  // console.log("CLICK SCREEN");
  if (orbClicked === true) {
  } else if (mana > 0) {
    wizardAttack();
    decrementMana();
  }
  orbClicked = false;
}
