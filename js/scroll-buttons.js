let sectionPositions = []
recalculateSectionPositions()

function recalculateSectionPositions() {
  console.log('Re-calculating section positions')

  const sections = [].slice.call(document.querySelectorAll('.section'))
  const bodyPosition = document.body.getBoundingClientRect().top

  sectionPositions = sections.map(
    section => section.getBoundingClientRect().top - bodyPosition
  )
}

function scheduleSectionPositionRecalculation() {
  window.requestAnimationFrame(recalculateSectionPositions)
}

window.addEventListener('resize', scheduleSectionPositionRecalculation)

function indexOfCurrentSection() {
  const scrollPosition = window.pageYOffset

  let i = 0
  while (scrollPosition >= sectionPositions[i]) {
    i++
  }

  return i - 1
}

function indexOfPreviousSection() {
  return (
    (sectionPositions.length + indexOfCurrentSection() - 1) %
    sectionPositions.length
  )
}

function indexOfNextSection() {
  return (indexOfCurrentSection() + 1) % sectionPositions.length
}

function sectionIndexToPosition(sectionIndex) {
  if (sectionIndex < 0) {
    throw new Error('Negative section indices are not allowed')
  }
  if (sectionIndex > sectionPositions.length - 1) {
    throw new Error('Section index out of bounds')
  }

  return sectionPositions[sectionIndex]
}

function scrollToSectionIndex(sectionIndex) {
  try {
    const sectionPosition = sectionIndexToPosition(sectionIndex)

    window.scrollTo({
      behavior: 'smooth',
      top: sectionPosition
    })
  } catch {
    console.log('Could not scroll to section index ' + sectionIndex)
  }
}

function scrollToPreviousSection() {
  const sectionIndex = indexOfPreviousSection()
  scrollToSectionIndex(sectionIndex)
}

function scrollToNextSection() {
  const sectionIndex = indexOfNextSection()
  scrollToSectionIndex(sectionIndex)
}

const scrollUpButton = document.querySelector('.scroll-up')
const scrollDownButton = document.querySelector('.scroll-down')

scrollUpButton.addEventListener('click', scrollToPreviousSection)
scrollDownButton.addEventListener('click', scrollToNextSection)
