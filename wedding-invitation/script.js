function openCard() {
  const card = document.querySelector('.card');
  const fireworks = document.querySelector('.fireworks');
  const flySound = document.getElementById('flySound');
  const openSound = document.getElementById('openSound');
  const fireworksSound = document.getElementById('fireworksSound');
  const birdsSound = document.getElementById('birdsSound');

  card.classList.add('opened');

  // Play sounds
  flySound.play();
  setTimeout(() => {
    openSound.play();
    birdsSound.play();
    fireworks.classList.remove('hidden');
    fireworksSound.play();
  }, 1000);
}
