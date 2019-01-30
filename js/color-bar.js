'use strict'

const LottieAnimations = {
  colorbar: lottie.loadAnimation({
    container: document.querySelector('.color-bar .body'),
    isFrame: true,
    autoplay: true,
    renderer: 'svg',
    path: '/Animations/color-bar.json'
  })
}
