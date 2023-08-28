import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ScoreActions from "./components/ScoreActions";
const ScoreScreen = ({ score, onTryAgain, onReview }) => {
  const handleTryAgain = () => {
    onTryAgain();
  };
  const handleReview = () => {
    onReview();
  };
  return (
    <Box>
      <Grid container>
        <Grid xs={12}>
          <Typography variant="h1" gutterBottom>
            Your score is: {score}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <ScoreActions onTryAgain={handleTryAgain} onReview={handleReview} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScoreScreen;