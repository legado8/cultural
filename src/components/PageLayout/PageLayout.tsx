import React from 'react';

import { SEO } from '../SEO';
import { Hero } from '../Hero';
import { Article } from '../Article';
import { Layout } from '../Layout';

export const PageLayout = ({ children, title }) => (
  <Layout>
    <SEO title={title} />
    <Hero>{title}</Hero>
    <Article>{children}</Article>
  </Layout>
);
