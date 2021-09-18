import React, { Component } from 'react';
import Feedback from '../Feedback/Feedback';
import s from './App.module.css';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleChangeFeedbackCount = evt => {
    if (evt.target.tagName !== 'BUTTON') {
      return;
    }

    this.setState(prevState => ({
      [evt.target.id]: prevState[evt.target.id] + 1,
    }));
  };

  render() {
    return (
      <div className={s.app}>
        <Feedback
          feedback={this.state}
          changeCoutFeedback={this.handleChangeFeedbackCount}
        />
      </div>
    );
  }
}

export default App;
