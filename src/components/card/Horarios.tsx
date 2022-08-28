import { HorariosCard } from "./style";

export default function Horarios(props : any) {
  return (
    <HorariosCard>
    <div className="horario-disponivel">{props.data}</div>
    <div className="horario-disponivel">{props.data}</div>
    <div className="horario-disponivel">{props.data}</div>
    <div className="horario-disponivel">{props.data}</div>
    <div className="horario-disponivel">{props.data}</div>
    <div className="horario-disponivel">{props.data}</div>
    <div className="horario-disponivel">{props.data}</div>
    </HorariosCard>
  );
}
