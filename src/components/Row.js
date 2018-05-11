import React from 'react';
import styled from 'react-emotion';


const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;

  @media (min-width: 40rem) {
    flex-direction: row;
    margin-left: -1.0rem;
    width: calc(100% + 2.0rem);
  }
`;

export default ({ children }) => <Row>{children}</Row>;