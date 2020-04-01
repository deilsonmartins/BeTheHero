import { createGlobalStyle } from 'styled-components'; /* Biblioteca para gerenciar estilos */

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

    
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px Roboto, sans-serif;
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased
    }

    input, button, textarea {
        font: 400px 18px Roboto, sans-serif;
    }

    button {
            width: 100%;
            height: 60px;
            background: #e02841;
            border: 0;
            border-radius: 8px;
            color: #FFF;
            font-weight: bold;
            margin-top: 16px;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            font-size:18px;
            line-height: 60px;
            transition: filter 0.2s;

            &:hover{
                filter: brightness(90%);
            }
        }

        a {
            display: flex;
            align-items: center;
            margin-top: 40px;
            color: #41414d;
            font-size: 18px;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.2s;
            cursor: pointer;

            svg {
                margin-right: 8px;
            }

            &:hover {
                opacity: 0.8;
            }

            cursor: pointer;
        }
    form {
        input {
            width: 100%;
            height: 60px;
            color: #333;
            border: 1px solid #dcdce6;
            border-radius: 8px;
            padding: 0 24px;
        }

        textarea {
            min-height: 140px;
            resize: vertical;
            margin-top: 14px;
            width: 100%; 
            height: 60px;
            color: #333;
            border: 1px solid #dcdce6;
            border-radius: 8px;
            padding: 16px 24px;
            line-height: 24px;
        }
    }

`
