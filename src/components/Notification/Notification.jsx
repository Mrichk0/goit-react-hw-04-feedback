import PropTypes from 'prop-types';

const Notification = ({ massage }) => {
    return <p>{massage}</p>;
}

Notification.protoTypes = {
    massage: PropTypes.string.isRequired,
};

export default Notification;