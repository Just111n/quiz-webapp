import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import QuestionDisplay from "../../components/QuestionDisplay";
import AnswersDisplay from "../../components/AnswersDisplay";
import Actions from "../../components/Actions";

const ReviewScreen = ({ questions, appState, onRestart, submittedAnswers }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Initialize savedAnswers as an array of nulls, representing no answer saved for each question.

  const currentQuestion = questions[currentQuestionIndex];
  const selectedCardIndex = submittedAnswers[currentQuestionIndex]?.answerIndex;

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <Box paddingTop={6}>
      <Grid container>
        <Grid xs={12}>
          <Actions
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
            appState={appState}
            onRestart={onRestart}
          />
        </Grid>
        <Grid xs={12}>
          <QuestionDisplay
            question={currentQuestion.question_content}
            isReview={true}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            appState={appState}
          />
        </Grid>
        <Grid xs={12}>
          <AnswersDisplay
            answers={currentQuestion.answers}
            appState={appState}
            selectedCardIndex={selectedCardIndex}
            // Provide the saved answer for the current question
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewScreen;
