import { HorariosCard } from "./style";
import React, { useState, useEffect } from 'react';
import api from './../../services/api';

export default function Horarios(props: any) {
  const [token] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState([]);
  const array: any[]= props.data.split("/");
  const [dia, setDia] = useState(22);
//  setDia(array[0]);
  useEffect(() => {
    api
    .post("/horarios-marcados",{
      dia:array[0],
      mes:"8",
      ano:"2022"
    })
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, [array[0]]);
  
  //console.log(user);
  let horariosDisponivel:any = [];

  user.forEach((element: any) => {
    horariosDisponivel.push(
      <HorariosCard>{element.horario_inicio}</HorariosCard>
    )
  });

  let listaHorarios: any = [];

return (
  <HorariosCard >
      {props.data}
      {listaHorarios}
      {horariosDisponivel}
    </HorariosCard>
  );
}
