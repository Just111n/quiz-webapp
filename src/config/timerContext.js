import React, { createContext, useContext, useState, useEffect } from "react";
import { TIMER_DURATION } from "./constants";

const TimerContext = createContext();

export const useTimer = () => {
  return useContext(TimerContext);
};


export const TimerProvider = ({ children }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(TIMER_DURATION);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prev) => prev - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsRemaining]);

  const value = {
    secondsRemaining,
    resetTimer: () => setSecondsRemaining(TIMER_DURATION),
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};
