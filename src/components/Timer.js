import React, { useState, useEffect } from "react";
import { Typography, CircularProgress, Box } from "@mui/material";
import { formatTime } from "../utils/quizUtils";

const TIMER_DURATION = 90;

const Timer = ({ onStart, onTimeOut, isTimeOut }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(TIMER_DURATION);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (onStart) {
      onStart(() => setHasStarted(true));
    } else {
      setHasStarted(true);
    }
  }, [onStart]);

  useEffect(() => {
    if (isTimeOut) {
      setHasStarted(false);
      setSecondsRemaining(0);
      return;
    }

    if (!hasStarted) return;

    const timer = setTimeout(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prev) => prev - 1);
      } else {
        onTimeOut && onTimeOut();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsRemaining, onTimeOut, hasStarted, isTimeOut]);

  const displayText =
    !hasStarted || isTimeOut || secondsRemaining === 0
      ? "End"
      : formatTime(secondsRemaining);

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={(100 * secondsRemaining) / TIMER_DURATION}
        size={80}
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
        <Typography variant="h6">{displayText}</Typography>
      </Box>
    </Box>
  );
};

export default Timer;