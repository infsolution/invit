import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 16px 'Courgette', sans-serif;
    }
    h1{
        color: ${props => props.theme.colors.primary};
        margin-top:1rem;
    }
`;
