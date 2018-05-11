import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export default ({ siteTitle }) => (
  <Header>
    <Link to="/">{siteTitle}</Link>
  </Header>
);
