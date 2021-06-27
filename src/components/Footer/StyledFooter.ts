import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #101010;
  color: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  text-align: center;

  div {
    font-size: 64px;
    padding: 8rem;
    line-height: 64px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    div {
      font-size: 32px;
      line-height: 32px;
      padding: 1rem;
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;

    li {
      list-style: none;
      margin: 0;
      padding: 0 0 0 1rem;
      a {
        color: white;
      }
    }
  }

  @media (max-width: 600px) {
    ul {
      flex-direction: column;
    }
  }
`;
