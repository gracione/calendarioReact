import styled from "styled-components"

export const Calendario = styled.div`
    width:600px;
    height:350px;
    background:white;
    display: flex ;
    justify-content: space-between ;

    ul{
        display: flex ;
        flex-direction: column ;
        justify-content: space-between ;
        
        li{
            border: solid ;
            width: 70px;
            height: 50px;
            list-style-type: none;

            display: flex ;
            justify-content: center ;
            align-items: center ;
        }
    }
    `;