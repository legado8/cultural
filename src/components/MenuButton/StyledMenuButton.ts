import styled from 'styled-components';

export const StyledMenuButton = styled.div`
  cursor: pointer;
  position: fixed;
  right: 2rem;
  top: 2.5rem;
  z-index: 10;

  svg {
    rect {
      transition: all .3s ease;
    }
  }
`;
