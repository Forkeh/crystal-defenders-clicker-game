let countdown = 10;

// ---------- Countdown ---------- //

function countDown() {
  for (let i = countdown; i >= 0; i--) {
    setTimeout(() => {
      console.log(i);
      if (i === 0) {
        console.log("You win!");
      }
    }, (countdown - i) * 1000);
  }
}
// countDown();

document.querySelector("#orc_sprite").addEventListener("click", orcClick);

function orcClick() {
  const container = document.querySelector("#orc_container");
  const sprite = document.querySelector("#orc_sprite");

  container.classList.add("pauseAnimation");
  sprite.classList.add("orc_death");
  sprite.setAttribute("src", "images/Orc/orc_death.png");
}
