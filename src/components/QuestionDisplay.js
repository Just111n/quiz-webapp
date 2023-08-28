import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timer from "./Timer";

const QuestionDisplay = ({
  question,
  onStart,
  onTimeOut,
  isReview,
  currentQuestionIndex,
  totalQuestions,
}) => {
  const handleTimeOut = () => {
    onTimeOut();
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center" marginTop={5} marginBottom={5}>
      <Card
        sx={{
          height: 328,
          width: 728,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Timer onTimeOut={handleTimeOut} />
          <Typography variant="h5">
            Question <b>{currentQuestionIndex + 1}</b>/{totalQuestions}
          </Typography>
          <Typography variant="h5">{question}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuestionDisplay;
