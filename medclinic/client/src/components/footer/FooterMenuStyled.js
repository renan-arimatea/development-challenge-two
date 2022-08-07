import styled from "styled-components";

export const FooterContainer = styled.footer`

// estilização do footer

   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   background-color: #1F3A68;
   color: #F1F1F1;
   padding: 2rem;
   
   ul {
    display: flex;
    list-style: none;
    text-align: center;
    justify-content: center;
   }

   li {
    font-size: .88rem;
    margin-left: 2rem;
    padding-bottom: 2rem;
   }

   li a {
    text-decoration: none;
    color: #FFFFFF
   }

   p {
    font-size: .9rem;
    justify-content: center;
    text-align: center;

    a {
        color: #F1F1F1;
    }
   }

`
