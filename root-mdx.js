// https://mdxjs.com/
// https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/

import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import { Blockquote } from './src/components/Complete'

const mySpan = (props) => {
  return (
    <>
      <span style={{background:props.color, borderRadius: "50%", color: "transparent", position: "relative", bottom: "1px" , border: "1px solid grey", marginBottom: "0.5rem"}}>red</span>
      <span style={{textTransform: "capitalize", fontSize: "1.2rem"}}>
        {` ${props.color.toUpperCase()} \n`} 
        {props.children}
      </span>
      <span style={{height: "1rem", display: "block", color: "transparent"}}/>
    </>
  )
}
const components = {
  blockquote: Blockquote,
  span: mySpan,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

