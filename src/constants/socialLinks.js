import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://facebook.com/allydigitalsolutions">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://instagram.com/allydigitalsolutions">
          <FaInstagramSquare className="social-icon insta-icon"/>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
