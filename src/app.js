window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    "#FFC312",
    "#C4E538",
    "#12CBC4",
    "#FDA7DF",
    "#606bd3",
    "#ED4C67"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function () {
      // For multiple click on play
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubble(index);
    });
  });

  const createBubble = index => {
    const bubble = document.createElement('div');

    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    
    // Stop specified animation index
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    });
  };
});
