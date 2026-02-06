// Wait until the page is loaded
window.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('accept-btn');
  const popup = document.getElementById('cookie-popup');
  const jumpscare = document.getElementById('jumpscare');
  const scareImg = document.getElementById('scare-img');
  const scareSound = document.getElementById('scare-sound');

  // When user clicks "Accept"
  acceptBtn.addEventListener('click', () => {
    // Hide the cookie popup nicely
    popup.style.display = 'none';

    // Short delay for realism before the jumpscare
    setTimeout(() => {
      activateJumpscare();
    }, 800); // 0.8 second delay – adjust for timing
  });

  function activateJumpscare() {
    // Show jumpscare full screen
    jumpscare.classList.add('active');

    // Play the scream sound
    scareSound.currentTime = 0;
    scareSound.play().catch(() => {
      console.log('Autoplay blocked. Interaction may be required.');
    });

    // Optionally switch background flickers/flashes
    let flash = 0;
    const flashInterval = setInterval(() => {
      jumpscare.style.backgroundColor = flash ? 'black' : 'red';
      flash = !flash;
    }, 100);

    // End the jumpscare after few seconds
    setTimeout(() => {
      clearInterval(flashInterval);
      jumpscare.style.backgroundColor = 'black';
      scareSound.pause();
      scareSound.currentTime = 0;
      alert('Did I scare you? 😈');
      window.location.reload(); // reload to reset
    }, 5000); // lasts 5 seconds
  }
});
