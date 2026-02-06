window.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('accept-btn');
  const declineBtn = document.getElementById('decline-btn');
  const popup = document.getElementById('cookie-popup');
  const jumpscare = document.getElementById('jumpscare');
  const scareSound = document.getElementById('scare-sound');

  // Accept = 0.8s delay → jumpscare → reload (NO alert)
  acceptBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    setTimeout(() => {
      triggerJumpscare();
    }, 800);
  });

  // Decline = instant jumpscare → reload (NO alert)
  declineBtn.addEventListener('click', () => {
    popup.style.display = 'none';
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

    // End after 5s and reload (NO ALERT)
    setTimeout(() => {
      clearInterval(flashInterval);
      jumpscare.style.backgroundColor = 'black';
      scareSound.pause();
      scareSound.currentTime = 0;
      window.location.reload();
    }, 5000);
  }
});
