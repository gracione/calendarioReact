import { HorariosCard } from "./style";
import React, { useState, useEffect } from 'react';
import api from './../../services/api';

export default function Horarios(props: any) {
  const [token] = useState(localStorage.getItem('token'));
  
  let horariosDisponivel: string[] = [];
  let listaHorarios: any = [];


    const response = api.post("/horarios-marcados", {});
    console.log(response);
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
