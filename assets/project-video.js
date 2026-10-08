(() => {
  const section = document.querySelector('#video');
  const frame = section && section.querySelector('.video-frame');
  if (!frame) return;

  // Cap the 16:9 player's width so the whole video, with its heading, fits on screen
  // when "Watch video" scrolls to it, even on short laptop displays.
  function fitVideo() {
    const above = frame.getBoundingClientRect().top - section.getBoundingClientRect().top;
    const scrollMargin = parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
    const height = Math.max(200, window.innerHeight - above - scrollMargin - 16);
    frame.style.maxWidth = `${height * 16 / 9}px`;
  }

  window.addEventListener('resize', fitVideo);
  fitVideo();
})();
