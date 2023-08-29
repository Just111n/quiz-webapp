import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Actions from "../../components/Actions";
import QuestionDisplay from "../../components/QuestionDisplay";
import AnswersDisplay from "../../components/AnswersDisplay";

const ReviewScreen = ({ onRestart, questions }) => {
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentQuestionIndex(currentQuestionIndex + 1);
  // };

  // const handlePrevious = () => {
  //   if (currentQuestionIndex > 0) {
  //     setCurrentQuestionIndex(currentQuestionIndex - 1);
  //   }
  // };

  // const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box paddingTop={10}>
      {/* <Grid container>
        <Grid xs={12}>
          <Actions
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </Grid>
        <Grid xs={12}>
          <QuestionDisplay
            question={currentQuestion.question_content}
            isReview={false}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />
        </Grid>
        <Grid xs={12}>
          <AnswersDisplay answers={currentQuestion.answers} />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default ReviewScreen;
