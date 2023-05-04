const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId;

startBtn.addEventListener('click', () => {
   intervalId = setInterval(() => {
body.style.backgroundColor = getRandomHexColor();
    },1000);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});


stopBtn.addEventListener('click', () => {
    clearInterval(randomColor);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};