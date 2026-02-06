// script.js

window.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('accept-btn');
  const declineBtn = document.getElementById('decline-btn');
  const popup = document.getElementById('cookie-popup');
  const jumpscare = document.getElementById('jumpscare');
  const scareImg = document.getElementById('scare-img');
  const scareSound = document.getElementById('scare-sound');

  // Accept = short delay then jumpscare
  acceptBtn.addEventListener('click', () => {
    popup.style.display = 'none';

    setTimeout(() => {
      activateJumpscare();
    }, 800); // 0.8s delay for realism
  });

  // Decline = instant jumpscare
  declineBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    activateJumpscare();
  });

  function activateJumpscare() {
    // Show jumpscare overlay
    jumpscare.classList.add('active');

    // Play scream sound
    scareSound.currentTime = 0;
    scareSound.play().catch(() => {
      console.log('Autoplay blocked; user interaction should allow sound.');
    });

    // Flash red/black background for effect
    let flash = 0;
    const flashInterval = setInterval(() => {
      jumpscare.style.backgroundColor = flash ? 'black' : 'red';
      flash = !flash;
    }, 100);

    // Stop after 5 seconds and reset
    setTimeout(() => {
      clearInterval(flashInterval);
      jumpscare.style.backgroundColor = 'black';
      scareSound.pause();
      scareSound.currentTime = 0;
      alert('Did you really think you could decline?');
      window.location.reload();
    }, 5000);
  }
});
