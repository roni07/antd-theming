import React, {useContext} from 'react';
import {Button, Select, Switch} from "antd";
import {useThemeSwitcher} from "react-css-theme-switcher";
import {useTranslation, withTranslation} from "react-i18next";
import {ThemeContext} from "../context/ThemeProvider";

const Homepage = () => {

    const {t} = useTranslation();

    const themeContext = useContext(ThemeContext);

    const {currentTheme, status} = useThemeSwitcher();

    if (status === "loading") {
        return null;
    }

    return (
        <div>
            <h1 color="blue-1">
                The current theme is: {currentTheme}
            </h1>
            <Button
                type="primary"
            >
                {t("primaryButton")}
            </Button>
            <Button
                type="ghost"
            >
                Ghost Button
            </Button>
            <h1>{t("homepage")}</h1>
            <Select
                style={{width: "100%"}}
                value={themeContext.language}
                onChange={themeContext.changeLanguage}
            >
                <Select.Option value="en">English</Select.Option>
                <Select.Option value="bn">Bengali</Select.Option>
            </Select>
            <Switch
                checked={themeContext.isDarkMode}
                onChange={themeContext.toggleTheme}
            />
        </div>
    );
};

export default withTranslation()(Homepage);
