import React from 'react';
import { Link } from 'gatsby';

import { StyledFooter } from './StyledFooter';

export const Footer = () => (
  <StyledFooter>
    <div>Cultural, la revista digital libre de Legado8.</div>
    Cultural © {new Date().getFullYear()}
    <ul>
      <li>
        <Link to="/legal-warning">Aviso Legal</Link>
      </li>
      <li>
        <Link to="/use-conditions">Condiciones de uso</Link>
      </li>
      <li>
        <Link to="/privacy-policy">Politica de privacidad</Link>
      </li>
    </ul>
  </StyledFooter>
);
