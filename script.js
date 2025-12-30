const tickingAudio = new Audio("/audio/ticking.mp3");
const explodingAudio = new Audio("/audio/explosion.mp3");
const playButton = document.getElementById("button");

tickingAudio.loop = true;

audio_file.addEventListener("timeupdate", function () {
  var buffer = 0.44;
  if (this.currentTime > this.duration - buffer) {
    this.currentTime = 0;
    this.play();
  }
});

function getRandomDuration(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play() {
  playButton.disabled = true;

  tickingAudio.play();

  const duration = getRandomDuration(15, 60) * 1000;
  console.log(`Bomb will explode in ${duration / 1000} seconds`);

  setTimeout(() => {
    tickingAudio.pause();
    tickingAudio.currentTime = 0;
    explodingAudio.play();

    explodingAudio.addEventListener(
      "ended",
      () => {
        playButton.disabled = false;
      },
      { once: true }
    );
  }, duration);
}
