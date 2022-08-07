import React from "react";
import { FaPhoneSquareAlt, FaCalculator } from "react-icons/fa";
import {ImLab} from "react-icons/im";
import {TbWorld} from "react-icons/tb";
import { FooterContainer } from "./FooterMenuStyled";


const FooterMenu = () => {

    return (
        <FooterContainer>
           {/* rodapé da aplicação com lista de icones e contato */}
            <ul>
                <li><FaPhoneSquareAlt/> CONSULTAS: (99) 9999-9999</li>
                <li><ImLab/> LABORATÓRIO: (99) 9999-9999</li>
                <li><FaCalculator/> FINANCEIRO: (99) 9999-9999</li>
                <li><TbWorld/><a href="/"> WWW.MEDCLINIC.COM.BR</a></li>
            </ul>
            <p>Em casos de problemas de acesso entrar em contato com a Matriz: (99) 9999-9999 ou abrir chamado pelo portal <a href="/">SAP</a></p>
        </FooterContainer>
    )
}

export default FooterMenu
