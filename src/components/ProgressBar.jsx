import React from "react";
import { questions } from "../data/questions";
import useGameLogic from "../hooks/useGameLogic";

function ProgressBar() {
  const { currentQuestion } = useGameLogic();

  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);

  return (
    <div className="progress-bar">
      <div style={{ width: `${progress}%` }} className="progress"></div>
    </div>
  );
}

export default ProgressBar;
