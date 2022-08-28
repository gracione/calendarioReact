import { HorariosCard } from "./style";

export default function Horarios(props: any) {
  //aqui futuramente sera pegado esses dados da api
  let horariosDisponivel = [];
  let listaHorarios: any = [];
  horariosDisponivel[1] = '08:00'
  horariosDisponivel[2] = '09:00'
  horariosDisponivel[3] = '10:00'
  horariosDisponivel[4] = '12:00'
  horariosDisponivel[5] = '13:00'

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
