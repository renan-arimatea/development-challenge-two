import React from "react";
import { FaAngleRight } from 'react-icons/fa';
import { LoginBox } from "./LoginFormStyled";

const LoginForm = () => {

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
            <button type="submit">Acessar<FaAngleRight className="icon" /></button>
        </LoginBox>
    )
}

export default LoginForm
