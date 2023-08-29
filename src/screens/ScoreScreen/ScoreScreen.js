import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ScoreActions from "./components/ScoreActions";
import "../../App.css";

const ScoreScreen = ({ score, onRestart, onReview }) => {
  const handleRestart = () => {
    onRestart();
  };
  const handleReview = () => {
    onReview();
  };
  return (
    <Box paddingTop={"4rem"}>
      <Grid container>
        <Grid xs={12}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontSize: "1.875rem", fontWeight: 400 }}
          >
            Your score is : <b>{score}</b>
          </Typography>
        </Grid>
        <Grid xs={12}>
          <ScoreActions onRestart={handleRestart} onReview={handleReview} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScoreScreen;
