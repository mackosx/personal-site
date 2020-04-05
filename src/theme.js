import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#7f2f16",
    },
    secondary: {
      main: "#7a82ab",
    },
    text: {
      primary: "#271815",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
});

const theme = responsiveFontSizes(baseTheme);

export { theme };
