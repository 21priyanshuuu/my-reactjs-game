import React from "react";
import "../styles/Question.css";

function Question({ question, handleAnswer }) {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
