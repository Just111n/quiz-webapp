import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const StartQuizScreen = ({ onStartQuiz }) => {
  const handleClick = () => {
    onStartQuiz();
  };

  return (
    <Box>
      <Grid container>
        <Grid xs={12}>
          <Typography variant="h1" gutterBottom>
            Welcome to React Quiz Game!
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Button
            variant="contained"
            size="large"
            onClick={handleClick}
            color="secondary"
          >
            Start
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StartQuizScreen;
