// Select the clock hands from the DOM
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Function to update the clock hands based on the current time
function updateClock() {
  const now = new Date(); // Get the current date and time

  // Calculate the angle for the seconds hand (6° per second)
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Update the seconds hand

  // Calculate the angle for the minutes hand (6° per minute)
  const minutes = now.getMinutes() + seconds / 60; // Include partial minutes from seconds
  const minutesDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`; // Update the minutes hand

  // Calculate the angle for the hours hand (30° per hour)
  const hours = now.getHours() % 12 + minutes / 60; // Adjust for 12-hour format and minutes
  const hoursDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`; // Update the hours hand
}

// Update the clock every second
setInterval(updateClock, 1000);

// Set the clock to the correct time immediately on page load
updateClock();

// Function to add additional markers to the clock face (for every 30 minutes)
function addAdditionalMarkings() {
  const clockFace = document.querySelector('.outer-clock-face');
  const totalMarks = 12; // 12 marks for each hour

  for (let i = 1; i <= totalMarks; i++) {
    if (i % 3 !== 0) { // Skip the 3, 6, 9, and 12 marks (already present)
      const marking = document.createElement('div');
      marking.classList.add('additional-marking');

      const angle = i * 30; // 360° / 12 = 30° for each mark

      marking.style.position = 'absolute';
      marking.style.top = '50%';
      marking.style.left = '50%';
      marking.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(144.5px)`;

      clockFace.appendChild(marking); // Add the marking to the clock face
    }
  }
}

addAdditionalMarkings();

// Function to add minute markers to the clock face (for each second)
function addAdditionalMarkings2() {
  const clockFace = document.querySelector('.outer-clock-face');
  const totalMarks = 60; // 60 marks for each second

  for (let i = 1; i <= totalMarks; i++) {
    if (i % 300 !== 0) { // Skip the main 5-minute marks (3, 6, 9, 12)
      const marking = document.createElement('div');
      marking.classList.add('additional-marking2');

      const angle = i * 6; // 360° / 60 = 6° for each mark

      marking.style.position = 'absolute';
      marking.style.top = '50%';
      marking.style.left = '50%';
      marking.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(144.5px)`;

      clockFace.appendChild(marking); // Add the marking to the clock face
    }
  }
}

addAdditionalMarkings2();

// Create and style the center dot on the clock face
const clockFace = document.querySelector('.outer-clock-face');
const dot = document.createElement('div');
dot.classList.add('dot-marking');

dot.style.position = 'absolute';
dot.style.width = '10px'; // Dot size
dot.style.height = '10px';
dot.style.backgroundColor = 'rgb(203, 0, 0)'; // Dot color
dot.style.borderRadius = '50%'; // Circular shape
dot.style.left = '51%'; // Center horizontally
dot.style.top = '50%'; // Center vertically
dot.style.transform = 'translate(-50%, -50%)'; // Perfect centering

// Append the dot to the clock face
clockFace.appendChild(dot);