import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b07bac",
    },
    secondary: {
      main: "#7a82ab",
    },
    text: {
      primary: "#271815",
      secondary: "rgb(236, 236, 236)",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
});

const theme = responsiveFontSizes(baseTheme);

export { theme };
