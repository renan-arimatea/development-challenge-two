import styled from "styled-components";

export const LoginBox = styled.div`

    // estilização box azul
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    background: #1F3A68;
    border: 1px solid #4eb1cb;
    padding: .1rem 2rem 4rem 4rem;

    position: absolute;
    top: 6rem;
    right: 0rem;

    justify-content: center;
    text-align: center;
    align-items: center;


    // estilização campo de login e senha
    h3 {
            background-color: #4EB1CB;
            margin: .5rem;
            padding: .2rem 1rem
        }

    input {
        margin: .4rem;
        border: 1px solid #4EB1CB;
        border-radius: .5rem;

        height: 1.5rem;
        width: 15rem;
        text-align: center;

        ::placeholder {
            text-align: center;
            color: #D0D1D1;
        }

        &:focus {
            outline: 2px solid #4EB1CB;
        }
    }

    button {

        width: 6rem;
        height: 1.5rem;
        margin: .5rem;

        background-color: #FFF;
        border: 1px solid #D0D1D1;
        border-radius: .5rem;
        justify-tracks: center;

        color: #737373;

        // efeitos ao passar o mouse sobre o botão de acesso á pagina restrita
        :hover {
            cursor: pointer;
            transform: scale(1.15);
            transition: .3s;
            background-color: #004AAD;
            color: #FFFFFF;

            .icon {
                color: #FFFF;
            }
        }

        // estilização do svg
        .icon {
            font-size: .9rem;
            float: right;
            color: #4EB1CB;
        }

    }   
`