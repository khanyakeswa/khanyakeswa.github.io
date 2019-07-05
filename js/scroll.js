const navbar = document.querySelector('.navbar', '.portfolio-button')

let last_known_scroll_position = 0
let ticking = false
let isCollapsed = false
let isTransitioned = false

let enterSectionOne = false
let enterSectionTwo = false
let enterSectionThree = false
let enterSectionFour = false
let enterSectionFive = false
let enterSectionSix = false
let enterSectionSeven = false

let exitSectionOne = false
let exitSectionTwo = false
let exitSectionThree = false
let exitSectionFour = false
let exitSectionFive = false
let exitSectionSix = false
let exitSectionSeven = false

function doSomething(scroll_pos) {
  // navbar.style.transform = `translateX(${scroll_pos}px)`
  // Do something with the scroll position
  const isScrolledPastTopSection = scroll_pos >= 0.5 * window.innerHeight
  if (!isCollapsed && isScrolledPastTopSection) {
    document.body.classList.add('collapsed')
    isCollapsed = true
    console.log('collapsing')
  }
  if (isCollapsed && !isScrolledPastTopSection) {
    document.body.classList.remove('collapsed')
    isCollapsed = false
    console.log('uncollapsing')
  }

  const isScrolledPastAboutMe = scroll_pos >= 1.5 * window.innerHeight
  if (!LottieAnimations.hasSkillsGraph1Played && isScrolledPastAboutMe) {
    LottieAnimations.skillsGraph1.play()
    LottieAnimations.hasSkillsGraph1Played = true
  }
  if (!LottieAnimations.hasSkillsGraph2Played && isScrolledPastAboutMe) {
    LottieAnimations.skillsGraph2.play()
    LottieAnimations.hasSkillsGraph2Played = true
  }
  if (!LottieAnimations.hasSkillsGraph3Played && isScrolledPastAboutMe) {
    LottieAnimations.skillsGraph3.play()
    LottieAnimations.hasSkillsGraph3Played = true
  }
  if (LottieAnimations.hasSkillsGraph1Played && !isScrolledPastAboutMe) {
    LottieAnimations.skillsGraph1.stop()
    LottieAnimations.hasSkillsGraph1Played = false
  }
  if (LottieAnimations.hasSkillsGraph2Played && !isScrolledPastAboutMe) {
    LottieAnimations.skillsGraph2.stop()
    LottieAnimations.hasSkillsGraph2Played = false
  }
  if (LottieAnimations.hasSkillsGraph3Played && !isScrolledPastAboutMe) {
    LottieAnimations.skillsGraph3.stop()
    LottieAnimations.hasSkillsGraph3Played = false
  }

  isScrolledPastExp = scroll_pos >= 2.5 * window.innerHeight
  if (!isTransitioned && isScrolledPastExp) {
    document.body.classList.add('transitioned-exp')
    isTransitioned = true
    console.log('transition')
  }

  // scroll indicator sections
  const colorBarHeight = document.getElementsByClassName('color-bar');

  const isScrolledPastSectionOne = scroll_pos >= 0.5 * window.innerHeight
  const isScrolledPastSectionTwo = scroll_pos >= 1.5 * window.innerHeight
  const isScrolledPastSectionThree = scroll_pos >= 2.5 * window.innerHeight
  const isScrolledPastSectionFour = scroll_pos >= 3.5 * window.innerHeight
  const isScrolledPastSectionFive = scroll_pos >= 4.5 * window.innerHeight
  const isScrolledPastSectionSix = scroll_pos >= ((4.5 * window.innerHeight) + colorBarHeight)
  const isScrolledPastSectionSeven = scroll_pos >= ((5.5 * window.innerHeight) + colorBarHeight)

  //Scroll-dot 1
  if (!enterSectionTwo && isScrolledPastSectionOne) {
    document.body.classList.add('enter-section-2')
    enterSectionTwo = true
  }
  if (enterSectionTwo && !isScrolledPastSectionOne) {
    document.body.classList.remove('enter-section-2')
    enterSectionTwo = false
  }
  if (!exitSectionTwo && isScrolledPastSectionTwo) {
    document.body.classList.add('exit-section-2')
    exitSectionTwo = true
  }
  if (exitSectionTwo && !isScrolledPastSectionTwo) {
    document.body.classList.remove('exit-section-2')
    exitSectionTwo = false
  }

  if (!enterSectionThree && isScrolledPastSectionTwo) {
    document.body.classList.add('enter-section-3')
    enterSectionThree = true
  }
  if (enterSectionThree && !isScrolledPastSectionTwo) {
    document.body.classList.remove('enter-section-3')
    enterSectionThree = false
  }
  if (!exitSectionThree && isScrolledPastSectionThree) {
    document.body.classList.add('exit-section-3')
    exitSectionThree = true
  }
  if (exitSectionThree && !isScrolledPastSectionThree) {
    document.body.classList.remove('exit-section-3')
    exitSectionThree = false
  }

  if (!enterSectionFour && isScrolledPastSectionThree) {
    document.body.classList.add('enter-section-4')
    enterSectionFour = true
  }
  if (enterSectionFour && !isScrolledPastSectionThree) {
    document.body.classList.remove('enter-section-4')
    enterSectionFour = false
  }
  if (!exitSectionFour && isScrolledPastSectionFour) {
    document.body.classList.add('exit-section-4')
    exitSectionFour = true
  }
  if (exitSectionFour && !isScrolledPastSectionFour) {
    document.body.classList.remove('exit-section-4')
    exitSectionFour = false
  }

  if (!enterSectionFive && isScrolledPastSectionFour) {
    document.body.classList.add('enter-section-5')
    enterSectionFive = true
  }
  if (enterSectionFive && !isScrolledPastSectionFour) {
    document.body.classList.remove('enter-section-5')
    enterSectionFive = false
  }
  if (!exitSectionFive && isScrolledPastSectionFive) {
    document.body.classList.add('exit-section-5')
    exitSectionFive = true
  }
  if (exitSectionFive && !isScrolledPastSectionFive) {
    document.body.classList.remove('exit-section-5')
    exitSectionFive = false
  }

  if (!enterSectionSix && isScrolledPastSectionFive) {
    document.body.classList.add('enter-section-6')
    enterSectionSix = true
  }
  if (enterSectionSix && !isScrolledPastSectionFive) {
    document.body.classList.remove('enter-section-6')
    enterSectionSix = false
  }
  if (!exitSectionSix && isScrolledPastSectionSix) {
    document.body.classList.add('exit-section-6')
    exitSectionSix = true
  }
  if (exitSectionSix && !isScrolledPastSectionSix) {
    document.body.classList.remove('exit-section-6')
    exitSectionSix = false
  }

  if (!enterSectionSeven && isScrolledPastSectionSix) {
    document.body.classList.add('enter-section-7')
    enterSectionSeven = true
  }
  if (enterSectionSeven && !isScrolledPastSectionSix) {
    document.body.classList.remove('enter-section-7')
    enterSectionSeven = false
  }
  if (!exitSectionSeven && isScrolledPastSectionSeven) {
    document.body.classList.add('exit-section-7')
    exitSectionSeven = true
  }
  if (exitSectionSix && !isScrolledPastSectionSeven) {
    document.body.classList.remove('exit-section-7')
    exitSectionSeven = false
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position)
      ticking = false
    })

    ticking = true
  }
})

doSomething(window.scrollY)
