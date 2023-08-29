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
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop={5}
      marginBottom={5}
    >
      <Box
        sx={{
          backgroundColor: WHITE,
          borderRadius: "100%",
          position: "relative",
          top: 40,
          zIndex: 5,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Timer
          onTimeOut={handleTimeOut}
          isTimeOut={appState === APP_STATES.REVIEW}
        />
      </Box>
      <Card
        sx={{
          height: 200,
          width: 720,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "3rem",
        }}
      >
        <CardContent>
          <Box>
            <Typography variant="h6">
              Question <b>{currentQuestionIndex + 1}</b>/{totalQuestions}
            </Typography>
            <Typography variant="h6">{question}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuestionDisplay;
