document.addEventListener('DOMContentLoaded', () => {
  const hexagons = document.querySelectorAll('.hex');

  const run = () => {
    hexagons.forEach((hex) => {
      const randomDelay = Math.random() * 2;
      hex.style.animationDelay = randomDelay + 's';

      setTimeout(() => {
        hex.classList.add('show');
      }, 50);
    });
  }

  setTimeout(() => {
    run();
  }, 500);

  setTimeout(() => {
    const video = document.querySelector(".video");
    video.classList.add("visible");

    video.play();

    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 5) {
        video.pause();
      }
    });

  }, 3600);
});
