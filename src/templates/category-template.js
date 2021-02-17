import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {
    data: {
      allMdx: { posts },
    },
    pageContext: { category },
  } = props

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query getcategories($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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

export default CategoryTemplate
