// theme.js

import { createTheme } from "@mui/material/styles";
import {
  APP_BACKGROUND_COLOR,
  START_NEXT_TRY_AGAIN_BUTTONS_COLOR,
  PREVIOUS_BUTTON_COLOR,
  SUBMIT_RESTART_BUTTONS_COLOR,
  ANSWERS_HOVER_BACKGROUND_COLOR,
  TIMER_COLOR,
  CURRENT_QUESTIONS_COLOR,
  INCORRECT_ANSWER_COLOR,
  CORRECT_ANSWER_COLOR,
} from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: APP_BACKGROUND_COLOR,
    },
    secondary: {
      main: START_NEXT_TRY_AGAIN_BUTTONS_COLOR,
    },
    error: {
      main: INCORRECT_ANSWER_COLOR,
    },
    success: {
      main: CORRECT_ANSWER_COLOR,
    },
    
  },
  
  customPalette: {
    previousButton: PREVIOUS_BUTTON_COLOR,
    submitButton: SUBMIT_RESTART_BUTTONS_COLOR,
    hoverAnswer: ANSWERS_HOVER_BACKGROUND_COLOR,
    timer: TIMER_COLOR,
    currentQuestion: CURRENT_QUESTIONS_COLOR,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // This will disable the default uppercase transform
          fontWeight: 700,
          borderRadius: 10,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
  typography: {
    fontWeight: 700,
    fontSize: 16,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
