import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Statistic from './components/Statistic';
import Buttons from './components/Buttons';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState([]);

  /**
   * Calculate average value of feedback
   */
  const calculateAverage = () => {
    let total = 0;
    all.forEach((value) => {
      total += value;
    });

    let avg = total / all.length;
    return avg;
  }

  /**
   * Calculate % of the total positive feedbacks
   */
  const calculatePositive = () => {
    let positive = good / (good + neutral + bad);
    return positive;
  }

  /**
   * Props
   */
  const props = {
    statistic: {
      good: good,
      neutral: neutral,
      bad: bad,
      all: good + neutral + bad,
      average: calculateAverage(),
      positive: calculatePositive(),
    },
    buttonHandlers: {
      handleGood: () => {
        setGood(good + 1);
        setAll(all.concat(1));
      },
      handleNeutral: () => {
        setNeutral(neutral + 1);
        setAll(all.concat(0));
      },
      handleBad: () => {
        setBad(bad + 1);
        setAll(all.concat(-1))
      }
    }
  }

  return (
    <div className="app">
      <Header />
      <Buttons {...props.buttonHandlers} />
      <Statistic {...props.statistic} />
    </div>
  )
}

export default App