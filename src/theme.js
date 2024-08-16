import { createTheme } from "@mui/material";
import { zhTW as corezhTW } from "@mui/material/locale";
export const theme = createTheme(
  {
    palette: {
      primary: { main: "#011c26", contrastText: "#eeeeee" },
      secondary: { main: "#bfcfd9", contrastText: "#011c26" },
      error: { main: "#bf6e50", contrastText: "#000" },
      info: { main: "#607680", contrastText: "#000" },
      success: { main: "#758c51", contrastText: "#000" },
      warning: { main: "#d9c99a", contrastText: "#000" },
    },
  },
  corezhTW
);
