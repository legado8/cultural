import styled from 'styled-components';

export const StyledMenu = styled.div`
  background-color: #101010;
  color: rgba(255, 255, 255, 0.9);
  transition: left 0.3s ease;

  width: 320px;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  position: fixed;
  left: calc(100vw - ${({ open }) => (open ? '320px' : '0px')});

  display: flex;
  flex-direction: column;

  ul {
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      margin: 0;
      padding: 2rem;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }

  ul:first-child {
    flex: 1 1 auto;
    li {
      border-bottom: 1px solid rgb(40, 40, 40);
      a.selected {
        text-decoration: underline;
      }
    }
  }

  ul:last-child {
    li {
      border-top: 1px solid rgb(40, 40, 40);
    }
  }
`;
