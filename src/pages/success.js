import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import SEO from '../components/SEO'

const Success = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <section className="success-page">
        <div className="page-center">
          <h2>your submission was received!</h2>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
