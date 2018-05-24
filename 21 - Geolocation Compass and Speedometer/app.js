const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, err => {
  console.error(err);
  alert("You'll need to allow access to your location for the compass and speedometer to work.");
});