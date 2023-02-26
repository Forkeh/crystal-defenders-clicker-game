function clickLightning(e) {
    console.log('CLICK LIGHTNING');

    // const lightningImg = document.createElementlightningImg('img');
    // lightningImg.src = "./images/Lightning/lightningStrike.png";
    // lightningImg.style.position = 'absolute';
    // lightningImg.style.left = event.pageX + 'px';
    // lightningImg.style.top = event.pageY + 'px';

    // ligntningContainer.appendChild(lightningImg);

    var x = e.clientX;
    var y = e.clientY;
    var snowball = document.getElementById("snowballAppear");
    snowball.style.display = "";
    snowball.style.position = "absolute";
    snowball.style.left = x + "px";
    snowball.style.top = y + "px";

}