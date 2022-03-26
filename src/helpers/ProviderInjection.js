import React from "react";
import ThemeProvider from "../context/ThemeProvider";

const contextProvider = [
    ThemeProvider,
]

export const ProviderInjection = ({app}) => {
    contextProvider.forEach(Provider => app = <Provider>{app}</Provider>);
    return app;
}

export default ProviderInjection;
