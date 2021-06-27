import React from 'react';
import Masonry from 'react-masonry-css';

import { StyledGallery } from './StyledGallery';

export const Gallery = ({
  children,
  breakpointCols = { default: 3, 700: 2, 500: 1 },
}) => {
  return (
    <StyledGallery>
      <Masonry
        breakpointCols={breakpointCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {children}
      </Masonry>
    </StyledGallery>
  );
};
