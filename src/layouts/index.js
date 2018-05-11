import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';


import Header from '../components/header'
// import './index.css'


const Layout = ({ children, data }) => (
  <div style={{
  }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
