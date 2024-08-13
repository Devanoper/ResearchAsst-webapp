'use client'

import PropTypes from 'prop-types';
import styles from './ToggleButton.module.css';

const ToggleButton = ({ isNightMode, toggleNightMode }) => {
  return (
    <div className={styles.toggleButton} onClick={toggleNightMode}>
      <div className={`${styles.slider} ${isNightMode ? styles.night : styles.day}`}></div>
    </div>
  );
};

ToggleButton.propTypes = {
  isNightMode: PropTypes.bool.isRequired,
  toggleNightMode: PropTypes.func.isRequired,
};

export default ToggleButton;
