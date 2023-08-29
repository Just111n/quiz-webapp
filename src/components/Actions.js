import React, { useState } from "react";
import { Button, Box, useTheme } from "@mui/material";
import { APP_STATES } from "../config/constants";

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
      gap={4}
    >
      <Button
        disabled={currentQuestionIndex === 0}
        variant="contained"
        onClick={onPrevious}
        sx={{ backgroundColor: theme.customPalette.previousButton }}
      >
        Previous
      </Button>

      <Button
        variant="contained"
        onClick={onNext}
        disabled={currentQuestionIndex === totalQuestions - 1}
        color="secondary"
      >
        Next
      </Button>
      {currentQuestionIndex === totalQuestions - 1 &&
        appState === APP_STATES.START_QUIZ && (
          <Button
            variant="contained"
            onClick={onSubmit}
            sx={{ backgroundColor: theme.customPalette.submitButton }}
          >
            Submit
          </Button>
        )}
      {appState === APP_STATES.REVIEW && (
        <Button
          variant="contained"
          onClick={onRestart}
          sx={{ backgroundColor: theme.customPalette.submitButton }}
        >
          Restart
        </Button>
      )}
    </Box>
  );
};

export default Actions;
