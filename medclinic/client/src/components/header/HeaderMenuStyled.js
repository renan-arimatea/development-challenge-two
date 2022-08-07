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

    // estilização das reder sociais
    nav {
        display: flex;
        flex-direction: row;
        margin: 1rem;

        a {
            font-size: 1.5rem;
            padding: .3rem;
            text-decoration: none;
            color: #fff;

            :hover {
                transform: scale(1.15);
                color: #1F3A68;
                cursor: pointer;
                transition: .5s linear
            }
        }

        .btn-ins {
            :hover {
                color: #C54669;
            }
        }

        .btn-fac {
            :hover {
                color: #395599;
            }
        }

        .btn-lin {
            :hover {
                color: #0A63BC;
            }

        }

        .btn-twi {
            :hover {
                color: #34B3F7;
            }

        }
    }

`
