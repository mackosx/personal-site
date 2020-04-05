import { ThemeProvider, CssBaseline } from "@material-ui/core";
import React from "react";
import { theme } from "./theme";
import Site from "./Site";

function App() {
  return (
    <ThemeProvider theme={theme} injectFirst>
      <CssBaseline />
      <Site />
    </ThemeProvider>
  );
}

export default App;
