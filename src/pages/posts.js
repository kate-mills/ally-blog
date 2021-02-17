import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

const PostsPage = ({ data }) => {
  const {
    allMdx: { posts },
  } = data
  return (
    <Layout>
      <SEO title="All Posts" />
      <Hero />
      <Posts posts={posts} title={'All Posts'} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      posts: nodes {
        id
        excerpt
        frontmatter {
          title
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date(formatString: "MMM Do, YYYY")
          author
          category
          readTime
        }
      }
    }
  }
`

export default PostsPage
