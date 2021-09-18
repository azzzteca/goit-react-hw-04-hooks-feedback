import PropTypes from 'prop-types';
import s from './StatisticsElement.module.css';

export function StatisticsElement({ feedback }) {
  const elements = Object.keys(feedback);
  return elements.map(element => {
    return (
      <li key={element} className={s.item}>
        <span className={s.itemInfo}>
          {element}: {feedback[element]}
        </span>
      </li>
    );
  });
}

StatisticsElement.propTypes = {
  feedback: PropTypes.objectOf(PropTypes.number),
};
