const tickingAudio = new Audio("./audio/ticking.mp3");
const explodingAudio = new Audio("./audio/explosion.mp3");
const playButton = document.getElementById("button");
const restartButton = document.getElementById("restart");
const bombImage = document.getElementById("bomb-image");
const blastImage = document.getElementById("blast-image");

function getRandomDuration(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play() {
  playButton.disabled = true;

  tickingAudio.play();
  bombImage.style.display = "block";
  playButton.style.display = "none";

  const duration = getRandomDuration(15, 45) * 1000;
  console.log(`Bomb will explode in ${duration / 1000} seconds`);

  setTimeout(() => {
    tickingAudio.pause();
    tickingAudio.currentTime = 0;
    explodingAudio.play();

    blastImage.style.display = "block";
    bombImage.style.display = "none";

    explodingAudio.addEventListener(
      "ended",
      () => {
        restartButton.style.display = "block";
      },
      { once: true }
    );
  }, duration);
}

function restart() {
  playButton.disabled = false;
  blastImage.style.display = "none";
  playButton.style.display = "block";
}
