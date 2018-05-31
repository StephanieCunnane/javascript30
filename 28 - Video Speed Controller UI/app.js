const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function adjustSpeed(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 2.5;
  const playbackRate = (max - min) * percent + min;

  video.playbackRate = playbackRate;
  displaySpeedBar(percent, playbackRate);
}

function displaySpeedBar(percent, playbackRate) {
  const height = Math.round(percent * 100) + '%';

  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';
}

speed.addEventListener('mousemove', adjustSpeed);
