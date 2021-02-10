import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'


const IndexPage = ({data}) => {
  const {allMdx: {posts}} = data;

  return <Layout>
    <Hero showGirl/>
    <Posts posts={posts} title="recently published" />
    </Layout>
}


export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      posts:nodes {
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
export default IndexPage
