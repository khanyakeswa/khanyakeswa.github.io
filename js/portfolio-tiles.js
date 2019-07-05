const projectTileOne = document.getElementsByClassName('first project-tile')
const projectTileTwo = document.getElementsByClassName('second project-tile')
const projectTileThree = document.getElementsByClassName('third project-tile')
const projectTileFour = document.getElementsByClassName('fourth project-tile')
const projectLabelOne = document.getElementsByClassName('tile-label one')
const projectLabelTwo = document.getElementsByClassName('tile-label two')
const projectLabelThree = document.getElementsByClassName('tile-label three')
const projectLabelFour = document.getElementsByClassName('tile-label four')

let isHovered = false

projectTileOne.addEventListener('mouseover', function(e) {
  document.body.classList.add('hovered')
  console.log('hovered')
})

projectTileOne.addEventListener('mouseout', function(e) {
  document.body.classList.remove('hovered')
  console.log('unhovered')
})