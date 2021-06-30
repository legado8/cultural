import styled from 'styled-components';

export const StyledHero = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  ${({ bg }) =>
    bg
      ? `
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      `
      : ''}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  h2 {
    margin: 6rem;
    font-size: 64px;
    text-align: center;
  }

  @media (max-width: 600px) {
    h2 {
      margin: 2rem;
      font-size: 32px;
    }
  }
  .hero-particles {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`;
