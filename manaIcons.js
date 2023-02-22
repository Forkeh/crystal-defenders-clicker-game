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
  document.querySelector("#mana1").classList.add("full_mana");
  document.querySelector("#mana2").classList.remove("inactive_mana");
  document.querySelector("#mana2").classList.add("full_mana");
  document.querySelector("#mana3").classList.remove("inactive_mana");
  document.querySelector("#mana3").classList.add("full_mana");
  document.querySelector("#mana4").classList.remove("inactive_mana");
  document.querySelector("#mana4").classList.add("full_mana");

  document.querySelector("#mana1").addEventListener('animationend', activeMana);
  document.querySelector("#mana2").addEventListener("animationend", activeMana);
  document.querySelector("#mana3").addEventListener("animationend", activeMana);
  document.querySelector("#mana4").addEventListener("animationend", activeMana);

  // console.log("FULL MANA: " + mana);
}

function activeMana(){
  // console.log('ACTIVE MANA');
document.querySelector("#mana1").classList.remove("full_mana");
document.querySelector("#mana1").classList.add("active_mana");
document.querySelector("#mana2").classList.remove("full_mana");
document.querySelector("#mana2").classList.add("active_mana");
document.querySelector("#mana3").classList.remove("full_mana");
document.querySelector("#mana3").classList.add("active_mana");
document.querySelector("#mana4").classList.remove("full_mana");
document.querySelector("#mana4").classList.add("active_mana");
}
