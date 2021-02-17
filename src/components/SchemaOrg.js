import React from 'react'
import { Helmet } from 'react-helmet'

export default React.memo(
  ({
    isBlogPost,
    url,
    title,
    image,
    description,
    dateCreated,
    datePublished,
    dateModified,
    siteUrl,
    author,
    organization,
    defaultTitle,
  }) => {
    const baseSchema = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url,
        datePublished,
        name: defaultTitle,
        alternateName: title,
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': url,
              name: title,
              image,
            },
          },
        ],
      },
    ]

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            description,
            author: {
              '@type': 'Person',
              name: author,
            },
            publisher: {
              '@type': 'Organization',
              url: organization.url,
              logo: {
                '@type': 'ImageObject',
                url: organization.logo,
              },
              name: organization.name,
            },
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': siteUrl,
            },
            datePublished,
          },
        ]
      : baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
