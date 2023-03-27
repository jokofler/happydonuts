headerWrapper.style.marginTop = navbarWrapper.clientHeight + 'px';

window.addEventListener('resize', handleResize)

function isPlatformDesktop() {
  return browser.getPlatform()?.type === 'desktop';
}

function handleResize() {
  if (screen.width > 1023) {
    metaViewport.setAttribute('content', 'width=1440,initial-scale=1')
  } else if (screen.width < 375) {
    metaViewport.setAttribute('content', 'width=375,initial-scale=1')
  } else {
    metaViewport.setAttribute('content', 'width=device-width,initial-scale=1')
  }
}

handleResize()
