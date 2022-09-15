import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

export const globalTheme = createTheme({
    palette: {
        primary: {
        main: indigo[500],
        },
        secondary: {
        main: indigo[100],
        },
    }
});