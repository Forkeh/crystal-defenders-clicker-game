"use strict";

// ---------- COUNTDOWN ---------- //

function countDown() {
  const countdownDisplay = document.querySelector("#countdownText");

  countdownIntervalId = setInterval(() => {
    countdownDisplay.innerHTML = countdown;
    countdown--;

    if (countdown < 0) {
      clearInterval(countdownIntervalId);
      orc1Click();
      orc2Click();
      orc3Click();
      orc4Click();
      orc5Click();
      orc6Click();

      setTimeout(() => {
        winScreen();
      }, 1400);
    } else if (countdown === 9) {
      sound10SecondsCountdown();
    } else if (hasGameFinished) {
      clearInterval(countdownIntervalId);
      // console.log("COUNTDOWN STOP");
    }
  }, 1000);
}
