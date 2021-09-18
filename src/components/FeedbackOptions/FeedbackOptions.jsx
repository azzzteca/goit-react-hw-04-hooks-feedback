import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export function FeedbackOptions({ feedback, changeCoutFeedback }) {
  const buttons = Object.keys(feedback);

  return (
    <form className={s.form} onClick={changeCoutFeedback}>
      {buttons.map(button => {
        return (
          <button key={button} id={button} type="button" className={s.button}>
            {button}
          </button>
        );
      })}
    </form>
  );
}

FeedbackOptions.propTypes = {
  feedback: PropTypes.objectOf(PropTypes.number),
  changeCoutFeedback: PropTypes.func,
};
