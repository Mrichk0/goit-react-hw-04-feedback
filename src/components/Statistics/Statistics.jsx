import PropTypes from 'prop-types';

import styles from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return (
            <div>
                <p className={styles.statistics}>Good: {good}  </p>
                <p className={styles.statistics}>Neutral: {neutral}</p>
                <p className={styles.statistics}>Bad: {bad}</p>
                <p className={styles.statistics}>Total: {total} </p>
                <p className={styles.statistics}>PositivePercentage: {positivePercentage}%</p>
            </div>
        )
    
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;