import React, { useState } from "react";
import { Button, Box } from "@mui/material";

const Actions = ({
  currentQuestionIndex,
  totalQuestions,
  onNext,
  onPrevious,
  onRestart,
  appState,
  onSubmit,
}) => {
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
      >
        Previous
      </Button>

      <Button
        variant="contained"
        onClick={onNext}
        disabled={currentQuestionIndex === totalQuestions - 1}
      >
        Next
      </Button>
      {currentQuestionIndex === totalQuestions - 1 && (
        <Button variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      )}
    </Box>
  );
};

export default Actions;
