import { useState } from 'react';
import Feedback from '../Feedback/Feedback';
import s from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = { good, neutral, bad };

  const handleChangeFeedbackCount = evt => {
    if (evt.target.tagName !== 'BUTTON') {
      return;
    }

    switch (evt.target.id) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
    }
  };

  return (
    <div className={s.app}>
      <Feedback
        feedback={feedbackOptions}
        changeCoutFeedback={handleChangeFeedbackCount}
      />
    </div>
  );
}
