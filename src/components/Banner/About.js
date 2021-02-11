import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'


const query = graphql`
  {
    file(relativePath: {eq: "blogger.png"}) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


const About = ({hideImg}) => {
  const data = useStaticQuery(query)

  return (
    <Wrapper>
      <Title title="Ally Blog"/>
      {hideImg ?
          "":
        <Image fixed={data.file.childImageSharp.fixed} className="img"/>
      }
      <p>Follow us on social media @allydigitalsolutions</p>
      <SocialLinks styleClass="banner-icons"></SocialLinks>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
    font-size: 0.7rem;
  }
  .img {
    border-radius: 50%;
  }
`

export default About
