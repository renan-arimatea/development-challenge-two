import styled from "styled-components";

export const HomeContainer = styled.div`

// configurações gerais da home

background-image: url(img/home-background.png);
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;

display: flex;
height: 100vh;

font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`
// conteúdo lado esquerdo
export const BoxLeft = styled.div`

display: flex;

h1 {
    font-size: 2rem;
    color: #004AAD;
    padding: 1.5rem;

    text-transform: uppercase;
    text-align: center;
    line-height: 2rem;
    text-shadow: 1px 1px 1px #004AAD;

    position: absolute;
    left: 16.5rem;
    top: 15.8rem;
    max-width: 50vh;
}

// estilização do portal de registros
h2 {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #FFFF;

    padding: .3rem 2rem;
    position: absolute;
    top: 37rem;
    
    background: #1F3A68;
    color: #FFFFFF;
}

`
// barra lateral superior
export const BlueRec = styled.div`

    background: #1F3A68;
    width: 50px;
    height: 230px;
    position: absolute;
    margin-left: 2rem;
`
// logo MedClinic
export const LogoBox = styled.img`

    width: 700px;
    height: 550px;
    position: absolute;
    top: 2.6rem;
    left: -4rem;
`
// conteúdo lado direito
export const BoxRight = styled.div`

    display: flex;
    flex-direction: column;
`
// quadro de aviso
export const MsgBox = styled.div`

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
// imagem dos médicos
export const ImgBox = styled.img`

    max-width: 730px;
    position: absolute;
    bottom: -7.5rem;
    right: 2rem;
`
