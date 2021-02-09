import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'


const query = graphql`
  {
    person: file(relativePath: {eq: "coder-cropped.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {person} = useStaticQuery(query);

  return (
    <header className="hero">
      <Image fluid={person.childImageSharp.fluid} className="hero-person"/>
    </header>
  )
}

export default Hero
