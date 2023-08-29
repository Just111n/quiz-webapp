import React from "react";
import { Button, Box } from "@mui/material";
import "../../../App.css";

const ScoreActions = ({ onRestart, onReview }) => {
  const handleRestart = () => {
    onRestart();
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
      gap={3}
      paddingTop={"1rem"}
    >
      <Button
        variant="contained"
        size="large"
        onClick={handleRestart}
        color="secondary"
        className="start-Next-TryAgain-Buttons"
      >
        Try again
      </Button>

      <Button
        variant="contained"
        size="large"
        onClick={handleReview}
        color="error"
      >
        Review
      </Button>
    </Box>
  );
};

export default ScoreActions;
