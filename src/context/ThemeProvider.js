import React, {createContext, useState} from 'react';
import {useThemeSwitcher} from "react-css-theme-switcher";
import i18n from "i18next";

export const ThemeContext = createContext("ThemeContext");

const darkMode = JSON.parse(localStorage.getItem("dark")) ?? false;
const _language = JSON.parse(localStorage.getItem("lang")) ?? "en";

const ThemeProvider = ({children}) => {

    const [language, setLanguage] = useState(_language);
    const [isDarkMode, setIsDarkMode] = useState(darkMode);
    const {switcher, themes} = useThemeSwitcher();

    const changeLanguage = async language => {
        localStorage.setItem("lang", JSON.stringify(language));
        await i18n.changeLanguage(language);
        setLanguage(language);
    }

    const toggleTheme = isChecked => {
        localStorage.setItem("dark", JSON.stringify(isChecked));
        setIsDarkMode(isChecked);
        switcher({theme: isChecked ? themes.dark : themes.light});
    }

    return (
        <ThemeContext.Provider
            value={{
                language,
                isDarkMode,
                changeLanguage,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
