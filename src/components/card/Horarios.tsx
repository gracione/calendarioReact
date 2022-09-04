import { HorariosCard } from "./style";
import React, { useState, useEffect } from 'react';
import api from './../../services/api';

export default function Horarios(props: any) {
  const [token] = useState(localStorage.getItem('token'));
  const [transactions, setTransactions] = useState<[]>([]);

  let horariosDisponivel: string[] = [];
  let listaHorarios: any = [];


    async function createTransaction() {
      const response = await api.post("/horarios-marcados", {});
        setTransactions(response.data[0].horario_inicio);
        return response.data[0].horario_inicio;
    }
    
    createTransaction();
    console.log(transactions);

return (
  <HorariosCard >
      {props.data}
      {listaHorarios}
      {transactions}
    </HorariosCard>
  );
}
