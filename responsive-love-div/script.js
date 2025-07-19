const stages = [
  { minWidth: 160, part1: "I", part2: "Love", part3: "You" },
  { minWidth: 150, part1: "I", part2: "❤️", part3: "You" },
  { minWidth: 110, part1: "I", part2: "❤️", part3: "U" },
  { minWidth: 90, part1: "", part2: "❤️", part3: "" },
];

const textLine = document.getElementById("text-line");
const elements = {
  part1: document.getElementById("part1"),
  part2: document.getElementById("part2"),
  part3: document.getElementById("part3"),
};

let direction = -1;
let currentStage = 0;
let currentWidth = 160;
const maxWidth = 160;
const minWidth = 90;
const speed = 0.5; // Slower movement

function applyStage(stage) {
  for (const key in stage) {
    if (key === "minWidth") continue;
    const el = elements[key];
    const newText = stage[key];
    if (el.innerText !== newText) {
      triggerPop(el);
      triggerFirework(el);
      el.innerText = newText;
    }
  }
}

function animateWidth() {
  currentWidth -= speed;
  textLine.style.width = currentWidth.toFixed(1) + "px";

  if (
    currentStage < stages.length - 1 &&
    currentWidth <= stages[currentStage + 1].minWidth
  ) {
    currentStage++;
    applyStage(stages[currentStage]);
  }

  if (currentWidth <= minWidth) {
    // Reset everything
    setTimeout(() => {
      currentWidth = maxWidth;
      currentStage = 0;
      applyStage(stages[0]);
    }, 700); // Optional short pause before restarting
  }

  requestAnimationFrame(animateWidth);
}


function triggerPop(el) {
  el.classList.remove("pop");
  void el.offsetWidth;
  el.classList.add("pop");
}

function triggerFirework(el) {
  const rect = el.getBoundingClientRect();
  const fw = document.createElement("div");
  fw.className = "firework";
  fw.style.left = rect.left + rect.width / 2 + "px";
  fw.style.top = rect.top + rect.height / 2 + "px";
  document.body.appendChild(fw);
  setTimeout(() => fw.remove(), 600);
}

// Init
textLine.style.width = currentWidth + "px";
applyStage(stages[0]);
requestAnimationFrame(animateWidth);
