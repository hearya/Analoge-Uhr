const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateClock() {
  const now = new Date();

  // Calculate the angles of the seconds (each Second = 6°)
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360; // Divides the seconds and then multiplies them.
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Calculate the angles of the minutes (each minute = 6°)
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //  Calculates the hour (each hour = 30°)
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update the watch every second
setInterval(updateClock, 1000);

// Set the clock to the correct time initially
updateClock();


function addAdditionalMarkings() {
  const clockFace = document.querySelector('.outer-clock-face');
  const totalMarks = 12; // 12 marks for 60 minutes

  for (let i = 1; i <= totalMarks; i++) {
      if (i % 3 !== 0) { // Skip the already existing marks (3, 6, 9, 12)
          const marking = document.createElement('div');
          marking.classList.add('additional-marking');

          const angle = i * 30; // 360° / 12 = 30° for each mark


          marking.style.position = 'absolute';
          marking.style.top = '50%';
          marking.style.left = '50%';
          marking.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(144.5px)`;


          clockFace.appendChild(marking);
      }
  }
}

addAdditionalMarkings();

function addAdditionalMarkings2() {
  const clockFace = document.querySelector('.outer-clock-face');
  const totalMarks = 60; // 60 marks for 60 seconds

  for (let i = 1; i <= totalMarks; i++) {
      if (i % 300 !== 0) { // Skip the already existing marks (3, 6, 9, 12)
          const marking = document.createElement('div');
          marking.classList.add('additional-marking2');

          const angle = i * 6; // 360° / 60 = 6° for each mark


          marking.style.position = 'absolute';
          marking.style.top = '50%';
          marking.style.left = '50%';
          marking.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(144.5px)`;


          clockFace.appendChild(marking);
      }
  }
}

addAdditionalMarkings2();

const clockFace = document.querySelector('.outer-clock-face');

// Create a dot marking
const dot = document.createElement('div');
dot.classList.add('dot-marking');

// Style the dot
dot.style.position = 'absolute';
dot.style.width = '10px'; /* Adjust dot size */
dot.style.height = '10px';
dot.style.backgroundColor = 'rgb(203, 0, 0)';
dot.style.borderRadius = '50%'; /* Make it circular */
dot.style.left = '51%'; /* Center horizontally */
dot.style.top = '50%'; /* Center vertically */
dot.style.transform = 'translate(-50%, -50%)'; /* Perfect centering */

// Append the dot to the clock face
clockFace.appendChild(dot);