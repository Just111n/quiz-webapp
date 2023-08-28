import React from "react";
import {
  List,
  ListItemButton,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const AnswersDisplay = ({ answers }) => {
  const handleSelect = (index) => {
    console.log(index);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <List>
        {answers.map((answer, index) => (
          <Box mb={2} key={index}>
            <Card variant="outlined" sx={{ borderRadius: 1, minWidth: 640 }}>
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
