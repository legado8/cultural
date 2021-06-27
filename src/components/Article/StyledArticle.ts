import styled from 'styled-components';

import { StyledMeta } from '../Meta/StyledMeta';

export const StyledArticle = styled.article`
  padding: 6rem 0;

  h2 {
    font-size: 48px;
  }

  p,
  h2,
  ol,
  ul,
  ${StyledMeta} {
    max-width: 980px;
    margin: 0 auto;
    padding: 1rem;
  }

  .mdx-embed {
    margin: 0 auto;
    padding: 2rem 0;
    max-width: 1200px;
  }

  @media (max-width: 600px) {
    & {
      padding: 2rem 1rem;
    }
  }
`;
