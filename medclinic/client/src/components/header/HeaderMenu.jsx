import React from "react";
import logo from "../../assets/medclinic-logo-full.png"
import {MenuContainer} from "./HeaderMenuStyled"
import DateTime from '../date/DateTime'


const HeaderMenu = () => {

    return (

        <MenuContainer>
            <img src={logo} alt="Logo MedClinic" />
            
            <DateTime/>
            
        </MenuContainer>
    )
}

export default HeaderMenu
