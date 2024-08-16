import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
