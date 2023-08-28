import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import QuizActions from "./components/QuizActions";
import QuestionDisplay from "../../components/QuestionDisplay";
import AnswerDisplay from "../../components/AnswersDisplay";
import ConfirmDialog from "./components/ConfirmDialog";

const QuizScreen = ({ questions, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleOpenSubmitDialog();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

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
    onSubmit();
  };
  return (
    <Box paddingTop={10}>
      <Grid container>
        <Grid xs={12}>
          <QuizActions
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
            onTimeOut={handleTimeOut}
          />
        </Grid>
        <Grid xs={12}>
          <AnswerDisplay answers={currentQuestion.answers} />
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
