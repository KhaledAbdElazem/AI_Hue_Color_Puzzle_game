
function generateGameHTML() {
  const gameDiv = document.createElement("div");
  gameDiv.classList.add("game");

  const buttons = [];
  for (let i = 1; i <= 20; i++) {
    const button = document.createElement("button");
    button.id = "button" + i;

    if (
      i === 2 ||
      i === 5 ||
      i === 6 ||
      i === 9 ||
      i === 11 ||
      i === 14 ||
      i === 17 ||
      i === 20
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
  "#87FE98", //1
  // "#66C173", //2
  "#4A8C53", //3
  "#35653C", //4
  // "#244428", //5
  // "#2A3F4C", //6
  "#426478", //7
  "#5C8AA7", //8
  // "#70A9CC", //9
  "#8CD2FD", //10
  // "#281B4E", //11
  "#3D2975", //12
  "#53389F", //13
  // "#724DDB", //14
  "#8459FC", //15
  "#FCA06B", //16
  // "#C77E54", //17
  "#986141", //18
  "#6C452E", //19
  // "#533423", //20
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
  // "button5",
  // "button6",
  "button7",
  "button8",
  // "button9",
  "button10",
  // "button11",
  "button12",
  "button13",
  // "button14",
  "button15",
  "button16",
  // "button17",
  "button18",
  "button19",
  // "button20",
];
let colors = [
  "#87FE98", //1
  // "#66C173", //2
  "#4A8C53", //3
  "#35653C", //4
  // "#244428", //5
  // "#2A3F4C", //6
  "#426478", //7
  "#5C8AA7", //8
  // "#70A9CC", //9
  "#8CD2FD", //10
  // "#281B4E", //11
  "#3D2975", //12
  "#53389F", //13
  // "#724DDB", //14
  "#8459FC", //15
  "#FCA06B", //16
  // "#C77E54", //17
  "#986141", //18
  "#6C452E", //19
  // "#533423", //20
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



