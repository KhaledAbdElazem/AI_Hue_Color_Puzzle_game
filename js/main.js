function generateGameHTML() {
  const gameDiv = document.createElement("div");
  gameDiv.classList.add("box2");

  const buttons = [];
  for (let i = 1; i <= 50; i++) {
    const button = document.createElement("button");
    // const bt = document.getElementById("lvs" + i);
    button.id = "lvs" + i;
    button.classList.add("btn");

    button.textContent = "🔒";

    buttons.push(button);
    gameDiv.appendChild(button);
  }

  return gameDiv;
}
const parentElement = document.getElementById("box1");
parentElement.appendChild(generateGameHTML());

function nextBtn() {
  window.location.href = "Levels/lv1/index.html";
}

for (let i = 1; i <= 5; i++) {
  function nextBtn() {
    window.location.href = "Levels/lv" + i + "/index.html";
    const bt = document.getElementById("lvs" + i);
    bt.textContent = i;
  }
  const bt = document.getElementById("lvs" + i);
  bt.onclick = nextBtn;
}
document.getElementById("lvs1").textContent = "1";
document.getElementById("lvs2").textContent = "2";
document.getElementById("lvs3").textContent = "3";
