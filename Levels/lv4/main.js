let originalColors = [
  // "#281a45", //1
  "#660100", //2
  "#9A0100", //3
  // "#CD0200", //4
  "#FC0200", //5
  "#FC1774", //6
  // "#CF135F", //7
  "#A60F4C", //8
  "#770B37", //9
  // "#047D02", //10
  // "#bd6a5f", //11
  "#6C2104", //12
  "#942E05", //13
  // "#C73D07", //14
  "#F84D09", //15
  "#ADFC00", //16
  // "#8DCE00", //17
  "#71A400", //18
  "#557C00", //19
  // "#ecfe86", //20
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
    alert("Congratulations! You won!");
    window.location.href = "../lv5/index.html";
  } else {
    console.log("Not a win yet.");
  }
}

let buttons = [
  // "button1",
  "button2",
  "button3",
  // "button4",
  "button5",
  "button6",
  // "button7",
  "button8",
  "button9",
  // "button10",
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
  // "#281a45", //1
  "#660100", //2
  "#9A0100", //3
  // "#CD0200", //4
  "#FC0200", //5
  "#FC1774", //6
  // "#CF135F", //7
  "#A60F4C", //8
  "#770B37", //9
  // "#047D02", //10
  // "#bd6a5f", //11
  "#6C2104", //12
  "#942E05", //13
  // "#C73D07", //14
  "#F84D09", //15
  "#ADFC00", //16
  // "#8DCE00", //17
  "#71A400", //18
  "#557C00", //19
  // "#ecfe86", //20
];

function shuffleColors() {
  colors.sort(() => Math.random() - 0.5);

  const buttonElements = document.getElementsByClassName("st");

  for (let i = 0; i < colors.length; i++) {
    buttonElements[i].style.backgroundColor = colors[i];
  }
}

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
