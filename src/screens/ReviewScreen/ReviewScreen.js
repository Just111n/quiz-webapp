import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ReviewActions from "./components/ReviewActions";

const ReviewScreen = ({ onRestart }) => {
  const handleRestart = () => {
    console.log("clicked");
    onRestart();
  };
  return (
    <Box paddingTop={10}>
      <Grid container>
        <Grid xs={12}>
          <ReviewActions onRestart={handleRestart} />
        </Grid>
        <Grid xs={12}>
          <Typography variant="h1" gutterBottom>
            Welcome to React Quiz Game!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewScreen;
