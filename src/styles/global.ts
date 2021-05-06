import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing:border-box;
    }
    body{
        padding-top:4rem;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 16px 'Courgette', sans-serif;
    }
    h1, h2, h3,h4, p{
        margin:0px;
    }

    ul, li{
        list-style:none;
        padding: 0px;
        margin: 0px;
    }
    img{
        display:block;
        max-width:100%;
    }
    .container{
        max-width:50rem;
        padding: 0 1rem;
        margin: 0 auto;
    }
    a{
        text-decoration:none;
    }
`;
