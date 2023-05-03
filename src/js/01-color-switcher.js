const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

let randomColor;

start.addEventListener('click', () => {
   randomColor = setInterval(() => {
body.style.backgroundColor = getRandomHexColor();
    },1000);
    start.setAttribute('disabled', '');
    stop.removeAttribute('disabled');
});


stop.addEventListener('click', () => {
    clearInterval(randomColor);
    stop.setAttribute('disabled', '');
    start.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};