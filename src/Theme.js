import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
    colors: {
        bg: 'black',
        red: '#c70011',
        purple: '#b73bff',
        blue: '#5e6cff',
        green: '#1cff33',
        whiteOne: '#f0f0f0',
        whiteTwo: '#b5b5b5',
        greyOne: 'rgba(46, 46, 46, 0.9)',
        greyTwo: 'rgba(69, 69, 69, 0.8)',
        // add color scheme here
    },
    fonts: {
        title: "'Montserrat', sans-serif;",
        main: "'Open Sans', sans-serif;",
    },
};

export const GlobalStyle = createGlobalStyle`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${theme.fonts.title};
        color: ${theme.colors.whiteOne};
        font-weight: 700;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    p, input, textarea {
        font-family: ${theme.fonts.main};
        color: ${theme.colors.whiteOne};
        margin: 0;
        padding: 0;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
    }
    
    body {
        background: ${theme.colors.bg};
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${theme.fonts.main};
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
    }
    #root {
        min-height: 100vh;
        width: 100%;
        overflow: hidden;
        position: relative;
        /* removed scroll bars */
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
        /* for centering display purposes only - you should probably remove this*/
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; */
    }

    button.btn-lg {
    background: #b5b5b5;
    border: 1px solid #b5b5b5;
    color: #06105c;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 20px;
    font-family: ${theme.fonts.main};
    transition-duration: 0.1s;
    }
    button.btn-lg:hover {
        border: 1px solid #f0f0f0;
        background: transparent;
        color: #f0f0f0;
        transition-duration: 0.2s;
        cursor: pointer;
    }
    button.btn-lite-lg {
    border: 1px solid #b5b5b5;
    background: transparent;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 20px;
    font-family: ${theme.fonts.main};
    color: #f0f0f0;
    transition-duration: 0.1s;
    }
    button.btn-lite-lg:hover {
        border: 1px solid #f0f0f0;
        color: #06105c;
        background: #b5b5b5;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    /* shorthand classes */

    .hide-sm {
        @media (max-width: 850px) {
            display: none;
        }
    }
    .hide-bg {
        display: none;
        @media (max-width: 850px) {
            display: block;
        }
    }

    .ff-main {
        font-family: ${theme.fonts.main};  
    }
    .ff-title {
        font-family: 'Oswald', sans-serif;  
    }

    .bs-bb {
        box-sizing: border-box;
    }
    .bs-cb {
        box-sizing: content-box;
    }

    .w-100 {
        width: 100%
    }
    .w-50 {
        width: 50%
    }

    .p-rel {
        position: relative;
    }
    .p-abs {
        position: absolute;
    }
    .p-fix {
        position: fixed;
    }

    .p-1 {
        padding: 1em;
    }
    .p-2 {
        padding: 2em;
    }
    .p-3 {
        padding: 3em;
    }
    .p-4 {
        padding: 4em;
    }
    .pl-1 {
        padding-left: 1em;
    }
    .pl-2 {
        padding-left: 2em;
    }
    .pl-3 {
        padding-left: 3em;
    }
    .pl-4 {
        padding-left: 4em;
    }
    .pt-1 {
        padding-top: 1em;
    }
    .pt-2 {
        padding-top: 2em;
    }
    .pt-3 {
        padding-top: 3em;
    }
    .pt-4 {
        padding-top: 4em;
    }
    .pr-1 {
        padding-right: 1em;
    }
    .pr-2 {
        padding-right: 2em;
    }
    .pr-3 {
        padding-right: 3em;
    }
    .pr-4 {
        padding-right: 4em;
    }
    .pb-1 {
        padding-bottom: 1em;
    }
    .pb-2 {
        padding-bottom: 2em;
    }
    .pb-3 {
        padding-bottom: 3em;
    }
    .pb-4 {
        padding-bottom: 4em;
    }

    .m-auto {
        margin: auto;
    }
    .ml-auto {
        margin-left: auto;
    }
    .mt-auto {
        margin-top: auto;
    }
    .mr-auto {
        margin-right: auto;
    }
    .mb-auto {
        margin-bottom: auto;
    }

    .m-1 {
        margin: 1em;
    }
    .m-2 {
        margin: 2em;
    }
    .m-3 {
        margin: 3em;
    }
    .m-4 {
        margin: 4em;
    }
    
    .m-1 {
        margin: 1em;
    }
    .m-2 {
        margin: 2em;
    }
    .m-3 {
        margin: 3em;
    }
    .m-4 {
        margin: 4em;
    }
    .ml-1 {
        margin-left: 1em;
    }
    .ml-2 {
        margin-left: 2em;
    }
    .ml-3 {
        margin-left: 3em;
    }
    .ml-4 {
        margin-left: 4em;
    }
    .mt-1 {
        margin-top: 1em;
    }
    .mt-2 {
        margin-top: 2em;
    }
    .mt-3 {
        margin-top: 3em;
    }
    .mt-4 {
        margin-top: 4em;
    }
    .mr-1 {
        margin-right: 1em;
    }
    .mr-2 {
        margin-right: 2em;
    }
    .mr-3 {
        margin-right: 3em;
    }
    .mr-4 {
        margin-right: 4em;
    }
    .mb-1 {
        margin-bottom: 1em;
    }
    .mb-2 {
        margin-bottom: 2em;
    }
    .mb-3 {
        margin-bottom: 3em;
    }
    .mb-4 {
        margin-bottom: 4em;
    }

    .d-flex {
        display:flex;
    }
    .fd-col {
        flex-direction: column;
    }
    .fd-row {
        flex-direction: row;
    }
    .ai-c {
        align-items: center;
    }
    .ai-b {
        align-items: baseline;
    }

    .jc-c {
        justify-content: center;
    }
    .jc-sb {
        justify-content: space-between;
    }
    .jc-sa {
        justify-content: space-around;
    }
    .jc-fe {
        justify-content: flex-end;
    }
    .jc-fs {
        justify-content: flex-start;
    }


    .fs-60 {
    font-size: 60px;
    }
    .fs-50 {
        font-size: 50px;
    }
    .fs-40 {
        font-size: 40px;
    }
    .fs-35 {
        font-size: 35px;
    }
    .fs-32 {
        font-size: 32px;
    }
    .fs-30 {
        font-size: 30px;
    }
    .fs-25 {
        font-size: 25px;
    }
    .fs-20 {
        font-size: 20px;
    }
    .fs-18 {
        font-size: 18px;
    }
    .fs-16 {
        font-size: 16px;
    }
    .fs-14 {
        font-size: 14px;
    }
    .fs-12 {
        font-size: 12px;
    }

    .mt-1 {
        margin-top: 1em;
    }
    .mt-2 {
        margin-top: 2em;
    }
    .mt-3 {
        margin-top: 3em;
    }

    .fw-300 {
        font-weight: 300;
    }
    .fw-500 {
        font-weight: 500;
    }
    .fw-700 {
        font-weight: 700;
    }

    .ta-l {
        text-align: left;
    }
    .ta-r {
        text-align: right;
    }
    .ta-c {
        text-align: center;
    }

    .c-hover {
        &:hover {
            cursor: pointer;
        }
    }
`;

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
