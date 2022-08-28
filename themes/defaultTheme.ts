import { createTheme } from "@mui/material";

export const defautlTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4993BA",
      light: "#C5E5F5",
      dark: "#3C3744",
    },
    info: {
      main: '#FBFFF1'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: 10,
          ":hover": {
            backgroundColor: '#C5E5F5',
            color: '#3C3744',
            transition: 'all 300ms ease-in-out'
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      }
    }
  },
});
