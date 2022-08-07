import React from "react";
import doctorimg from "../../assets/doctor.png"
import logo2 from "../../assets/medclinic-logo.png"
import { BlueRec, BoxLeft, BoxRight, HomeContainer, ImgBox, LogoBox, MsgBox } from "./HomePageStyled";
import LoginForm from "../../components/login/LoginForm";

const HomePage = () => {
    return (
        <HomeContainer>
            {/* box de conteúdos da esquerda da homepage */}
            <BoxLeft>
                <BlueRec></BlueRec>
                <LogoBox src={logo2} alt="Logo MedClinic" />
                <h1>A saúde dos nossos pacientes é a nossa prioridade</h1>
                <h2>Portal de Registro do Paciente</h2>
            </BoxLeft>

            {/* box de conteúdos da direita da homepage */}
            <BoxRight>
                <LoginForm/>
                <ImgBox src={doctorimg} alt="Médicos MedClinic" />
            </BoxRight>
        </HomeContainer>
    )
}

export default HomePage
