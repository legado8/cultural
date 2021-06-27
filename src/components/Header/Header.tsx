import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { StyledHeader } from './StyledHeader';
import { Logo } from '../Logo';

export const Header = () => (
  <StyledHeader>
    <Logo title={'Cultural'} />
    <div>
      <Link to={'/'}>
        <h1>Cultural</h1>
      </Link>
    </div>
    <div></div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};
