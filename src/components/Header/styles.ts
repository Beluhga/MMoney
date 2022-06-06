import styled from "styled-components";

export const Container = styled.header`
    // utiliza "var" para export as variaveis de cores do global
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px; // centralizar o logo
    margin: 0 auto; 

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        // para fazer uma animação no botão
        transition: filter 0.2s;

        // usado pra quando passar o mouse por cima
        &:hover {
            filter: brightness(0.9);
        }
    }
`


