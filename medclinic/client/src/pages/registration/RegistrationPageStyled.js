import styled from "styled-components";

export const FormContainer = styled.form`

background-image: url(img/register-background.png);
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

button {
    background: #4EB1CB;
    color: white;
    padding: .3rem 1rem;
    border: 1px solid #D9D9D8;

    :hover {
        cursor: pointer;
        transform: scale(1.15);
        transition: .3s;
        background-color: #004AAD;

        .icon {
            color: #FFFF;
        }
    }
}

`
// estilização do campo de formulário
export const FieldBox = styled.div`

    height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: #fff;
    border: 5px solid #004AAD;
    border-radius: 1rem;
    margin: 1rem;
    padding: 3rem 1rem;

    legend {
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: .5rem;
        font-size: .9rem;
    }
   
    label {
        padding: 0 .5rem;
        color: #272727;

    }

    input {
        height: 1.2rem;
        width: 20rem;
        border: 1px solid #D9D9D8;
        color: #1E1D1D;

        ::placeholder {
            text-align: left;
            color: #D0D1D1;
            padding: .5rem
        }

        &:focus {
            outline: 2px solid #004AAD;
        }
    }

`
// estilização botão 
export const Btn = styled.div`
    display: flex;
    flex-direction: column;
    
    button {
        background: #4EB1CB;
        color: white;
        padding: .3rem 1rem;
        border: 1px solid #D9D9D8;
        margin: .5rem 4rem .5rem .1rem;
    }

`
