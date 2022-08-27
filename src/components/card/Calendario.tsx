import React from "react";
import { Calendari } from "./style";


function OrganizarSemana(diaSemana: any) {
  let domingo: any = [];
  diaSemana.forEach((element: string) => {
    domingo.push(<li>{element}</li>);
  });
  return domingo;
}

function Calendario(dias: any) {
  let domingo, segunda, terca, quarta, quinta, sexta, sabado: any;
  domingo = OrganizarSemana(dias.dias[0]);
  segunda = OrganizarSemana(dias.dias[1]);
  terca = OrganizarSemana(dias.dias[2]);
  quarta = OrganizarSemana(dias.dias[3]);
  quinta = OrganizarSemana(dias.dias[4]);
  sexta = OrganizarSemana(dias.dias[5]);
  sabado = OrganizarSemana(dias.dias[6]);



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

export default Calendario;