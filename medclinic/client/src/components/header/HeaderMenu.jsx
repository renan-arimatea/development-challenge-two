import React from "react";
import logo from "../../assets/medclinic-logo-full.png"
import {MenuContainer} from "./HeaderMenuStyled"


const HeaderMenu = () => {

    return (

        <MenuContainer>
            <img src={logo} alt="Logo MedClinic" />
            <nav>
                {/* <DatePicker/> */}
            </nav>
        </MenuContainer>
    )
}

export default HeaderMenu
