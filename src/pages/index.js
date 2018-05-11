import React from 'react';
import Link from 'gatsby-link';
import { injectGlobal } from 'emotion';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #111;
    text-shadow: rgba(0,0,0,.1) 0 0 1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    max-width: 960px;
    margin: 3rem auto;
  }

  h1 {
  }


  ul {
    list-style: circle inside;
  }

  small {
    color: #666;
  }
`

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/mohinga/">Mohinga</Link>
  </div>
)

export default IndexPage
