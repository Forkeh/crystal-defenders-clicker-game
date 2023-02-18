let countdown = 10;

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
