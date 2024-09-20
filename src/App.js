import "./styles.css";
import { useState } from "react";

var id1;
var id2;
export default function App() {
  const [timeInSeconds, setTime] = useState(0);
  const [timeInminutes, setTimeinMinute] = useState(0);
  const [flag, setFlag] = useState(false);

  const startTimer = async () => {
    // Complete this function
    id1 = setInterval(() => {
      setTime((prev) => (prev == 59 ? 0 : prev + 1));
    }, 1000);

    id2 = setInterval(() => {
      setTimeinMinute((prev) => prev + 1);
    }, 60000);
  };
  const stopTimer = () => {
    // Complete this function
    clearInterval(id1);
    clearInterval(id2);
  };
  const resetTimer = () => {
    // Complete this function
    setTime(0);
    setTimeinMinute(0);
    clearInterval(id1);
    clearInterval(id2);
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {timeInminutes} mins </span>
      <span> {timeInSeconds} secs</span>
      <div>
        <button
          onClick={() => {
            startTimer();
            setFlag((prev) => !prev);
          }}
          disabled={flag}
        >
          Start
        </button>
        <button
          onClick={() => {
            stopTimer();
            setFlag((prev) => !prev);
          }}
          disabled={!flag}
        >
          Stop
        </button>
        <button
          onClick={() => {
            resetTimer();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
