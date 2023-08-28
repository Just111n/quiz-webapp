import React from "react";
import { Button, Box } from "@mui/material";

const ScoreActions = ({ onTryAgain, onReview }) => {
  const handleTryAgain = () => {
    onTryAgain();
  };
  const handleReview = () => {
    onReview();
  };

  return (
    <Box
      flexDirection="horizontal"
      display="flex"
      justifyItems="center"
      justifyContent="center"
      gap={4}
    >
      <Button variant="contained" size="large" onClick={handleTryAgain}>
        Try again
      </Button>

      <Button variant="contained" size="large" onClick={handleReview}>
        Review
      </Button>
    </Box>
  );
};

export default ScoreActions;
