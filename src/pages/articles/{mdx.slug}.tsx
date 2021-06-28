import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as dayjs from 'dayjs';

import { Layout } from '../../components/Layout';
import { Hero } from '../../components/Hero';
import { Article } from '../../components/Article';
import { Container } from '../../components/Container';
import { Meta } from '../../components/Meta';
import { Related } from '../../components/Related';

const ArticlePage = ({ data: { mdx, allMdx } }) => {
  return (
    <Layout>
      <Hero bg={mdx.frontmatter.hero.childImageSharp.original.src} />
      <Container bg={mdx.frontmatter.color}>
        <Article>
          <Meta>
            {dayjs(mdx.frontmatter.date).format('DD MMM YYYY')}
            {mdx.frontmatter.tags && ` - ${mdx.frontmatter.tags.join(', ')}`}
            {` - ${Math.ceil(mdx.wordCount.words / 200)} minutos de lectura`}
          </Meta>
          <h2>{mdx.frontmatter.title}</h2>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <Related articles={allMdx.edges} />
        </Article>
      </Container>
    </Layout>
  );
};

export default ArticlePage;

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
        tags
        color
        hero {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
      wordCount {
        words
      }
      body
    }
    allMdx(filter: { id: { ne: $id } }, limit: 3) {
      edges {
        node {
          slug
          excerpt
          frontmatter {
            title
            date
            hero {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          wordCount {
            words
          }
        }
      }
    }
  }
`;
