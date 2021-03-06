import { Link } from 'gatsby'
import { FiInfo } from 'react-icons/fi'
;<section className="mdx-page">
  <div className="code">
    <div className="center">
      <h2>What Everybody Ought to Know About Fonts</h2>
      <Link to="/posts" className="btn center-btn">
        back to all posts
      </Link>
    </div>
  </div>

  <h3>Why Fonts are a big deal</h3>

  <h3>Types of Font</h3>

  <h4 className="serif font"> serif </h4>
  <h4 className="script font">script </h4>
  <h4 className="san font">san serif </h4>
  <h4 className="display font"> DISPLAY</h4>

  <div className="nice-text">
    <h3> Where to discover new fonts</h3>

    <FiInfo className="nice-text-icon" />

    <p>
      {' '}
      <a href="https://fontpair.co/" className="mdx-a">
        FontPair
      </a>
      is a site where you can discover new fonts & see if they pair well
      together.
    </p>

    <p>
      {' '}
      All of{' '}
      <a href="https://fonts.google.com/" className="mdx=a">
        Google Fonts
      </a>{' '}
      are free. You can download them to use on your computer or import them
      into your web project.
    </p>
  </div>
</section>
