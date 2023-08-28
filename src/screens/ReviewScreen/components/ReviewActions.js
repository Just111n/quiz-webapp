import React from "react";
import { Button, Box } from "@mui/material";

const ReviewActions = ({ onRestart }) => {
  const handleTryAgain = () => {
    // onTryAgain();
  };
  const handleRestart = () => {
    onRestart();
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
        Previous
      </Button>

      <Button variant="contained" size="large" onClick={handleRestart}>
        Next
      </Button>
      <Button variant="contained" size="large" onClick={handleRestart}>
        Restart
      </Button>
    </Box>
  );
};

export default ReviewActions;
