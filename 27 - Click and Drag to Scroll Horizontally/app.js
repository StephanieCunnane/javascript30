const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // We only care about x coord relative to the slider, not
  // relative to the window
  startX = e.pageX - slider.offsetLeft;
  // How far you're initially scrolled in when you mousedown
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  // Do nothing if no mousedown
  if (!isDown) return;
  // Prevent browser from selecting text
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // Choose a walk multiplier if you want
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
