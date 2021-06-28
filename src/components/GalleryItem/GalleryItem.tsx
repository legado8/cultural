import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Meta } from '../Meta';
import { StyledGalleryItem } from './StyledGalleryItem';

export const GalleryItem = ({
  image = null,
  title = null,
  description = null,
  meta = null,
  to = null,
}) => {
  const src = getImage(image);
  return (
    <StyledGalleryItem>
      <Link to={to}>
        <GatsbyImage image={src} alt={title} />
      </Link>
      <div>
        <Link to={to}>
          <h3>{title}</h3>
        </Link>
        {description && <p>{description}</p>}
        {meta && <Meta>{meta}</Meta>}
      </div>
    </StyledGalleryItem>
  );
};
