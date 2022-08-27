import React from 'react';
import Card from './components/card/Card';
import './global.ts';
import { Container } from './styles';
import { GlobalStyle } from "./global";


function App() {
  let dadosCard = {
    domingo : [1,2,3,4,5]
    ,segunda : [1,2,3,4,5]
    ,terca : [1,2,3,4,5]
    ,quarta : [1,2,3,4,5]
    ,quinta : [1,2,3,4,5]
    ,sexta : [1,2,3,4,5]
    ,sabado : [1,2,3,4,5]
  };

  let card = <Card
    dias={dadosCard}
  ></Card>;
  return (
    <Container>
       {card}
      <GlobalStyle />
    </Container>
  );
}
export default App;