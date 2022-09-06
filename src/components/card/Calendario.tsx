import React, { useState } from "react";
import { Calendari } from "./style";


function marcarDia(element: any, setDia: any) {
  setDia(element);
}


function OrganizarSemana(diaSemana: any, props: any) {
  let domingo: any = [];

  diaSemana.forEach((element: string) => {
    domingo.push(<li
      className={element}
      onClick={() => marcarDia(element, props.setDia)}
    >{element}</li>);
  });

  return domingo;
}

export default function Calendario(props: any) {
  let domingo, segunda, terca, quarta, quinta, sexta, sabado: any;
  domingo = OrganizarSemana(props.dias[0], props);
  segunda = OrganizarSemana(props.dias[1], props);
  terca = OrganizarSemana(props.dias[2], props);
  quarta = OrganizarSemana(props.dias[3], props);
  quinta = OrganizarSemana(props.dias[4], props);
  sexta = OrganizarSemana(props.dias[5], props);
  sabado = OrganizarSemana(props.dias[6], props);

  return (
    <>
      <Calendari>
        <ul className="diasSemana" >
          <li>Dom</li>
          <li>Seg</li>
          <li>Ter</li>
          <li>Qua</li>
          <li>Qui</li>
          <li>Sex</li>
          <li>Sab</li>
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
function setDia(element: any) {
  throw new Error("Function not implemented.");
}

