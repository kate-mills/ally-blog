import React from 'react'
import styled from 'styled-components'
import About from './About'
import Recent from './Recent'
import BannerCategories from './BannerCategories'
const Banner = ({ hideImg }) => {
  return (
    <Wrapper>
      <About hideImg={hideImg} />
      <BannerCategories />
      <Recent />
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  background: var(--hintOfPink);
  color: var(--black);
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1rem;
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 200px);
      column-gap: 3rem;
    }
  }
`

export default Banner
