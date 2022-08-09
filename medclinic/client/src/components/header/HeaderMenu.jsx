import React from "react";
import logo from "../../assets/medclinic-logo-full.png"
import {MenuContainer} from "./HeaderMenuStyled"
import {FaInstagramSquare, FaFacebookSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'


const HeaderMenu = () => {

    return (

        <MenuContainer>
            <img src={logo} alt="Logo MedClinic" />
            
           <nav>
                <a href="https://www.instagram.com" className="btn-ins" target="_blank" rel="noreferrer"><FaInstagramSquare/></a>
                <a href="https://www.facebook.com" className="btn-fac" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
                <a href="https://www.linkedin.com" className="btn-lin" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                <a href="https://www.linkedin.com" className="btn-twi" target="_blank" rel="noreferrer"><FaTwitterSquare/></a>
           </nav>
            
        </MenuContainer>
    )
}

export default HeaderMenu
