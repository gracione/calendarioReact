import { HorariosCard } from "./style";
import React, { useState, useEffect } from 'react';
import api from './../../services/api';

export default function Horarios(props: any) {
  const [token] = useState(localStorage.getItem('token'));
  const [teste, setTest] = useState();
  
  let horariosDisponivel: any[] = [];
  let listaHorarios: any = [];
  api
    .post("/horarios-marcados", token)
    .then((response) => {
      setTest(response.data);
//      horariosDisponivel.push(response.data[0].horario_inicio);
    }
    );
    
  /////////////////

  console.log(teste);
    
  horariosDisponivel.forEach(element => {
    listaHorarios.push(
      <div className="horario-disponivel" >
        <h4>{element}
        </h4>
        <img src="https://cdn-icons-png.flaticon.com/512/151/151770.png" alt="" />
      </div>);
  });
  return (
    <HorariosCard >
      {props.data}
      {listaHorarios}
    </HorariosCard>
  );
}
