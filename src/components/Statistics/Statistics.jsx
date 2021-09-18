import PropTypes from 'prop-types';
import { StatisticsElement } from '../StatisticsElement/StatisticsElement';
import s from './Statistics.module.css';

export function Statistics({ feedback, total, positivePercentage }) {
  const { good, neutral, bad } = feedback;

  return good + neutral + bad === 0 ? (
    <h3 className={s.noFeedbackMassage}>No feedback given</h3>
  ) : (
    <div>
      <h2>Statistics</h2>
      <ul className={s.statisticsInfo}>
        <StatisticsElement feedback={feedback} />

        <li className={s.item}>
          <span className={s.itemInfo}>Total: {total(good, neutral, bad)}</span>
        </li>
        <li className={s.item}>
          <span className={s.itemInfo}>
            Positive feedback: {positivePercentage(good, neutral, bad)}
          </span>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
  feedback: PropTypes.objectOf(PropTypes.number),
};
