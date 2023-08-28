import React from "react";
import { Button, Box } from "@mui/material";

const QuizActions = ({
  currentQuestionIndex,
  totalQuestions,
  onNext,
  onPrevious,
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

      <Button variant="contained" onClick={onNext}>
        {currentQuestionIndex === totalQuestions - 1 ? "Submit" : "Next"}
      </Button>
    </Box>
  );
};

export default QuizActions;
