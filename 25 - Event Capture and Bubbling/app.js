// Capturing in the browser goes from top down.
// Bubbling goes from the bottom up, firing off events from the innermost
// element all the way up to the outermost element.
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

// When you click, the browser fires click events on ALL of the nested
// elements. (Irrelevant if you aren't listening for a click event
// on any parent elements.) You need to consider bubbling when you
// are listening for a click on multiple nested elements.
function logText(e) {
  console.log(this.classList.value);
  // Prevent further capturing and bubbling
  // e.stopPropagation();
  // console.log(this);
}

// Uncomment these to experiment with bubbling behavior
// document.body.addEventListener('click', logText);
// divs.forEach(div => div.addEventListener('click', logText));

divs.forEach(div => div.addEventListener('click', logText, {
  // Fire events on the capture down, not the bubble up
  // (False is the default.)
  capture: false,
  // Listen for the click, then unbind itself (like removeEventListener())
  once: true
}));

// If you only want the user to be able to click once
button.addEventListener('click', () => {
  console.log('Will only print once');
}, {
  once: true
});