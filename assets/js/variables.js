const headerWrapper = document.querySelector('.header-wrapper');
const navbarWrapper = document.querySelector('.navbar-wrapper');
const container = document.querySelector('.container');
const aboutRoadmap = document.querySelector('#roadmap-about');
const metaViewport = document.querySelector('meta[name=viewport]');

let browser = bowser.getParser(window.navigator.userAgent);
window.addEventListener('resize', () => {
    browser = bowser.getParser(window.navigator.userAgent)
})
