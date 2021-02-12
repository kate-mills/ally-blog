// https://mdxjs.com/
// https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/

import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import { Blockquote, Div } from './src/components/Complete'

const components = {
  blockquote: Blockquote,
  div:Div, 
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

