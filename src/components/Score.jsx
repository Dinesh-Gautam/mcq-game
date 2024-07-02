import React from "react";

const Score = ({ score, total }) => {
  return (
    <div className="score-container">
      <h2>
        Your Score: {score} / {total}
      </h2>
    </div>
  );
};

export default Score;
