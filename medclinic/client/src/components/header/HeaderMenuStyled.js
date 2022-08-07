import styled from "styled-components";

export const MenuContainer = styled.div`

    // estilização do header da aplicação
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: #4EB1CB;

    //estilização da logo
    img {
        width: 120px;
        margin-left: 1rem;
    }


    // estilização dos campos de login
    nav{
        margin: 0 1rem;
        padding: 1rem;
    }

    input {
        margin-right: 1rem;
        border: 1px solid #4EB1CB;
        border-radius: .5rem;

        height: 1.5rem;

        text-align: center;

        ::placeholder {
            text-align: center;
            color: #D0D1D1;
        }

        &:focus {
            outline: 2px solid #004AAD;
        }
    }
     
    // estilização do botão de login
    button {

        width: 6rem;
        height: 1.5rem;

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
