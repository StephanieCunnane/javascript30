const para = document.querySelector('.make-green');

function makeGreen() {
  para.style.color = 'green';
  para.style.fontSize = '40px';
}

para.addEventListener('click', makeGreen);

