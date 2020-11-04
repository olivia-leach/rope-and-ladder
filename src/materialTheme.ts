import { createMuiTheme } from "@material-ui/core";

const palette = {
  primary: {
    light: '#212D31',
    main: '#1D2A2F',
    dark: '#101C20',
  },
  secondary: {
    main: '#dd7d45',
  },
}

const materialThemeObject = {
  palette,
  overrides: {
    MuiTextField: {
      root: {
        backgroundColor: '#ababab',
      },
      label: {
        color: '#ababab',
      },
    },
    MuiInputLabel: {
      root: {
        '&.Mui-focused': {
          color: palette.primary.dark,
        }
      },
    },
    MuiButton: {
      root: {
        '&.Mui-disabled.MuiButton-contained': {
          backgroundColor: palette.secondary.main,
          opacity: 0.8
        }
      },
      label: {
        color: '#fff'
      },
    }
  },
}

export const materialTheme = createMuiTheme(materialThemeObject)
