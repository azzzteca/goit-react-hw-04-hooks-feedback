import PropTypes from 'prop-types';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../../counters/counters';

function Feedback({ feedback, changeCoutFeedback }) {
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          feedback={feedback}
          changeCoutFeedback={changeCoutFeedback}
        />
        <Statistics
          feedback={feedback}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
}

export default Feedback;

Feedback.propTypes = {
  feedback: PropTypes.objectOf(PropTypes.number),
  changeCoutFeedback: PropTypes.func,
};
