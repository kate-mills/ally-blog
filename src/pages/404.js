import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops" />
    <section className="error-page">
      <div className="page-center">
        <span>Oops</span>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
