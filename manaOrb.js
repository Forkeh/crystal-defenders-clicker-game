// ---------- MANA ORB ---------- //

function clickOrb() {
  // console.log("CLICK ORB: " + mana + " mana");
  orbClicked = true;
  fullMana();

  energySprite.removeEventListener("mousedown", clickOrb);

  energyContainer.classList.add("pauseAnimation");
  energySprite.classList.remove("energy_idle");

  energySprite.classList.add("energy_click");

  energySprite.addEventListener("animationend", resetOrb);

  function resetOrb() {
    // console.log("RESET ORB");
    energyContainer.style.visibility = "hidden";
    energyContainer.classList.remove("pauseAnimation");
    energyContainer.classList.remove("energy_path1");
    energyContainer.classList.remove("energy_path2");
    // energyContainer.className = '';
    
    energySprite.classList.remove("energy_click");

    spawnOrb();
  }
}

function spawnOrb() {
  // console.log("SPAWN ORB");

  void energyContainer.offsetLeft;

  if(Math.random() < 0.5) {
    energyContainer.classList.add("energy_path1");
    
  } else {
    energyContainer.classList.add("energy_path2");

  }
  energyContainer.style.visibility = "visible";
  energySprite.addEventListener("mousedown", clickOrb);
  energySprite.classList.add("energy_idle");

  
}
