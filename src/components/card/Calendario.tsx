import React, { useState } from "react";
import { Calendari } from "./style";


function OrganizarSemana(diaSemana: any, setData: any) {
  let domingo: any = [];
  diaSemana.forEach((element: string) => {
    domingo.push(<li onClick={() => setData(element)}>{element}</li>);
  });
  
  return domingo;
}

export default function Calendario(props: any) {
  let domingo, segunda, terca, quarta, quinta, sexta, sabado: any;
  domingo = OrganizarSemana(props.dias[0], props.setData);
  segunda = OrganizarSemana(props.dias[1], props.setData);
  terca = OrganizarSemana(props.dias[2], props.setData);
  quarta = OrganizarSemana(props.dias[3], props.setData);
  quinta = OrganizarSemana(props.dias[4], props.setData);
  sexta = OrganizarSemana(props.dias[5], props.setData);
  sabado = OrganizarSemana(props.dias[6], props.setData);



  return (
    <>
      <Calendari>
        <ul>
          {domingo}
        </ul>
        <ul>
          {segunda}
        </ul>
        <ul>
          {terca}
        </ul>
        <ul>
          {quarta}
        </ul>
        <ul>
          {quinta}
        </ul>
        <ul>
          {sexta}
        </ul>
        <ul>
          {sabado}
        </ul>
      </Calendari>
    </>
  );


}
