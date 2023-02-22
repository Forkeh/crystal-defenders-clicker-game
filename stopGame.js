function stopGame() {
  stopFunction = true;
  orcsAttacking = 0;
  console.log("STOP GAME");
  clearTimeout(orc1SpawnTimerId);
  clearTimeout(orc2SpawnTimerId);
  clearTimeout(crystalHPTimerId);
  orc1_container.removeEventListener("animationend", orc1Attack);
  orc1_sprite.removeEventListener("animationend", orc1Attack);
  orc2_container.removeEventListener("animationend", orc2Attack);
  orc2_sprite.removeEventListener("animationend", orc2Attack);
  orc1_container.className = "";
  orc1_sprite.className = "";
  orc1_container.classList.add("pauseAnimation");
  orc2_container.classList.add("pauseAnimation");
  orc1_sprite.classList.add("pauseAnimation");
  orc2_sprite.classList.add("pauseAnimation");
  energyContainer.style.visibility = "hidden";
  crystalContainer.style.visibility = "hidden";
  wizardContainer.style.visibility = "hidden";
  orc1_container.style.visibility = "hidden";
  orc1_sprite.style.visibility = "hidden";
  orc2_container.style.visibility = "hidden";
  orc2_sprite.style.visibility = "hidden";
  
}
