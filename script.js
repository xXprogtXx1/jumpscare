window.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('accept-btn');
  const declineBtn = document.getElementById('decline-btn');
  const popup = document.getElementById('cookie-popup');
  const jumpscare = document.getElementById('jumpscare');
  const scareSound = document.getElementById('scare-sound');
  const trapOverlay = document.getElementById('trap-overlay');
  const fakeClose = document.getElementById('fake-close');

  // Accept = 0.8s delay → jumpscare → FAKE CLOSE → reload
  acceptBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    setTimeout(() => {
      triggerJumpscare();
    }, 800);
  });

  // Decline = instant jumpscare → FAKE CLOSE → reload  
  declineBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    triggerJumpscare();
  });

  // FAKE CLOSE BUTTON = ANOTHER JUMPSCARE 😈
  fakeClose.addEventListener('click', () => {
    trapOverlay.style.display = 'none';
    triggerJumpscare();
  });

  function triggerJumpscare() {
    jumpscare.classList.add('active');
    scareSound.currentTime = 0;
    scareSound.play().catch(() => {});

    // Flash effect
    let flash = 0;
    const flashInterval = setInterval(() => {
      jumpscare.style.backgroundColor = flash ? 'black' : 'red';
      flash = !flash;
    }, 100);

    // After 3s show FAKE CLOSE BUTTON instead of reload
    setTimeout(() => {
      clearInterval(flashInterval);
      jumpscare.classList.remove('active');
      jumpscare.style.backgroundColor = 'black';
      scareSound.pause();
      scareSound.currentTime = 0;
      
      // Show trap overlay with fake close
      trapOverlay.style.display = 'block';
    }, 3000);

    // REAL reload only after fake close is clicked (handled above)
  }
});
