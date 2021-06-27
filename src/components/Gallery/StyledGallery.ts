import styled from 'styled-components';

const GUTTER = '0';

export const StyledGallery = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -${GUTTER}; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: ${GUTTER}; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: ${GUTTER};
  }
`;
