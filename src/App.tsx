import React from 'react';
import Card from './components/card/Card';
import './global.ts';
import { Container } from './styles';
import { GlobalStyle } from "./global";


function App() {
  let data = new Date();
  let mesAtual = data.getMonth() + 1;
  let diaAtual = data.getDay();
  let anoAtual = data.getFullYear();

  let diasDoMes = new Date(anoAtual, mesAtual, 0).getDate();

  let dadosCard : any= {
    domingo: ['Domingo']
    , segunda: ['Segunda']
    , terca: ['Terca']
    , quarta: ['Quarta']
    , quinta: ['Quinta']
    , sexta: ['Sexta']
    , sabado: ['Sabado']
  };

  for (let i = 1; i <= diasDoMes; i++) {
    if (0 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      console.log(new Date(anoAtual, mesAtual - 1, i).getDay()+"-----"+i+"------");
      dadosCard.domingo.push(i);
    }
    if (1 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCard.segunda.push(i);
    }
    if (2 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCard.terca.push(i);
    }
    if (3 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCard.quarta.push(i);
    }
    if (4 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCard.quinta.push(i);
    }
    if (5 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCard.sexta.push(i);
    }
    if (6 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCard.sabado.push(i);
    }
  }

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