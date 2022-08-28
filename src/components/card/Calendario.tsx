import React, { useState } from "react";
import { Calendari } from "./style";


function OrganizarSemana(diaSemana: any, setDia: any) {
  let domingo: any = [];
  diaSemana.forEach((element: string) => {
    domingo.push(<li onClick={() => setDia(element)}>{element}</li>);
  });

  return domingo;
}

export default function Calendario(props: any) {
  let domingo, segunda, terca, quarta, quinta, sexta, sabado: any;
  domingo = OrganizarSemana(props.dias[0], props.setDia);
  segunda = OrganizarSemana(props.dias[1], props.setDia);
  terca = OrganizarSemana(props.dias[2], props.setDia);
  quarta = OrganizarSemana(props.dias[3], props.setDia);
  quinta = OrganizarSemana(props.dias[4], props.setDia);
  sexta = OrganizarSemana(props.dias[5], props.setDia);
  sabado = OrganizarSemana(props.dias[6], props.setDia);



  return (
    <>
      <Calendari>
      <ul className="diasSemana" >
        <li>Domingo</li>
        <li>Segunda</li>
        <li>Terça</li>
        <li>Quarta</li>
        <li>Quinta</li>
        <li>Sexta</li>
        <li>Sabado</li>
      </ul>
      <div className="mes" >
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
      </div>
      </Calendari>
    </>
  );


}
