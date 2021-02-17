import React from 'react'
import Image from 'gatsby-image'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = ({ frontmatter, excerpt }) => {
  const { title, image, slug, date, category, readTime } = frontmatter
  return (
    <Wrapper>
      <Image fluid={image.childImageSharp.fluid} className="img" />
      <div className="info">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <div className="underline"></div>
        <p>{excerpt}</p>
        <Link to={`/posts/${slug}/`} className="link">
          Continue Reading
          <IoMdArrowRoundForward />
        </Link>
        <footer>
          <span className="date">
            <FaRegClock className="icon" />
            {date}
          </span>
          <span>{readTime} min read</span>
        </footer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: 3rem;
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 17rem;
  }
  .category {
    color: var(--vividText);
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--instaLadderlight);
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    font-weight: 400;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    text-transform: capitalize;
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--black);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--darkGrey);
    line-height: 1.8;
    font-size: 0.8rem;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--mauve);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: var(--brightPink);
    color: var(--pantsDarkPink);
  }
  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--black);

    & .date {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      & .icon {
        color: var(--black);
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post
