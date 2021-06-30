import React from 'react';
import { graphql, Link } from 'gatsby';
import * as dayjs from 'dayjs';
import { Parallax } from 'react-scroll-parallax';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Gallery } from '../components/Gallery';
import { GalleryItem } from '../components/GalleryItem';
import { Title } from '../components/Title';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Parallax y={[0, 0]}>
      <Hero>Bienvenido a Cultural, la revista digital libre de Legado8.</Hero>
    </Parallax>

    <Parallax y={[0, -10]}>
      <Title>
        <h2>Cultural</h2>
        <h3>Estas son nuestras historias</h3>
      </Title>
    </Parallax>

    <Parallax y={[0, -50]}>
      <Gallery>
        {data.allMdx.edges.map((edge) => (
          <GalleryItem
            key={edge.node.frontmatter.title}
            to={`/articles/${edge.node.slug}`}
            title={edge.node.frontmatter.title}
            image={edge.node.frontmatter.hero}
            description={edge.node.excerpt}
            meta={[
              dayjs(edge.node.frontmatter.date).format('DD MMM YYYY'),
              `${Math.ceil(
                edge.node.wordCount.words / 200
              )} minutos de lectura`,
            ].join(' - ')}
          />
        ))}
      </Gallery>
    </Parallax>

    <Parallax y={[0, -60]}>
      <Title>
        <h2>¡Únete a la revolución cultural!</h2>
        <h3>Tu historia se escribe aquí...</h3>
        <p>
          <Link to={'/contact'}>Participa del legado!</Link>
        </p>
      </Title>
    </Parallax>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allMdx {
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
