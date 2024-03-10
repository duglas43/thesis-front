import { createTheme } from "@mui/material/styles";
import { red, blue } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    drawerWidth: number;
  }
  interface ThemeOptions {
    drawerWidth?: number;
  }
}

export const theme = createTheme({
  drawerWidth: 240,
});
