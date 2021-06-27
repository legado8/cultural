import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  width: 100vw;
  padding: 2rem;
  z-index: 5;

  align-items: center;
  justify-content: center;
  display: flex;

  div:nth-child(2) {
    flex: 1 1 auto;
    text-align: center;
    a {
      color: black;
      text-decoration: none;
      h1 {
        margin: 0;
        padding: 0;
      }
    }
  }

  div:last-child {
    width: 48px;
  }
`;
