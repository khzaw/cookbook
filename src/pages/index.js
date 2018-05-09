import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{
    margin: '3rem auto',
    maxWidth: 600
  }}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/mohinga/">Mohinga</Link>
  </div>
)

export default IndexPage
