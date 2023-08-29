import React from "react";
import {
  List,
  ListItemButton,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const AnswersDisplay = ({ answers, appState, onSelect, selectedCardIndex }) => {
  // Initialize the selectedCardIndex using the savedAnswer's answerIndex, if available

  const handleSelect = (answerIndex) => {
    const isCorrect = answers[answerIndex].correct;
    onSelect(answerIndex, isCorrect);
  };
  // console.log(selectedCardIndex);

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
                backgroundColor:
                  selectedCardIndex === index ? "#312E81" : "default", // Change background color based on the selected card
              }}
            >
              <ListItemButton onClick={() => handleSelect(index)}>
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
