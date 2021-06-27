import './src/styles/reset.scss';

// Mobile workaround for vh
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
if (window) {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
