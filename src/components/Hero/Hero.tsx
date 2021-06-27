import React from 'react';

import { StyledHero } from './StyledHero';
import { HeroButton } from './HeroButton';

export const Hero = ({ children = null, bg = null }) => {
  return (
    <StyledHero bg={bg}>
      <HeroButton />
      <h2>{children}</h2>
    </StyledHero>
  );
};
