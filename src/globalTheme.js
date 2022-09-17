import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
    palette: {
        background: {
            default: "#F6F7F9"
        },
        primary: {
            light: '#7790ff',
            main: '#3563e9',
            dark: '#003ab6',
            contrastText: '#fff',
        },
    },
    shadows: ["none"],
});