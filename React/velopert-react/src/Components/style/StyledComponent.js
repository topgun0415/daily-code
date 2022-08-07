/** @format */

import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &: hover {
        background: white;
        color: black;
      }
    `}
`;

const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max0width: 768px) {
    width: 100%;
  }
`;

const StyledComponent = () => {
  return (
    <Wrapper>
      <Box>
        <Title>Welcome to Styled Component</Title>
        <Button inverted={true}>Normal</Button>
        <Button primary>Primary</Button>
      </Box>
    </Wrapper>
  );
};

export default StyledComponent;
