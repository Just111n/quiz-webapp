import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timer from "./Timer";
import { APP_STATES } from "../config/constants";
import { WHITE } from "../config/constants";

const QuestionDisplay = ({
  question,
  onStart,
  onTimeOut,
  currentQuestionIndex,
  totalQuestions,
  appState,
}) => {
  const handleTimeOut = () => {
    if (appState === APP_STATES.START_QUIZ) {
      onTimeOut();
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={5}
      marginBottom={5}
    >
      <Card
        sx={{
          height: 328,
          width: 728,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <CardContent>
          <Box
            // position="absolute"
            // top={0}
            // left={0}
            // right={0}
            // sx={{ backgroundColor: WHITE }}
          >
            <Timer
              onTimeOut={handleTimeOut}
              isTimeOut={appState === APP_STATES.REVIEW}
            />
          </Box>
          <Box>
            <Typography variant="h5">
              Question <b>{currentQuestionIndex + 1}</b>/{totalQuestions}
            </Typography>
            <Typography variant="h5">{question}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuestionDisplay;
