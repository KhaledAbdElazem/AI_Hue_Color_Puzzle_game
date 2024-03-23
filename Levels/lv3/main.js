function generateGameHTML() {
  const gameDiv = document.createElement("div");
  gameDiv.classList.add("game");

  const buttons = [];
  for (let i = 1; i <= 16; i++) {
    const button = document.createElement("button");
    button.id = "button" + i;

    if (
      // i === 1 ||
      i === 2 ||
      // i === 3 ||
      // i === 4 ||
      // i === 5 ||
      // i === 6 ||
      i === 7 ||
      // i === 8 ||
      // i === 9 ||
      i === 10 ||
      // i === 11 ||
      // i === 12 ||
      // i === 13 ||
      // i === 14 ||
      i === 15
      // i === 16
    ) {
      button.textContent = "🗴";
    } else {
      button.classList.add("st");
    }
    buttons.push(button);
    gameDiv.appendChild(button);
  }
  return gameDiv;
}
const parentElement = document.getElementById("box");
parentElement.appendChild(generateGameHTML());

let originalColors = [
  "#281a45", //1
  // "#AA7105", //2
  "#6a46b8", //3
  "#915ffa", //4
  "#502a4c", //5
  "#85467d", //6
  // "#8DBB0B", //7
  "#fe86f0", //8
  "#4e2c27", //9
  // "#047D02", //10
  "#bd6a5f", //11
  "#fa8c7e", //12
  "#555c30", //13
  "#8f9a52", //14
  // "#0BBC7E", //15
  "#ecfe86", //16
];

function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function checkWin() {
  const buttonElements = document.querySelectorAll(".st");
  console.log("Checking win...");

  let isWin = true;
  for (let i = 0; i < originalColors.length; i++) {
    const currentColor = buttonElements[i].style.backgroundColor;
    const originalColorRGB = hexToRgb(originalColors[i]);
    console.log("Button color:", currentColor);
    console.log("Original color:", originalColorRGB);
    if (currentColor !== originalColorRGB) {
      isWin = false;
      break;
    }
  }

  if (isWin) {
    clearInterval(intervalID); // Stop the timer
    // Display alert after 1 second
    setTimeout(function () {
      const timeTaken = document.getElementById("timer").innerText;
      alert("You win! Time taken: " + timeTaken);
    }, 500);
  } else {
    console.log("Not a win yet.");
  }
}
let buttons = [
  "button1",
  // "button2",
  "button3",
  "button4",
  "button5",
  "button6",
  // "button7",
  "button8",
  "button9",
  // "button10",
  "button11",
  "button12",
  "button13",
  "button14",
  // "button15",
  "button16",
];
let colors = [
  "#281a45", //1
  // "#AA7105", //2
  "#6a46b8", //3
  "#915ffa", //4
  "#502a4c", //5
  "#85467d", //6
  // "#8DBB0B", //7
  "#fe86f0", //8
  "#4e2c27", //9
  // "#047D02", //10
  "#bd6a5f", //11
  "#fa8c7e", //12
  "#555c30", //13
  "#8f9a52", //14
  // "#0BBC7E", //15
  "#ecfe86", //16
];

function shuffleColors() {
  colors.sort(() => Math.random() - 0.5);

  const buttonElements = document.getElementsByClassName("st");

  for (let i = 0; i < colors.length; i++) {
    buttonElements[i].style.backgroundColor = colors[i];
  }
}
shuffleColors();

function swapColors(button1, button2) {
  const color1 = button1.style.backgroundColor;
  const color2 = button2.style.backgroundColor;
  button1.style.backgroundColor = color2;
  button2.style.backgroundColor = color1;
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".st");
  let firstButton = null;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {

      if (!firstButton) {
        firstButton = this;
      } else {
        swapColors(firstButton, this);
        firstButton = null;
        checkWin();
      }
    });
  });
});
