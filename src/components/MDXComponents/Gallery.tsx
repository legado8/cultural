import React from 'react';
import Masonry from 'react-masonry-css';

import { StyledGallery } from '../Gallery/StyledGallery';

export const Gallery = ({ children }) => (
  <StyledGallery style={{ margin: '2rem 0' }}>
    <Masonry
      breakpointCols={{ default: 5, 700: 3, 500: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  </StyledGallery>
);
