import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          Posts
        </Link>
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          Newsletter
        </Link>
      </li>
    </ul>
  )
}

export default Links

export const navLinks = [
  {
    text: 'Home',
    url: '/',
    id: 1,
  },
  {
    text: 'Posts',
    url: '/posts',
    id: 2,
  },
  {
    text: 'Newsletter',
    url: '/newsletter',
    id: 3,
  },
]
