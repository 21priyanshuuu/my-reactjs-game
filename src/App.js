import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Question from "./components/Question";
import Result from "./components/Result";
import questions from "./data/question";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>React Quiz Game</h1>
      </header>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Question
                question={questions[currentQuestion]}
                handleAnswer={handleAnswer}
              />
            }
          />
          <Route path="/result" element={<Result score={score} />} />
        </Routes>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
