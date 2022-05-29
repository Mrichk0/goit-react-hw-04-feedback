import { useState } from 'react';

import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification';
import Sections from 'components/Sections';

import styles from './Feedback.module.css';

const Feedback = () => {
  const [state, setState] = useState({
     good: 0,
     neutral: 0,
     bad: 0,
  })

  const onHandelClick = items => {
    setState(prevState => {
      return { ...prevState, [items]: prevState[items] + 1 };
    });
   };
  
  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  }

  const  countPositiveFeedbackPercentage = () =>{
    const positiveFeedback = (state.good / total) * 100;
    return Math.round(positiveFeedback * 100) / 100;
  }

  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

      return (
      <div className={styles.container}>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onHandelClick}
          />
        </Sections>
        <Sections title="Statistics">
          {!total && <Notification message="There is no feedback" />}
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Sections>
      </div>
    );
}

export default Feedback;
