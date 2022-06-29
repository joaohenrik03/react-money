import styled from 'styled-components';

export const Container = styled.header`
    background: var(--primary);
`

export const Wrapper = styled.div`
    max-width: 1120px;

    margin: 0 auto;
    padding: 2rem 1rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div.logo {
        display: flex;
        align-items: center;
        gap: 1rem;

        color: var(--shape);
        font-size: 1.5rem;
        font-weight: 600;
    }

    button {
        font-size: 1rem;
        color: var(--shape);

        background-color: var(--primary);
        filter: brightness(1.3);
        border: 0;
        border-radius: 0.25rem;

        padding: 0 2rem;

        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.1);
        }
    }
`