import React from 'react';

import { StyledContainer } from './StyledContainer';

export const Container = ({ children, bg = null }) => {
  return <StyledContainer bg={bg}>{children}</StyledContainer>;
};
