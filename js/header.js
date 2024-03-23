function nextBtn() {
  window.location.href = "../../index.html";
}

function createHeader() {
  const ul = document.createElement("ul");

  // Create and set attributes for the li elements
  const li1 = document.createElement("li");
  const span1 = document.createElement("span");
  span1.classList.add("goback");
  const backIcon = document.createElement("i");
  backIcon.classList.add("fas", "fa-arrow-left");
  const span1Child = document.createElement("span");
  span1Child.classList.add("back");
  span1Child.appendChild(backIcon);
  span1Child.onclick = nextBtn;

  li1.appendChild(span1);
  li1.appendChild(document.createElement("br"));
  li1.appendChild(span1Child);

  const li2 = document.createElement("li");
  const span2 = document.createElement("span");
  span2.textContent = "LEVEL";
  span2.classList.add("tx");
  const span2Child = document.createElement("span");
  span2Child.textContent = "1";
  span2Child.classList.add("lv");
  li2.appendChild(span2);
  li2.appendChild(document.createElement("br"));
  li2.appendChild(span2Child);

  const li3 = document.createElement("li");
  const span3 = document.createElement("span");
  span3.textContent = "TIMER";
  span3.classList.add("tx");

  const span3Child = document.createElement("span");
  span3Child.id = "timer";
  span3Child.textContent = "0:00";
  li3.appendChild(span3);
  li3.appendChild(document.createElement("br"));
  li3.appendChild(span3Child);

  const li4 = document.createElement("li");
  const span4 = document.createElement("span");
  span4.textContent = "SHARE";
  span4.classList.add("tx");

  const shareIcon = document.createElement("i");
  shareIcon.classList.add("fas", "fa-share");

  const span4Child = document.createElement("span");
  span4Child.classList.add("share");
  span4Child.appendChild(shareIcon);

  li4.appendChild(span4);
  li4.appendChild(document.createElement("br"));
  li4.appendChild(span4Child);

  const li5 = document.createElement("li");
  const span5 = document.createElement("span");
  span5.textContent = "HINTS";
  span5.classList.add("tx");

  const hintIcon = document.createElement("i");
  hintIcon.classList.add("fas", "fa-lightbulb");

  const span5Child = document.createElement("span");
  span5Child.classList.add("hint");
  span5Child.appendChild(hintIcon);

  li5.appendChild(span5);
  li5.appendChild(document.createElement("br"));
  li5.appendChild(span5Child);

  // Append li elements to ul element
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);

  document.querySelector("header").appendChild(ul);
}

createHeader();

var seconds = 0;

function updateTimer() {
  seconds++;

  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;

  document.getElementById("timer").innerText =
    minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

var intervalID = setInterval(updateTimer, 1000);
