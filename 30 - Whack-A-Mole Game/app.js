const moles = document.querySelectorAll('.mole');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const startButton = document.querySelector('.start-button');
let lastHole;
let timeUp = false;
let score = 0;

// Utility function
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Essentially a 'get me a random DOM element' function
function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  // We don't want to return the same hole twice in a row.
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function bonkMole(e) {
  // Disregard if the click is simulated with JavaScript (that is, cheating)
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => {
    timeUp = true;
  }, 10000);
}

startButton.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', bonkMole));