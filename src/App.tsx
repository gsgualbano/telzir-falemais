import React from 'react';
import { Container, Content } from './styles';
import Header from './components/Header';
import Body from './components/Body';

const App: React.FC = () => (
  <Content>
    <Container>
      <Header />
      <Body />
    </Container>
  </Content>
);

export default App;
