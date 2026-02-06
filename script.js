<script>
window.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('accept-btn');
  const declineBtn = document.getElementById('decline-btn');
  const popup = document.getElementById('cookie-popup');
  const jumpscare = document.getElementById('jumpscare');
  const scareSound = document.getElementById('scare-sound');

  acceptBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    setTimeout(function() {
      jumpscare.classList.add('active');
      scareSound.play();
      setTimeout(() => window.location.reload(), 5000);
    }, 800);
  });

  declineBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    jumpscare.classList.add('active');
    scareSound.play();
    setTimeout(() => {
      alert('Did you really think you could decline?');
      window.location.reload();
    }, 5000);
  });
});
</script>
