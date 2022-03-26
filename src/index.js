import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeSwitcherProvider} from "react-css-theme-switcher";
import "./i18n/config";
import ProviderInjection from "./helpers/ProviderInjection";

const theme = JSON.parse(localStorage.getItem("dark")) ? "dark" : "light";

const themes = {
    dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
    light: `${process.env.PUBLIC_URL}/light-theme.css`
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeSwitcherProvider
            themeMap={themes}
            defaultTheme={theme}
            insertionPoint="styles-insertion-point"
        >
            <ProviderInjection app={<App/>}/>
        </ThemeSwitcherProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
