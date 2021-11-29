(function playVideo() {
  const kittenVideo = document.querySelector('#vision-video');
  const playButton = document.querySelector('#play-video-btn');

  playButton.addEventListener('click', function () {
    if (kittenVideo.paused || kittenVideo.ended) {
      kittenVideo.play();
      playButton.innerHTML = 'Pause';
    } else {
      kittenVideo.pause();
      playButton.innerHTML = 'Watch video';
      // console.log('watch this video');
    }
  });
})();
