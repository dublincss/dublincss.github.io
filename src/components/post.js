import React from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

function Post(props) {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;

  return (
    <Layout>
      <section className="site-post">
        <h1>{title}</h1>
        <Img
          className="site-post__image"
          fluid={post.frontmatter.image.childImageSharp.fluid}
        />
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        path
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
