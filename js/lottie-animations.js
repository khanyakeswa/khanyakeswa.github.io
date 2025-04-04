'use strict';
const colorBarWrapper = document.querySelector('.color-bar')

const LottieAnimations = {
  skillsGraph1: lottie.loadAnimation({
    container: document.querySelector('.chart.UI-UX'),
    isFrame: true,
    autoplay: false,
    renderer: 'svg',
    path: '/Animations/skills_graph_1.json'
  }),

  skillsGraph2: lottie.loadAnimation({
    container: document.querySelector('.chart.Industrial'),
    isFrame: true,
    autoplay: false,
    renderer: 'svg',
    path: '/Animations/skills_graph_2.json'
  }),

  skillsGraph3: lottie.loadAnimation({
    container: document.querySelector('.chart.misc'),
    isFrame: true,
    autoplay: false,
    renderer: 'svg',
    path: '/Animations/skills_graph_3.json'
  }),

  colorbar: lottie.loadAnimation({
    container: document.querySelector('.color-bar .body'),
    isFrame: true,
    autoplay: true,
    loop: true,
    renderer: 'svg',
    preserveAspectRatio: 'none',
    path: '/Animations/color-bar.json'
  }),

  hasSkillsGraph1Played: false,
  hasSkillsGraph2Played: false,
  hasSkillsGraph3Played: false
}

LottieAnimations.skillsGraph1.addEventListener('enterFrame', function(event) {
  if (event.currentTime >= event.totalTime - 2) {
    LottieAnimations.skillsGraph1.pause()
  }
})

LottieAnimations.skillsGraph2.addEventListener('enterFrame', function(event) {
  if (event.currentTime >= event.totalTime - 2) {
    LottieAnimations.skillsGraph2.pause()
  }
})

LottieAnimations.skillsGraph3.addEventListener('enterFrame', function(event) {
  if (event.currentTime >= event.totalTime - 2) {
    LottieAnimations.skillsGraph3.pause()
  }
})

colorBarWrapper.addEventListener('mouseover', function(event) {
  LottieAnimations.colorbar.setSpeed(.5)
})
colorBarWrapper.addEventListener('mouseleave', function(event) {
  LottieAnimations.colorbar.setSpeed(1)
})
