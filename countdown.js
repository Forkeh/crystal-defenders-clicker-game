// ---------- COUNTDOWN ---------- //

function countDown() {
  const countdownDisplay = document.querySelector("#countdownText");

  // for (let i = countdown; i >= 0; i--) {
  //   setTimeout(() => {
  //     countdownDisplay.innerHTML = i;
  //     if (i === 0) {
  //       winScreen();
  //     }
  //     if(stopFunction) {
  //       console.log('COUNTDOWN STOP');
  //       return;
  //     }
  //   }, (countdown - i) * 1000);

  // }

  const countdownInterval = setInterval(() => {
    countdownDisplay.innerHTML = countdown;
    countdown--;

    if(countdown < 0) {
      winScreen();
    } else if(stopFunction) {
        clearInterval(countdownInterval);
        console.log('COUNTDOWN STOP');
    }
  }, 1000);
}
