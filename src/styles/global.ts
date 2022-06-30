import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --shape: #FFFFFF;
        --primary: #5429CC;

        --red: #E62E4D;
        --green: #33CC95;

        --texts: #969CB3;
        --titles: #363F5F;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    html {
        @media (max-width: 1088px) {
            font-size: 93.5%
        }

        @media (max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background-color: var(--background); 
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center
    }

    .react-modal-content {
        width: min(576px, 100%);
        padding: 3rem;

        background: var(--background);
        border-radius: .25rem;

        position: relative;
    }
`