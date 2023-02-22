// ---------- MANA ORB ---------- //

function clickOrb() {
  orbClicked = true;
  fullMana();
  console.log("CLICK ORB: " + mana + " mana");

  energySprite.removeEventListener("mousedown", clickOrb);

  energyContainer.classList.add("pauseAnimation");
  energySprite.classList.remove("energy_idle");

  energySprite.classList.add("energy_click");

  energySprite.addEventListener("animationend", resetOrb);

  function resetOrb() {
    // console.log("RESET ORB");
    energyContainer.style.visibility = "hidden";
    energyContainer.classList.remove("pauseAnimation");
    energyContainer.classList.remove("energy_move");
    energySprite.classList.remove("energy_click");
    spawnOrb();
  }
}

function spawnOrb() {
  // console.log("SPAWN ORB");

  void energyContainer.offsetLeft;
  energyContainer.style.visibility = "visible";
  energySprite.addEventListener("mousedown", clickOrb);
  energyContainer.classList.add("energy_move");
  energySprite.classList.add("energy_idle");
  setTimeout(() => {}, 100);
}
