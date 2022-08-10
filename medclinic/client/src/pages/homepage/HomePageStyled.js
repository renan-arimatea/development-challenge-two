import styled from "styled-components";

export const HomeContainer = styled.div`

// configurações gerais da home

background-image: url(img/home-background.png);
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: auto;

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

// imagem dos médicos
export const ImgBox = styled.img`

    max-width: 730px;
    position: absolute;
    bottom: -7.5rem;
    right: 2rem;
`
