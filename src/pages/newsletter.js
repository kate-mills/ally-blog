import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
const NewsLetter = () => {
  return (
    <Layout>
      <SEO title="Newsletter" />
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I write to my digital friends every few weeks.</h4>
          <div className="form-space">
            <form
              method="post"
              name="contact-form"
              action="/success"
              className="contact-form"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact-form" />

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="form-control"
              />
              <button type="submit" className="form-control submit-btn">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
