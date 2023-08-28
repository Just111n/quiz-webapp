const shuffleArray = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const randomizeQuestions = (questions) => {
  // Randomize the order of the questions
  let randomizedQuestions = shuffleArray(questions);

  // Randomize the order of the answers within each question
  randomizedQuestions = randomizedQuestions.map((question) => {
    return {
      ...question,
      answers: shuffleArray(question.answers),
    };
  });

  return randomizedQuestions;
};

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

// Usage:
export { randomizeQuestions,formatTime };
