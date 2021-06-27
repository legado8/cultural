import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledLogo } from './StyledLogo';

export const Logo = ({ title }) => (
  <StyledLogo>
    <Link to="/" title={title}>
      <StaticImage
        src={'../../images/logo.png'}
        alt={title}
      />
    </Link>
  </StyledLogo>
);

Logo.propTypes = {
  alt: PropTypes.string,
};
