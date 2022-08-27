import React from "react";
import { Calendario } from "./style";


function OrganizarSemana(diaSemana: any) {
  let domingo: any = [];
  diaSemana.forEach((element: string) => {
    domingo.push(<li>{element}</li>);
  });
  console.log(domingo);
  return domingo;
}

function Card(dias: any) {
  let domingo,segunda,terca,quarta,quinta,sexta,sabado: any;
  domingo = OrganizarSemana(dias.dias.domingo);
  segunda = OrganizarSemana(dias.dias.segunda);
  terca = OrganizarSemana(dias.dias.terca);
  quarta = OrganizarSemana(dias.dias.quarta);
  quinta = OrganizarSemana(dias.dias.quinta);
  sexta = OrganizarSemana(dias.dias.sexta);
  sabado = OrganizarSemana(dias.dias.sabado);


  
  return (
    <>
      <Calendario>
        <ul>
        {domingo}
        {segunda}
        {terca}
        {quarta}
        {quinta}
        {sexta}
        {sabado}
        </ul>
      </Calendario>
    </>
  );


}

export default Card;