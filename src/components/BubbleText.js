'use client'

import PropTypes from "prop-types";
import styles from "./Bubble.module.css";

const BubbleText = ({ text }) => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300" aria-label={text}>
      {text.split("").map((character, idx) => (
        <span
          className={styles.hoverText}
          key={idx}
          aria-hidden="true"
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </h2>
  );
};

BubbleText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BubbleText;