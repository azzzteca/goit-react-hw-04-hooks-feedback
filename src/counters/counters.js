export function countTotalFeedback(good, neutral, bad) {
  return good + neutral + bad;
}

export function countPositiveFeedbackPercentage(good, neutral, bad) {
  if (good !== 0) {
    if (neutral + bad === 0) {
      return 100 + ' %';
    } else {
      return Math.round((good / (good + neutral + bad)) * 100) + ' %';
    }
  }

  return 0 + '%';
}
