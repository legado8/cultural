import styled from 'styled-components';

export const StyledTitle = styled.div`
  padding: 12rem 1rem;
  text-align: center;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 64px;
    line-height: 64px;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 32px;
      line-height: 32px;
    }
  }
`;
