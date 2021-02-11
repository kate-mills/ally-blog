import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'


const query = graphql`
  {
    file(relativePath: {eq: "square-coffee-gal.png"}) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


const About = () => {
  const data = useStaticQuery(query)

  return (
    <Wrapper>
      <Title title="Ally"/>
      <Image fixed={data.file.childImageSharp.fixed} className="img"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`

export default About
