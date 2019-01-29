const Modal = (function() {
  function hideModal(modalElement) {
    bodyScrollLock.enableBodyScroll(modalElement)

    modalElement.classList.add('hidden')
  }

  function showModal(modalElement) {
    bodyScrollLock.disableBodyScroll(modalElement)

    modalElement.classList.remove('hidden')
  }

  function bindModalBackdropClickListeners() {
    document.querySelectorAll('.modal').forEach(modalElement => {
      const backdropElement = modalElement.querySelector('.backdrop')
      backdropElement.addEventListener('click', () => hideModal(modalElement))
    })
  }

  function bindModalScrollListeners() {
    document
      .querySelectorAll('.modal')
      .forEach(modalElement =>
        modalElement.addEventListener('scroll', e => console.log('hallo'))
      )
  }

  function showLightbox() {
    showModal(document.querySelector('.lightbox'))
  }

  function init() {
    bindModalBackdropClickListeners()
    bindModalScrollListeners()
  }

  return {
    init: init,
    showLightbox: showLightbox
  }
})()
