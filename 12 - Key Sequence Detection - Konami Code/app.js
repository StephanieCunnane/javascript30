const pressed = [];
const secretCode = 'xkcd';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  
  // Keep pressed.length equal to secretCode.length while effectively removing the first item in the pressed array on each keyup
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  } 
});