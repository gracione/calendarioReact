import styled from "styled-components"

export const HorariosCard = styled.div`
    width: 600px;
    border: solid;
    border-style: inset;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .horario-disponivel{
        margin: 1px ;
        width: 24%;
        height: 30px ;
        border: solid ;

        display: flex;
        justify-content: center ;
        align-items: center ;
        img{
            width : 20px;
            height: 20px ;
        }
    }
`;