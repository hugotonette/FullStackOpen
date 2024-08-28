import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  if (all != 0) {
    return (
      <table>
        <tbody>
          <StatisticsLine text="Good" value={props.good} />
          <StatisticsLine text="Neutral" value={props.neutral} />
          <StatisticsLine text="Bad" value={props.bad} />
          <StatisticsLine text="All" value={all} />
          <StatisticsLine
            text="Average"
            value={((props.good - props.bad) / all).toFixed(1)}
          />
          <StatisticsLine
            text="Positive"
            value={((props.good * 100) / all).toFixed(1)}
          />
        </tbody>
      </table>
    );
  } else {
    return (
      <div>
        <p>No feedback yet...</p>
      </div>
    );
  }
};

const StatisticsLine = (props) => {
  return (
    <tr>
      <td> {props.text} </td>
      <td> {props.value} </td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <div>
        <h1> Give feedback </h1>
        <div>
          <Button handleClick={handleGoodClick} text="good" />
          <Button handleClick={handleNeutralClick} text="neutral" />
          <Button handleClick={handleBadClick} text="bad" />
        </div>
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
};

export default App;
