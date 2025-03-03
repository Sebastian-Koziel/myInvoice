// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C5DFA',
      light: '#9277FF',
    },
    background: {
      default: '#F8F8FB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0C0E16',
      secondary: '#888EB0',
    },
  },
  typography: {
    fontFamily: '"League Spartan", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
