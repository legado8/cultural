import React from 'react';

import { StyledMenuButton } from './StyledMenuButton';

export const MenuButton = ({ open, setOpen }) => {
  const bg = open ? 'white' : 'black';
  return (
    <StyledMenuButton
      onClick={() => {
        setOpen((before: boolean) => !before);
      }}
    >
      <svg width="32" height="32" viewBox="0 0 100 100">
        <rect width="100" height="20" fill={bg} />
        <rect width="100" height="20" y="40" fill={bg} />
        <rect width="70" height="20" y="80" x="30" fill={bg} />
      </svg>
    </StyledMenuButton>
  );
};
