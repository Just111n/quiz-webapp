import React, { useState } from "react";
import { Button, Box, useTheme } from "@mui/material";
import { APP_STATES } from "../config/constants";
import "../App.css";

const Actions = ({
  currentQuestionIndex,
  totalQuestions,
  onNext,
  onPrevious,
  onRestart,
  appState,
  onSubmit,
}) => {
  const theme = useTheme();
  return (
    <Box
      flexDirection="horizontal"
      display="flex"
      justifyItems="center"
      justifyContent="center"
      gap={2}
    >
      <Button
        disabled={currentQuestionIndex === 0}
        variant="contained"
        onClick={onPrevious}
        sx={{ backgroundColor: theme.customPalette.previousButton }}
        className="previous-button"
      >
        Previous
      </Button>

      <Button
        variant="contained"
        onClick={onNext}
        disabled={currentQuestionIndex === totalQuestions - 1}
        color="secondary"
        className="start-Next-TryAgain-Buttons"
      >
        Next
      </Button>
      {currentQuestionIndex === totalQuestions - 1 &&
        appState === APP_STATES.START_QUIZ && (
          <Button
            variant="contained"
            onClick={onSubmit}
            sx={{ backgroundColor: theme.customPalette.submitButton }}
            className="submit-restart-buttons"
          >
            Submit
          </Button>
        )}
      {appState === APP_STATES.REVIEW && (
        <Button
          variant="contained"
          onClick={onRestart}
          sx={{ backgroundColor: theme.customPalette.submitButton }}
          className="submit-restart-buttons"
        >
          Restart
        </Button>
      )}
    </Box>
  );
};

export default Actions;
