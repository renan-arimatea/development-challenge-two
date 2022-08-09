import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { LoginBox } from "./LoginFormStyled";
import {GoToPatientsList} from '../../routes/RouteFunction'

const LoginForm = () => {

    const navigate = useNavigate();

    return (
        <LoginBox>
            <h3>Login</h3>
            <input // campo de usuário
                type="text"
                placeholder="Usuário"
                required
            />
            <input // campo de senha
                type="password"
                placeholder="Senha"
                required
            />
            <button type="submit" onClick={()=>GoToPatientsList(navigate)}>Acessar<FaAngleRight className="icon" /></button>
        </LoginBox>
    )
}

export default LoginForm
