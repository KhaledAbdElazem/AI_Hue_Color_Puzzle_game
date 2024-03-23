function generateGameHTML() {
  const gameDiv = document.createElement("div");
  gameDiv.classList.add("game");

  const buttons = [];
  for (let i = 1; i <= 16; i++) {
    const button = document.createElement("button");
    button.id = "button" + i;

    if (
      i === 1 ||
      i === 4 ||
      i === 5 ||
      i === 8 ||
      i === 9 ||
      i === 12 ||
      i === 13 ||
      i === 16
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
  "#320b85",
  "#470fbd",
  "#05608c",
  "#0683be",
  "#11afa2",
  "#14d1c1",
  "#138a38",
  "#19b549",
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
  "button2",
  "button3",
  "button6",
  "button7",
  "button10",
  "button11",
  "button14",
  "button15",
];
let colors = [
  "#320b85",
  "#470fbd",
  "#05608c",
  "#0683be",
  "#11afa2",
  "#14d1c1",
  "#138a38",
  "#19b549",
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
      // button.style.border = "4px solid wheat";
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
