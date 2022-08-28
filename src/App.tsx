import React, { useState } from 'react';
import Calendario from './components/card/Calendario';
import './global.ts';
import { Container } from './styles';
import { GlobalStyle } from "./global";
import Horarios from './components/card/Horarios';

function criarArrayCalendario(ano = 0, mes = 0) {
  let mesAtual = mes + 1;
  let anoAtual = ano;
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

function nomeMes(mesNumero: any) {
  let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return meses[mesNumero];
}

function App() {
  let mesAtual = new Date().getMonth();
  let anoAtual = new Date().getFullYear();
  const [ano, setAno] = useState(anoAtual);
  const [mes, setmes] = useState(mesAtual);
  const [dia, setDia] = useState(1);
  let data = dia+"/"+mes+"/"+ano; 
  if (mes > 11) {
    setmes(0);
    setAno(ano + 1);
  }
  if (mes < 0) {
    setmes(11);
    setAno(ano - 1);
  }

  return (
    <Container>
      <div className='calendario'>
        <div className='painel-calendario' >
          <button onClick={() => setmes(mes - 1)}> {"<<"} </button>
          <div className='mesAno' >{ano + " " + nomeMes(mes)}</div>
          <button onClick={() => setmes(mes + 1)}> {">>"} </button>
        </div>
        <Calendario
          dias={criarArrayCalendario(ano, mes)}
          setDia={setDia}
        />
        <GlobalStyle />
      </div>
      <Horarios data={data} ></Horarios>
    </Container>
  );
}
export default App;