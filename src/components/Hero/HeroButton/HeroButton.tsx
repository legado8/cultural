import React from 'react';

import { StyledHeroButton } from './StyledHeroButton';

export const HeroButton = () => {
  return (
    <StyledHeroButton
      onClick={() => {
        scrollTo(0, window?.innerHeight ?? 0);
      }}
    >
      <div>
        <svg height="30" width="10">
          <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
          <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
        </svg>
      </div>
    </StyledHeroButton>
  );
};
