const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
buttonStop.disabled = true;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


buttonStart.addEventListener('click', startColor);
buttonStop.addEventListener('click', stopColor);

let intervalId;

function startColor() {
buttonStart.disabled = true;
buttonStop.disabled = false;
intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

function stopColor() {
buttonStart.disabled = false;
buttonStop.disabled = true;
clearInterval(intervalId);
};
