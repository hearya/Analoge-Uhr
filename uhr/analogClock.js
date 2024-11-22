const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateClock() {
  const now = new Date();
  
  // Berechne den Sekundenwinkel (jede Sekunde = 6°)
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; // +90, weil der Startwinkel bei 90° ist
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Berechne den Minutenwinkel (jede Minute = 6°)
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Berechne den Stundenwinkel (jede Stunde = 30°)
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Aktualisiere die Uhr jede Sekunde
setInterval(updateClock, 1000);

// Setze die Uhr initial auf die richtige Zeit
updateClock();
