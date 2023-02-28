"use strict";

// ---------- COUNTDOWN ---------- //

function countDown() {
  const countdownDisplay = document.querySelector("#countdownText");

  countdownIntervalId = setInterval(() => {
    countdownDisplay.innerHTML = countdown;
    countdown--;

    if (countdown < 0) {
      winScreen();
    } else if (hasGameFinished) {
      clearInterval(countdownIntervalId);
      console.log("COUNTDOWN STOP");
    }
  }, 1000);
}
