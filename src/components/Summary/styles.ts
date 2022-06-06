import styled from "styled-components";

export const Container = styled.div`
    display: grid; // para colocar um do lado do outro
    grid-template-columns: repeat(3, 1fr); // para colocar 3 colunas de tamanhos iguais
    gap: 2rem; // espaçamento do grid
    margin-top: -10rem; // para ele fica no meio da linha

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block; // para poder usar o margin-top
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    &.highlight-background{ // para a div q tem essa class
        background: var(--green);
        color: #fff;
    }
}
`;