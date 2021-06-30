import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './src/styles/reset.scss';

// Mobile workaround for vh
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
if (window) {
  const updateVH = () => {
    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  window.addEventListener('resize', updateVH);
  updateVH();
}

export const wrapPageElement = ({ element }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>;
};
