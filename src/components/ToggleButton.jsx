import PropTypes from 'prop-types';
import './ToggleButton.css';

const ToggleButton = ({ isNightMode, toggleNightMode }) => {
  return (
    <div className="toggle-button" onClick={toggleNightMode}>
      <div className={`slider ${isNightMode ? 'night' : 'day'}`}></div>
    </div>
  );
};

ToggleButton.propTypes = {
  isNightMode: PropTypes.bool.isRequired,
  toggleNightMode: PropTypes.func.isRequired,
};

export default ToggleButton;
