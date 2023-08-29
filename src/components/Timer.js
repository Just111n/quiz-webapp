import React,{useEffect} from "react";
import { Typography, CircularProgress, Box } from "@mui/material";
import { formatTime } from "../utils/quizUtils";
import { useTimer } from "../config/timerContext";
import { TIMER_DURATION } from "../config/constants";

const CRITICAL_TIME = 10; // Example, for when the time becomes critical like last 10 seconds.

const Timer = ({ onTimeOut, isTimeOut }) => {
  const { secondsRemaining: actualSecondsRemaining } = useTimer();

  // If isTimeOut prop is true, set timer to zero and display "End!"
  const secondsRemaining = isTimeOut ? 0 : actualSecondsRemaining;
  const timeText = isTimeOut ? "End!" : formatTime(secondsRemaining);

  // Get color based on the remaining time
  const getColor = () =>
    secondsRemaining <= CRITICAL_TIME ? "red" : "#4f46e5";

  useEffect(() => {
    if (secondsRemaining === 0 && onTimeOut) {
      onTimeOut();
    }
  }, [secondsRemaining, onTimeOut]);

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={(100 * secondsRemaining) / TIMER_DURATION}
        size={72}
        sx={{ color: getColor() }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" sx={{ color: getColor() }}>
          {timeText}
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;
