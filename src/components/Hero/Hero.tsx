import React from 'react';

import { StyledHero } from './StyledHero';
import { HeroButton } from './HeroButton';
import ParticlesBg from 'particles-bg';

export const Hero = ({ children = null, bg = null }) => {
  return (
    <StyledHero bg={bg}>
      <HeroButton />
      <h2>{children}</h2>
      {!bg && <ParticlesBg type={'cobweb'} bg={true} />}
    </StyledHero>
  );
};
