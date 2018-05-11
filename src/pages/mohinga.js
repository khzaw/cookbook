import React from 'react';
import Link from 'gatsby-link'
import styled from 'react-emotion';
import logo from './mohinga.png';

import Row from '../components/Row';
import Column from '../components/Column';
import Container from '../components/Container';


const RecipeName = styled.h2`
`

const RecipeArticle = styled.article`

`

const RecipeHeader = styled.div`
  margin-bottom: 30px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const RecipeIngredients = styled.ul`
  margin-left: 0;
  li {
    margin: 0;
  }
`
const RecipeImage = styled.img`
`

export default () => (
  <Container>
    <Row>
      <Column order={2}>
        <h1>Mohinga</h1>
        <RecipeIngredients>
          <li>2 white onions, chopped</li>
          <li>1 lb tilapia or catfish fillet</li>
          <li>1 (1-inch) piece fresh ginger, chopped</li>
          <li>5 cloves garlic, minced</li>
          <li>8 tablespoons vegetable oil</li>
          <li>3 teaspoons turmeric</li>
          <li>2 teaspoons paprika</li>
          <li>8 tablespoons rice flour (or chickpea flour)</li>
          <li>3 stalks lemongrass</li>
          <li>2 teaspoons dashi powder</li>
          <li>8 tablespoons fish sauce</li>
          <li>1 lb rice noodles</li>
          <li>1 bunch cilantro, coarsely chopped</li>
          <li>3 hard-boiled eggs, halved</li>
          <li>2 limes, quartered</li>
          <li>Crushed red pepper</li>
        </RecipeIngredients>
      </Column>
      <Column order={1}>
        <RecipeImage src={logo} alt="Mohinga" />
      </Column>
    </Row>
  </Container>
);
