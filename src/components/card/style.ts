import styled from "styled-components"

export const Calendari = styled.div`
    width:600px;
    background:white;
    display: flex ;
    justify-content: space-between ;

    ul{
        width: 15%;
        display: flex ;
        flex-direction: column ;
        
        li{
            border: solid 1px;
            height: 60px;
            list-style-type: none;

            display: flex ;
            justify-content: center ;
            align-items: center ;
        }
    }
    `;
export const HorariosCard = styled.div`
    width: 600px;
    border: solid ;
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