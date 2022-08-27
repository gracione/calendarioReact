import React from 'react';
import Card from './components/card/Card';
import './global.ts';
import { Container } from './styles';
import { GlobalStyle } from "./global";


function App() {
  let dadosCard = [
    {
      "cliente": "carlos",
      "funcionario": "pedro",
      "tratamento": "hidra",
      "telefone": "999998",
      "horario" : "08:30",
      "data" : "3 de janeiro 2021"
    },
    {
      "cliente": "jose",
      "funcionario": "araujo",
      "tratamento": "hidra",
      "telefone": "555998",
      "horario" : "09:30",
      "data" : "3 de janeiro 2021"
    },
  ];

  let card = [];
  for (let index = 0; index < dadosCard.length; index++) {
    card[index] = <Card
      cliente={dadosCard[index].cliente}
      funcionario={dadosCard[index].funcionario}
      tratamento={dadosCard[index].tratamento}
      telefone={dadosCard[index].telefone}
      horario={dadosCard[index].horario}
      data={dadosCard[index].data}
    />;
  }

  return (
    <Container>
      {card}
      <GlobalStyle />
    </Container>
  );
}
export default App;