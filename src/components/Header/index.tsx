import React from 'react';

import { Animated } from 'react-animated-css';

import {
  Container,
  Text,
  Title,
  Icon,
  Logo,
} from './styles';

/**
 * Cabeçalho da página
 */
const Header = (props: {}) => (
  <Container>
    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible>
      <Text>TELZIR</Text>
      <Logo>
        <Title>FaleMais</Title>
        <Icon />
      </Logo>
    </Animated>
  </Container>
);

export default Header;
