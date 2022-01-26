import { createTheme } from "@mui/material/styles";
export const InputTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: { borderColor: "red" },
      },
    },
  },
});
