import React, { useState } from 'react';
import { Link } from 'gatsby';

import { StyledMenu } from './StyledMenu';
import { StyledContainer } from './StyledContainer';
import { StyledContent } from './StyledContent';
import { MenuButton } from '../MenuButton';

export const Menu = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledContainer>
      <MenuButton open={open} setOpen={setOpen} />
      <StyledContent open={open}>{children}</StyledContent>
      <StyledMenu open={open}>
        <ul>
          <li>
            <Link to="/" activeClassName={'selected'}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>

        <ul>
          <li>
            <a
              href="https://legado8.github.io/"
              target={'_blank'}
              onClick={() => {
                setOpen(false);
              }}
            >
              Legado8
            </a>
          </li>
        </ul>
      </StyledMenu>
    </StyledContainer>
  );
};
