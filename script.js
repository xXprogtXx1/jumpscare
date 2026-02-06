// script.js

window.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('accept-btn');
  const declineBtn = document.getElementById('decline-btn');
  const popup = document.getElementById('cookie-popup');
  const jumpscare = document.getElementById('jumpscare');
  const scareImg = document.getElementById('scare-img');
  const scareSound = document.getElementById('scare-sound');

  // Accept = short delay then jumpscare (no message)
  acceptBtn.addEventListener('click', () => {
    popup.style.display = 'none';

    setTimeout(() => {
      activateJumpscare(false); // false = no decline message
    }, 800); // 0.8s delay
  });

  // Decline = instant jumpscare (with message)
  declineBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    activateJumpscare(true); // true = show decline message
  });

  function activateJumpscare(showDeclineMessage) {
    // Show overlay
    jumpscare.classList.add('active');

    // Play sound
    scareSound.currentTime = 0;
    scareSound.play().catch(() => {
      console.log('Sound autoplay blocked by browser.');
    });

    // Flash background red/black
    let flash = 0;
    const flashInterval = setInterval(() => {
      jumpscare.style.backgroundColor = flash ? 'black' : 'red';
      flash = !flash;
    }, 100);

    // Stop jumpscare after 5s
    setTimeout(() => {
      clearInterval(flashInterval);
      jumpscare.style.backgroundColor = 'black';
      scareSound.pause();
      scareSound.currentTime = 0;

      if (showDeclineMessage) {
        alert('Did you really think you could decline?');
      }

      window.location.reload();
    }, 5000);
  }
});
