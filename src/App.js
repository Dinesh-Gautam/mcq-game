import React from "react";
import "./App.css";
import Question from "./components/Question";
import Score from "./components/Score";
import { questions } from "./data/questions";
import useGameLogic from "./hooks/useGameLogic";

const App = () => {
  const { isFinished, score, currentQuestion, handleAnswer } = useGameLogic();

  return (
    <div className="app-container">
      {isFinished ? (
        <Score score={score} total={questions.length} />
      ) : (
        <Question
          questionData={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;
