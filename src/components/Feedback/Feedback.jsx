import { Component } from 'react';

import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification';
import Sections from 'components/Sections';

import styles from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onHandelClick = items => {
    this.setState(prevState => {
      return { [items]: prevState[items] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positiveFeedback = (this.state.good / total) * 100;
    return Math.round(positiveFeedback * 100) / 100;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { onHandelClick } = this;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

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
}
export default Feedback;
