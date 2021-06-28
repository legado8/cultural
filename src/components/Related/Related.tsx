import React from 'react';

import { Gallery } from '../Gallery';
import { GalleryItem } from '../GalleryItem';
import { StyledRelated } from './StyledRelated';

export const Related = ({ articles }) => {
  return (
    <StyledRelated>
      <h2>Sigue explorando</h2>
      <Gallery>
        {articles.map((edge) => (
          <GalleryItem
            key={edge.node.frontmatter.title}
            to={`/articles/${edge.node.slug}`}
            title={edge.node.frontmatter.title}
            image={edge.node.frontmatter.hero}
          />
        ))}
      </Gallery>
    </StyledRelated>
  );
};
