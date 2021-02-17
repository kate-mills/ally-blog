import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from './SchemaOrg'

const SEO = ({ title, description, image, article, isBlogPost, frontmatter={}, postData }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    organization,
  } = site.siteMetadata

  console.log('frontmatter', frontmatter)
  console.log('image', image)

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }


  console.log('seo', seo);

  const postMeta =
    frontmatter || postData.childMarkdownRemark
    .frontmatter || {};

  const postTitle = defaultTitle || seo.title;
  const postDesc = postMeta.desc || seo.description;
  const postImage = frontmatter.image ? `${siteUrl}/${frontmatter.image.publicURL}` : seo.image 
  //const postImage = frontmatter.image ? `${seo.url}${defaultImage}` : seo.image;
  const postUrl = postMeta.slug
        ? `${seo.url}/${postMeta.slug}/`
        : seo.url;
  const postDate = isBlogPost ? postMeta.date : false;


  return (
    <React.Fragment>
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={seo.url}
        title={ postTitle || seo.title}
        image={postImage || seo.image}
        description={postDesc || defaultDescription}
        datePublished={postDate}
        siteUrl={postUrl}
        author={`Kate Author`}
        organization={organization.name}
        defaultTitle={seo.title}
      />
    </React.Fragment>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  isBlogPost: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  isBlogPost: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        organization{
          name
          url
          logo
        }
      }
    }
  }
`
