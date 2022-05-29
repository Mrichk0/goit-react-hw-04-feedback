import PropTypes from 'prop-types';

import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const elements = options.map((option, index) => (
        <p key={index} ><button className={style.btn} onClick={() => onLeaveFeedback(option)}>{option}</button></p>
    ));

    return (
        <div className={style.boxButton}>
            {elements}
        </div>  
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;