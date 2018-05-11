import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  margin: 0 auto;
  max-width: 112rem;
  padding: 0 2.0rem;
  position: relative;
  width: 100%;
`;

export default ({ children }) => (
  <Container>{children}</Container>
);