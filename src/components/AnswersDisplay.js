import React from "react";
import {
  List,
  ListItemButton,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { APP_STATES } from "../config/constants";
import { WHITE } from "../config/constants";

const AnswersDisplay = ({ answers, appState, onSelect, selectedCardIndex }) => {
  const theme = useTheme(); // Add this line

  const handleSelect = (answerIndex) => {
    if (appState === APP_STATES.START_QUIZ) {
      const isCorrect = answers[answerIndex].correct;
      onSelect(answerIndex, isCorrect);
    }
  };

  const getCardBackgroundColor = (index) => {
    if (appState === APP_STATES.START_QUIZ) {
      return selectedCardIndex === index
        ? theme.customPalette.hoverAnswer // Use theme
        : theme.palette.background.default; // Use theme's default
    }
    if (appState === APP_STATES.REVIEW) {
      if (answers[index].correct) {
        return theme.palette.success.main; // Use theme's success color
      }
      if (!answers[index].correct & (selectedCardIndex === index)) {
        return theme.palette.error.main; // Use theme's error color
      }
      return theme.palette.background.default; // Use theme's default
    }
  };
  const getCardColor = (index) => {
    if (appState === APP_STATES.START_QUIZ) {
      return selectedCardIndex === index
        ? WHITE // Use theme
        : "default"; // Use theme's default
    }
    if (appState === APP_STATES.REVIEW) {
      if (answers[index].correct) {
        return WHITE;
      }
      if (!answers[index].correct & (selectedCardIndex === index)) {
        return WHITE;
      }
      return "default"; // Use theme's default
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <List>
        {answers.map((answer, index) => (
          <Box mb={2} key={index}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: 1,
                minWidth: 640,
                backgroundColor: getCardBackgroundColor(index),
                color: getCardColor(index),
                ...(appState === APP_STATES.START_QUIZ && {
                  "&:hover": {
                    backgroundColor: theme.customPalette.hoverAnswer, // Your hover color from theme
                    color: WHITE,
                    cursor: "pointer",
                  },
                }),
              }}
            >
              <ListItemButton
                onClick={() => {
                  if (appState === APP_STATES.START_QUIZ) {
                    handleSelect(index);
                  }
                }}
              >
                <CardContent>
                  <Typography variant="body1">
                    {index + 1}
                    {")"} {answer.answer_content}
                  </Typography>
                </CardContent>
              </ListItemButton>
            </Card>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default AnswersDisplay;
