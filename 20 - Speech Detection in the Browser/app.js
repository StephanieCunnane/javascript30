// We want to be able to refer to it as SpeechRecognition across
// all browsers
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let para = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(para);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  para.textContent = transcript;
  if (e.results[0].isFinal) {
    // No var, let or const - we want to overwrite the existing para
    para = document.createElement('p');
    words.appendChild(para);
  }

});

// Without this, speech recognition stops at the first pause
recognition.addEventListener('end', recognition.start);

recognition.start();