import React, { useState } from "react";
import { Box } from "@mui/material";

import "./App.css";
import StartQuizScreen from "./screens/StartQuizScreen/StartQuizScreen";
import ScoreScreen from "./screens/ScoreScreen/ScoreScreen";
import QuizScreen from "./screens/QuizScreen/QuizScreen";
import ReviewScreen from "./screens/ReviewScreen/ReviewScreen";
import QUESTIONS from "./data/questions.json";
import { getScore, randomizeQuestions } from "./utils/quizUtils";
import { APP_STATES } from "./config/constants";
import { useTimer } from "./config/timerContext";

function App() {
  const { resetTimer } = useTimer();
  const [appState, setAppState] = useState(APP_STATES.INIT);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(QUESTIONS);
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  const handleStartQuiz = () => {
    setAppState(APP_STATES.START_QUIZ);
    const randomizedQuestions = randomizeQuestions(questions);
    setQuestions(randomizedQuestions);
    resetTimer();

  };

  const handleRestart = () => {
    setAppState(APP_STATES.INIT);
  };

  const handleSubmit = (savedAnswers) => {
    setScore(getScore(savedAnswers));

    setAppState(APP_STATES.SHOW_SCORE);
    // console.log(savedAnswers);
    setSubmittedAnswers(savedAnswers);
  };

  const handleReview = () => {
    setAppState(APP_STATES.REVIEW);
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
        />
      )}
      {appState === APP_STATES.SHOW_SCORE && (
        <ScoreScreen
          score={score}
          onRestart={handleRestart}
          onReview={handleReview}
        />
      )}
      {appState === APP_STATES.REVIEW && (
        <ReviewScreen
          onRestart={handleRestart}
          submittedAnswers={submittedAnswers}
          questions={questions}
          appState={appState}
        />
      )}
    </Box>
  );
}

export default App;
