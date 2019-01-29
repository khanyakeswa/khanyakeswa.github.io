const Portfolio = (function() {
  function bindProjectTileClickListeners() {
    document
      .querySelectorAll('.section.portfolio .project-tile')
      .forEach(projectTile =>
        projectTile.addEventListener('click', () => Modal.showLightbox())
      )
  }

  function init() {
    bindProjectTileClickListeners()
  }

  return { init: init }
})()
