
import React from 'react';
import { Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const PostList = ({ title }) => {
  return (
    <StaticQuery
      query={graphql`
        query ListQuery {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  path
                  date(formatString: "MMMM Do YYYY")
                  title
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
          }
        }
      `}
      render={data => (
        <section className="post-list">
          {title !== undefined && <h2 className="post-list__title">{ title }</h2> }
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={node.frontmatter.path} className="post-list-item" key={node.frontmatter.path}>
              <Img
                className="post-list-item__image"
                fluid={node.frontmatter.image.childImageSharp.fluid}
              />
              <h1 className="post-list-item__title" >{node.frontmatter.title}</h1>
              <date className="post-list-item__date" >{node.frontmatter.date}</date>
              <p className="post-list-item__excerpt" >{node.excerpt}</p>
            </Link>
          ))}
        </section>
      )}
    />
  )
}

export default PostList;
