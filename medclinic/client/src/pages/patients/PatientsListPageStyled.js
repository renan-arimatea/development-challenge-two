import styled from "styled-components";

export const ListContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 1rem;
   
    button {
        background: #4EB1CB;
        color: white;
        padding: .3rem 1rem;
        border: 1px solid #D9D9D8;
        margin: 1rem;

        :hover {
            cursor: pointer;
            transform: scale(1.15);
            transition: .3s;
            background-color: #004AAD;
            color: #FFFFFF;
        }
    }

    .exit {
        background: red;
        color: white;

        position: absolute;
        right: 1rem;

        :hover {
            cursor: pointer;
            transform: scale(1.15);
            transition: .3s;
            background-color: #910000;
            color: #FFFFFF;
        }
    }

`
