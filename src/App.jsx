import "./index.css";
import Question from "./Question.js";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(false);
  const [answerd, setAnswerd] = useState(9);
  const [isDesabled, setIsDesabled] = useState(true);
  const [marks, setMarks] = useState(0);

  const run = () => {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("welcome").style.display = "none";
  };

  const calculate = () => {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("last").style.display = "block";
  };

  const nextQuiz = () => {
    setIsDesabled(true);
    setCount(count + 1);
    setAnswerd(null);
    setSelected(false);
  };
  const answerQuestion = (answer, i) => {
    setIsDesabled(false);
    setSelected(true);
    setAnswerd(i);
    if (answer.isTrue) {
      setMarks(marks + 1);
    } else {
    }
  };
  return (
    <div className="container">
      <div className={`welcome`} id="welcome">
        <h1>Quiz App .</h1>
        <button className="run" onClick={() => run()}>
          Start quiz . 🎀
        </button>
      </div>
      <div className="quiz" id="quiz">
        <h1>
          {count + 1}. {Question[count].name}
        </h1>
        <div className="buttons">
          {Question[count].answers.map((answer, i) => (
            <button
              key={i}
              className={
                selected
                  ? answer.isTrue
                    ? "true-ans"
                    : i === answerd
                    ? "false-ans"
                    : ""
                  : ""
              }
              disabled={!isDesabled}
              onClick={() => answerQuestion(answer, i)}
            >
              {answer.answer}
            </button>
          ))}
        </div>
        {count + 1 == Question.length ? (
          <button className="calculate" onClick={() => calculate()}>
            Calculate Your Marks .
          </button>
        ) : (
          <button
            disabled={isDesabled}
            className="next"
            onClick={() => nextQuiz()}
          >
            next
          </button>
        )}
      </div>
      <div className="last" id="last">
        <h1>Your Marks</h1>
        {marks === Question.length ? (
          <h2>Congratulations ! 🎉</h2>
        ) : marks === 0 ? (
          <h2>Very Bad 😤</h2>
        ) : (
          <h2>Good 👍</h2>
        )}
        {marks === Question.length ? (
          <p>You got All correct .❤️</p>
        ) : marks === 0 ? (
          <p>You have no marks .😂</p>
        ) : (
          <p>
            You got {marks} marks out of {Question.length} .😃
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
