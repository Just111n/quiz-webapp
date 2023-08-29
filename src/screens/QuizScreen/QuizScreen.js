import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import QuestionDisplay from "../../components/QuestionDisplay";
import AnswersDisplay from "../../components/AnswersDisplay";
import ConfirmDialog from "./components/ConfirmDialog";
import Actions from "../../components/Actions";

const QuizScreen = ({ questions, onSubmit, appState, onSave }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  // Initialize savedAnswers as an array of nulls, representing no answer saved for each question.
  const [savedAnswers, setSavedAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    // Here, you can do something with the currentSavedAnswer if needed.
    // For example, you might want to check if it exists, if it's correct, etc.

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleSubmit = () => {
    handleOpenSubmitDialog();
  };

  const handleTimeOut = () => {
    onSubmit();
  };

  const handleOpenSubmitDialog = () => {
    setOpenConfirmDialog(true);
  };
  const handleCloseSubmitDialog = () => {
    setOpenConfirmDialog(false);
  };
  const handleActualSubmit = () => {
    setOpenConfirmDialog(false);
    onSubmit(savedAnswers);
  };
  const handleSelect = (answerIndex, isCorrect) => {
    const newSavedAnswers = [...savedAnswers];
    newSavedAnswers[currentQuestionIndex] = { answerIndex, isCorrect };
    setSavedAnswers(newSavedAnswers);
  };
  useEffect(() => {
    // Check if savedAnswer exists and has an answerIndex property. If so, update the selectedCardIndex.
    if (savedAnswers[currentQuestionIndex]) {
      setSelectedCardIndex(savedAnswers[currentQuestionIndex].answerIndex);
    } else {
      // Reset the selected card index to null
      setSelectedCardIndex(null);
    }
  }, [savedAnswers, currentQuestionIndex]); // This will run every time savedAnswer changes

  return (
    <Box paddingTop={10}>
      <Grid container>
        <Grid xs={12}>
          <Actions
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
            appState={appState}
            onSubmit={handleSubmit}
          />
        </Grid>
        <Grid xs={12}>
          <QuestionDisplay
            question={currentQuestion.question_content}
            isReview={false}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onTimeOut={handleTimeOut}
          />
        </Grid>
        <Grid xs={12}>
          <AnswersDisplay
            answers={currentQuestion.answers}
            appState={appState}
            onSelect={handleSelect}
            selectedCardIndex={selectedCardIndex}
            // Provide the saved answer for the current question
          />
        </Grid>
      </Grid>
      <ConfirmDialog
        open={openConfirmDialog}
        onClose={handleCloseSubmitDialog}
        onConfirm={handleActualSubmit}
      />
    </Box>
  );
};

export default QuizScreen;
