// State variables
let startTime;
let elapsedTime = 0;
let intervalId;
let isRunning = false;

// DOM Elements
const display = document.querySelector(".display");
const startPauseButton = document.getElementById("startPause");
const stopButton = document.getElementById("stop");
const flagButton = document.getElementById("flag");
const flagsList = document.getElementById("flags");

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
}

function updateDisplay() {
  const currentTime = isRunning
    ? Date.now() - startTime + elapsedTime
    : elapsedTime;
  display.textContent = formatTime(currentTime);
}

function toggleStartPause() {
  if (isRunning) {
    clearInterval(intervalId);
    startPauseButton.textContent = "Start";
    startPauseButton.style.backgroundColor = "#008CBA";
    elapsedTime += Date.now() - startTime;
  } else {
    startTime = Date.now();
    intervalId = setInterval(updateDisplay, 10);
    startPauseButton.style.backgroundColor = "orangered";
    startPauseButton.textContent = "Pause";
  }
  isRunning = !isRunning;
}

function stopAndReset() {
  clearInterval(intervalId);
  startPauseButton.textContent = "Start";
  display.textContent = "00:00.000";
  isRunning = false;
  startTime = undefined;
  elapsedTime = 0;
  flagsList.innerHTML = "";
}

function addFlag() {
  if (isRunning) {
    const currentTime = Date.now() - startTime + elapsedTime;
    const flagItem = document.createElement("li");
    flagItem.textContent = formatTime(currentTime);
    flagsList.appendChild(flagItem);
  }
}

// Event listeners
startPauseButton.addEventListener("click", toggleStartPause);
stopButton.addEventListener("click", stopAndReset);
flagButton.addEventListener("click", addFlag);

updateDisplay();
