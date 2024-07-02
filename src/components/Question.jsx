import React, { useEffect, useState } from "react";
import useGameLogic from "../hooks/useGameLogic";
import ProgressBar from "./ProgressBar";
import { questions } from "../data/questions";

const INITIAL_STATE = {
  selected: null,
  submitted: false,
};

const Question = ({ questionData }) => {
  const { currentQuestion, handleAnswer, correctAnswer, handleNextQuestion } =
    useGameLogic();
  const [answer, setAnswer] = useState(INITIAL_STATE);

  useEffect(() => setAnswer(INITIAL_STATE), [currentQuestion]);

  return (
    <div className="question-container">
      <ProgressBar />
      <p>
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((option, index) => (
          <button
            disabled={answer.selected}
            className={
              answer.submitted && option === correctAnswer
                ? "correct"
                : option === answer.selected && option !== correctAnswer
                ? "wrong"
                : ""
            }
            key={index}
            onClick={() =>
              handleAnswer(option, () =>
                setAnswer({
                  submitted: true,
                  selected: option,
                })
              )
            }
          >
            {option}
          </button>
        ))}
      </div>
      <button
        disabled={!answer.selected}
        className="next"
        onClick={handleNextQuestion}
      >
        Next
      </button>
    </div>
  );
};

export default Question;
