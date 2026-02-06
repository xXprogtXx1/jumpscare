window.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('accept-btn');
  const declineBtn = document.getElementById('decline-btn');
  const popup = document.getElementById('cookie-popup');
  const jumpscare = document.getElementById('jumpscare');
  const scareImg = document.getElementById('scare-img');

  const jumpscares = [
    { image: 'fnaf1.png', audio: 'scream1.mp3' },
    { image: 'fnaf2.png', audio: 'scream2.mp3' },
    { image: 'fnaf3.png', audio: 'scream3.mp3' }
  ];

  acceptBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    setTimeout(() => {
      triggerRandomJumpscare(jumpscares);
    }, 800);
  });

  declineBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    triggerRandomJumpscare(jumpscares);
  });

  function triggerRandomJumpscare(pairs) {
    const randomPair = pairs[Math.floor(Math.random() * pairs.length)];
    
    scareImg.src = randomPair.image;
    
    const audio = new Audio(randomPair.audio);
    audio.volume = 1.0;
    audio.playbackRate = 1.1;

    jumpscare.classList.add('active');
    audio.currentTime = 0;
    audio.play().catch(() => {});

    let flash = 0;
    const flashInterval = setInterval(() => {
      jumpscare.style.backgroundColor = flash ? 'black' : 'red';
      flash = !flash;
    }, 100);

    setTimeout(() => {
      clearInterval(flashInterval);
      jumpscare.style.backgroundColor = 'black';
      audio.pause();
      window.location.reload();
    }, 5000);
  }
});
