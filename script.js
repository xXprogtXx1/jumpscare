window.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('accept-btn');
  const declineBtn = document.getElementById('decline-btn');
  const popup = document.getElementById('cookie-popup');
  const jumpscare = document.getElementById('jumpscare');
  const scareImg = document.getElementById('scare-img');
  const scareSound = document.getElementById('scare-sound');

  // Accept = short delay then jumpscare, NO message
  acceptBtn.addEventListener('click', () => {
    popup.style.display = 'none';

    setTimeout(() => {
      activateJumpscare(false);
    }, 800);
  });

  // Decline = instant jumpscare WITH message
  declineBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    activateJumpscare(true);
  });

  function activateJumpscare(showDeclineMessage) {
    jumpscare.classList.add('active');

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

      if (showDeclineMessage) {
        alert('Did you really think you could decline?');
      }

      window.location.reload();
    }, 5000);
  }
});
