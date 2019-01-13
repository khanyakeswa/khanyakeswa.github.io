const navbar = document.querySelector('.navbar', '.portfolio-button')

let last_known_scroll_position = 0;
let ticking = false;
let isCollapsed = false;

function doSomething(scroll_pos) {
  console.log('scroll', scroll_pos, window.innerHeight)
  // navbar.style.transform = `translateX(${scroll_pos}px)`
  // Do something with the scroll position
  const isScrolledPastTopSection = scroll_pos >= (0.5 * (window.innerHeight));
  if (!isCollapsed && isScrolledPastTopSection) {
    document.body.classList.add('collapsed');
    isCollapsed = true;
    console.log('collapsing');
  }
  if (isCollapsed && !isScrolledPastTopSection) {
    document.body.classList.remove('collapsed');
    isCollapsed = false;
    console.log('uncollapsing');
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
