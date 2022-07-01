import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
    h2 {
        color: var(--titles);
        font-size: 1.5rem;

        margin-bottom: 2rem;   
    }    

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;

        border-radius: .25rem;
        border: 1px solid #D7D7D7;
        background: #E7E9EC;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--texts)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;

        background: var(--green);
        border-radius: .25rem;
        border: 0;

        color: var(--shape);
        font-size: 1rem;
        font-weight: 600;

        margin-top: 1.5rem;
        transition: filter 0.3s;
        &:hover {
            filter: brightness(0.9);
        }   
    }
` ;

export const ChooseTransitionTypeContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;

    button {
        height: 4rem;

        border: 1px solid #D7D7D7;
        border-radius: .25rem;
        background: transparent;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.1, '#D7D7D7')}
        }

        img {
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;

            margin-left: 1rem;

            font-size: 1rem;
            color: var(--title);
        }
    }
`