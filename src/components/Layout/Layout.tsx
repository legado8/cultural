import * as React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Menu } from '../Menu';
import { MDXComponents } from '../MDXComponents';

export const Layout = ({ children }) => {
  return (
    <Menu>
      <Header />
      <MDXComponents>{children}</MDXComponents>
      <Footer />
    </Menu>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
