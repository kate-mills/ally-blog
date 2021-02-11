import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'


const query = graphql`
  {
    girl: file(relativePath: {eq: "blogging.png"}) {
      childImageSharp {
        fluid(maxWidth:200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = ({showGirl}) => {
  const {girl} = useStaticQuery(query);

  return (
    <header className="hero">
      {showGirl ? 
        <Image fluid={girl.childImageSharp.fluid} className="hero-girl"/>:
          ""
      }
    </header>
  )
}

export default Hero
