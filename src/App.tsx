import React, { useState, useEffect } from 'react';
import Calendario from './components/card/Calendario';
import './global.ts';
import { Container } from './styles';
import { GlobalStyle } from "./global";

function CriarArrayCalendario(ano = 0, mes = 0) {
  let data = new Date();
  let mesAtual = data.getMonth() + 1 + mes;
  let diaAtual = data.getDay();
  let anoAtual = data.getFullYear() + ano;
  let diasDoMes = new Date(anoAtual, mesAtual, 0).getDate();
  let dadosCalendario: any = []

  dadosCalendario[0] = [];
  dadosCalendario[1] = [];
  dadosCalendario[2] = [];
  dadosCalendario[3] = [];
  dadosCalendario[4] = [];
  dadosCalendario[5] = [];
  dadosCalendario[6] = [];

  for (let i = 1; i <= diasDoMes; i++) {
    if (0 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCalendario[0].push(i);
    }
    if (1 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCalendario[1].push(i);
    }
    if (2 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCalendario[2].push(i);
    }
    if (3 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCalendario[3].push(i);
    }
    if (4 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCalendario[4].push(i);
    }
    if (5 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCalendario[5].push(i);
    }
    if (6 == new Date(anoAtual, mesAtual - 1, i).getDay()) {
      dadosCalendario[6].push(i);
    }
  }
  for (let i = 0; i <= 7; i++) {
    let xs = new Date(anoAtual, mesAtual - 1, 0).getDay();
    if (i <= xs) {
      dadosCalendario[i].unshift('x');
    }
  }
  return dadosCalendario;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <button onClick={() => setCount(count - 1)}> {"<<"} </button>
      <button onClick={() => setCount(count + 1)}> {">>"} </button>
      <Calendario
        dias={CriarArrayCalendario(0, count)}
      />
      <GlobalStyle />
    </Container>
  );
}
export default App;