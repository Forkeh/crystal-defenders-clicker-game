// ---------- MANA ICONS ---------- //

function decrementMana() {
  document.querySelector("#mana" + mana).classList.remove("active_mana");
  document.querySelector("#mana" + mana).classList.add("inactive_mana");
  mana--;
  console.log("CURRENT MANA: " + mana);
}

function fullMana() {
  mana = 4;
  document.querySelector("#mana1").classList.remove("inactive_mana");
  document.querySelector("#mana1").classList.add("active_mana");
  document.querySelector("#mana2").classList.remove("inactive_mana");
  document.querySelector("#mana2").classList.add("active_mana");
  document.querySelector("#mana3").classList.remove("inactive_mana");
  document.querySelector("#mana3").classList.add("active_mana");
  document.querySelector("#mana4").classList.remove("inactive_mana");
  document.querySelector("#mana4").classList.add("active_mana");
  // console.log("FULL MANA: " + mana);
}
