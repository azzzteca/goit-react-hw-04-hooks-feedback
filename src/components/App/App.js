import React, { useState, useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import s from './App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChangeFeedbackCount = evt => {
    if (evt.target.tagName !== 'BUTTON') {
      return;
    }

    // this.setState(prevState => ({
    //   [evt.target.id]: prevState[evt.target.id] + 1,
    // }));
  };

  return (
    <div className={s.app}>
      <Feedback
        feedback={['good', 'neutral', 'bad']}
        changeCoutFeedback={handleChangeFeedbackCount}
      />
    </div>
  );
}

export default App;

// class App extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   handleChangeFeedbackCount = evt => {
//     if (evt.target.tagName !== 'BUTTON') {
//       return;
//     }

//     this.setState(prevState => ({
//       [evt.target.id]: prevState[evt.target.id] + 1,
//     }));
//   };

//   render() {
//     return (
//       <div className={s.app}>
//         <Feedback
//           feedback={this.state}
//           changeCoutFeedback={this.handleChangeFeedbackCount}
//         />
//       </div>
//     );
//   }
// }

// export default App;
