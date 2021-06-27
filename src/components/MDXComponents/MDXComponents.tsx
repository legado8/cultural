import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Gallery } from './Gallery';

export const MDXComponents = ({ children }) => (
  <MDXProvider components={{ gallery: Gallery }}>{children}</MDXProvider>
);
