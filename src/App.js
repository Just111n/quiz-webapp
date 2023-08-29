import React, { useState } from "react";
import { Box } from "@mui/material";

import "./App.css";
import StartQuizScreen from "./screens/StartQuizScreen/StartQuizScreen";
import ScoreScreen from "./screens/ScoreScreen/ScoreScreen";
import QuizScreen from "./screens/QuizScreen/QuizScreen";
import ReviewScreen from "./screens/ReviewScreen/ReviewScreen";
import QUESTIONS from "./data/questions.json";
import { getScore, randomizeQuestions } from "./utils/quizUtils";

const APP_STATES = {
  INIT: "init",
  START_QUIZ: "startQuiz",
  SHOW_SCORE: "showScore",
  REVIEW: "review",
};

function App() {
  const [appState, setAppState] = useState(APP_STATES.INIT);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(QUESTIONS);

  const handleStartQuiz = () => {
    setAppState(APP_STATES.START_QUIZ);
    const randomizedQuestions = randomizeQuestions(questions);
    setQuestions(randomizedQuestions);
  };

  const handleTryAgain = () => {
    setAppState(APP_STATES.INIT);
  };

  const handleSubmit = (savedAnswers) => {
    setScore(getScore(savedAnswers));

    setAppState(APP_STATES.SHOW_SCORE);
    console.log(savedAnswers);
  };

  const handleReview = () => {
    setAppState(APP_STATES.REVIEW);
  };
  const handleSave = (savedAnswer, currentQuestionIndex) => {
    // console.log("app.js", savedAnswer, currentQuestionIndex);
  };

  return (
    <Box className="App">
      {appState === APP_STATES.INIT && (
        <StartQuizScreen onStartQuiz={handleStartQuiz} />
      )}
      {appState === APP_STATES.START_QUIZ && (
        <QuizScreen
          questions={questions}
          onSubmit={handleSubmit}
          appState={appState}
          onSave={handleSave}
        />
      )}
      {appState === APP_STATES.SHOW_SCORE && (
        <ScoreScreen
          score={score}
          onTryAgain={handleTryAgain}
          onReview={handleReview}
        />
      )}
      {appState === APP_STATES.REVIEW && (
        <ReviewScreen onRestart={handleTryAgain} />
      )}
    </Box>
  );
}

export default App;
