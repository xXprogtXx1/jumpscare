window.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('accept-btn');
  const declineBtn = document.getElementById('decline-btn');
  const popup = document.getElementById('cookie-popup');
  const jumpscare = document.getElementById('jumpscare');
  const scareSound = document.getElementById('scare-sound');

  acceptBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    setTimeout(() => {
      triggerJumpscare();
    }, 800);
  });

  declineBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    triggerJumpscare();
  });

  function triggerJumpscare() {
    jumpscare.classList.add('active');
    scareSound.volume = 1.0;
    scareSound.playbackRate = 1.1;
    scareSound.currentTime = 0;
    scareSound.play().catch(() => {});

    let flash = 0;
    const flashInterval = setInterval(() => {
      jumpscare.style.backgroundColor = flash ? 'black' : 'red';
      flash = !flash;
    }, 100);

    setTimeout(() => {
      clearInterval(flashInterval);
      jumpscare.style.backgroundColor = 'black';
      scareSound.pause();
      scareSound.currentTime = 0;
      window.location.reload();
    }, 5000);
  }
});
