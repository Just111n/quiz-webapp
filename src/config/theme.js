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
} from "../data/colors";

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
    // ... you can define other colors similarly and access them via theme.palette.yourColorName.main in the components
  },
  // Additional custom properties can be added
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
        },
      },
    },
  },
});

export default theme;
