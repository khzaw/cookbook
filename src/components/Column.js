import React from 'react';
import styled from 'react-emotion';

const Column = styled.div`
  display: block;
  flex: 1 1 auto;
  margin-left: 0;
  max-width: 100%;
  width: 100%;
  order: ${props => props.order ? props.order : 'inherit'};
  
  @media (min-width: 40.0rem) {
    margin-bottom: inherit;
    padding: 0 1.0rem;
  }
`;

export default ({ children }) => <Column>{children}</Column>; 