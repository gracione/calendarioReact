import { HorariosCard } from "./style";
import React, { useState, useEffect } from 'react';
import api from './../../services/api';

export default function Horarios(props: any) {
  const [token] = useState(localStorage.getItem('token'));
  
  let horariosDisponivel: string[] = [];
  let listaHorarios: any = [];
  api
    .post("/horarios-marcados", token)
    .then((response) => {
      response.data.forEach((element: any) => {
        horariosDisponivel[0] = element.horario_inicio;
      });
    });

    const [transactions, setTransactions] = useState([]);


    async function createTransaction() {
      let vetor: any = [];
      const response = await api.post("/horarios-marcados", {
      });
      response.data.forEach((element: { horario_inicio: any; }) => {
        vetor.push(element.horario_inicio);
      });
      setTransactions(vetor);
    }
    createTransaction();
    console.log(transactions);
//  horariosDisponivel.forEach((element: any) => {
//    console.log(element);
//  });
//    horariosDisponivel.forEach(element => {
//           listaHorarios.push(
//             <div className="horario-disponivel" >
//               <h4>{element}
//               </h4>
//               <img src="https://cdn-icons-png.flaticon.com/512/151/151770.png" alt="" />
//             </div>);
//    });
//    
  return (
    <HorariosCard >
      {props.data}
      {listaHorarios}
    </HorariosCard>
  );
}
