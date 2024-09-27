//Dice Rolling Simulator
var menu = document.getElementById("dice-menu");
var display = document.getElementById("dice-display");
var reset = document.getElementById("reset-btn");
var roll = document.getElementById("roll-btn");
var history2 = document.getElementById("roll-history");
var dice1Img = document.getElementById("dice-1");
var dice2Img = document.getElementById("dice-2");

roll.addEventListener("click", rollBtn);
reset.addEventListener("click", resetBtn);

//reset button
function resetBtn() {
  history2.innerHTML = "";
  angle += 10;
  dice1Img.style.transform = `rotate(${angle}deg)`;
  dice2Img.style.transform = `rotate(${angle}deg)`;
  setInterval(animateDice, 200);
}

function rollBtn() {
  //   console.log(menu.value);

  //stop dice animation
  clearInterval(timer);

  if (menu.value == "roll-1") {
    // make 2 randoms to represent each dice.
    let dice1 = Math.floor(Math.random() * 6 + 1);
    console.log(dice1);
    // display the appropriate dice image
    dice1Img.src = `images/${dice1}.png`;

    let dice2 = Math.floor(Math.random() * 6 + 1);
    console.log(dice2);
    // display the appropriate dice image
    dice2Img.src = `images/${dice2}.png`;

    // add the dice combo to the dice rolls history box
    history2.innerHTML += `<span> ${dice1}, ${dice2} </span>`;

    // Roll-5 button
  } else if (menu.value == "roll-5") {
    let loop = 1;
    while (loop <= 5) {
      loop++;
      let dice1 = Math.floor(Math.random() * 6 + 1);
      console.log(dice1);
      dice1Img.src = `images/${dice1}.png`;

      let dice2 = Math.floor(Math.random() * 6 + 1);
      console.log(dice2);
      dice2Img.src = `images/${dice2}.png`;
      history2.innerHTML += `<span> ${dice1}, ${dice2} </span>`;
    }
  } else if (menu.value == "roll-x") {
    let random = +prompt("how many times do you want to roll?");
    let loop = 1;
    while (loop <= random) {
      loop++;
      let dice1 = Math.floor(Math.random() * 6 + 1);
      console.log(dice1);
      dice1Img.src = `images/${dice1}.png`;

      let dice2 = Math.floor(Math.random() * 6 + 1);
      console.log(dice2);
      dice2Img.src = `images/${dice2}.png`;
      history2.innerHTML += `<span> ${dice1}, ${dice2} </span>`;
    }
  } else if (menu.value == "roll-snake") {
    while (true) {
      let dice1 = Math.floor(Math.random() * 6 + 1);
      console.log(dice1);
      let dice2 = Math.floor(Math.random() * 6 + 1);
      console.log(dice2);
      if (dice1 == 1 && dice2 == 1) {
        dice1Img.src = `images/${dice1}.png`;
        dice2Img.src = `images/${dice2}.png`;
        break;
      }
      history2.innerHTML += `<span> ${dice1}, ${dice2} </span>`;
    }
  }
}

let timer = setInterval(animateDice, 200);
let angle = 0;

//choose random dice image
function animateDice() {
  let rand = Math.floor(Math.random() * 6 + 1);
  dice1Img.src = `images/${rand}.png`;
  dice2Img.src = `images/${rand}.png`;

  //rotate image
  angle += 10;
  dice1Img.style.transform = `rotate(${angle}deg)`;
  dice2Img.style.transform = `rotate(${angle}deg)`;
}
