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