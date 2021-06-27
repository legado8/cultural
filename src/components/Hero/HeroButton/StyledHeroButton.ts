import styled from 'styled-components';

const COLOR = '#000000';

export const StyledHeroButton = styled.div`
  cursor: pointer;
  left: 50%;
  position: absolute;
  text-align: center;
  bottom: 0;
  transform: translate(-50%, -50%);

  div {
    border: 2px solid ${COLOR};
    border-radius: 30px;
    height: 46px;
    margin: 0 auto 8px;
    text-align: center;
    width: 30px;
  }

  .scrolldown-p1,
  .scrolldown-p2 {
    animation-duration: 1.5s;
    animation-name: scrolldown;
    animation-iteration-count: infinite;
    fill: ${COLOR};
  }

  .scrolldown-p2 {
    animation-delay: 0.75s;
  }

  @keyframes scrolldown {
    0% {
      opacity: 0;
      transform: translate(0, -8px);
    }
    50% {
      opacity: 1;
      transform: translate(0, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 8px);
    }
  }
`;
