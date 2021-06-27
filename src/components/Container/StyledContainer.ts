import styled from 'styled-components';

export const StyledContainer = styled.div`
  ${({ bg }) => bg && `background-color: ${bg};`}
`;
