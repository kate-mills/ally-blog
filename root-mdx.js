// https://mdxjs.com/
// https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/

import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import { Blockquote, Div } from './src/components/Complete'
import {BsDot} from 'react-icons/bs'

const newLi =  (props)=> {
  return (
    <div>
      <li>
        < BsDot style={{display: 'inline !important', padding: '.4rem 0 .2rem'}}/>
        <p style={{display: 'inline', padding: '0 0 .2rem', margin: '7.5px auto'}}>
          {props.children}
        </p>
      </li>
      </div>
  )
}

const components = {
  blockquote: Blockquote,
  div:Div, 
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

