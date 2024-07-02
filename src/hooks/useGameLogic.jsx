import React, { createContext, useCallback, useContext, useState } from "react";
import { questions } from "../data/questions";

const gameLogicContext = createContext(null);

export function useGameLogic() {
  return useContext(gameLogicContext);
}

export function GameLogicProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const correctAnswer = questions[currentQuestion].correct;

  const handleAnswer = useCallback(
    (answer, cb) => {
      const isCorrect = answer === correctAnswer;
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      cb(isCorrect);
    },
    [correctAnswer]
  );

  const handleNextQuestion = useCallback(() => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  }, [currentQuestion]);

  const values = {
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    isFinished,
    setIsFinished,
    handleAnswer,
    correctAnswer,
    handleNextQuestion,
  };

  return (
    <gameLogicContext.Provider value={values}>
      {children}
    </gameLogicContext.Provider>
  );
}

export default useGameLogic;
