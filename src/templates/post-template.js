import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Banner from '../components/Banner'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const PostTemplate = ({data}) => {
  const {
    mdx: {frontmatter: {title, category, image, date},
      body,
    },
  } = data

  return (

    <Layout>
      <Hero showGirl/>
      <Wrapper>
        {/* post info*/}
        <article className="post-container">
          <div className="post-info">
            <span className="category">{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div className="underline"></div>
          </div>
          <Image fluid={image.childImageSharp.fluid} className="main-img"/>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
        <article>
          <Banner hideImg/>
        </article>
      <div className="center" style={{marginBottom: '1rem'}} > <Link to="/posts" className="btn center-btn">back to all posts</Link> </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-container{
    margin-bottom: 5rem;
  }
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--primaryPink);
      color: var(--black);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--darkGrey);
      font-size: 0.8rem;
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--black);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .post-container{
      margin-bottom: 0;
    }
    .main-img{
      max-width: 75%;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
    .main-img{
      max-width: 75%;
      margin: 0 auto;
    }
  }
`

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      id
      body
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
`



export default PostTemplate
