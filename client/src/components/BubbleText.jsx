import PropTypes from "prop-types";
import styles from "./Bubble.module.css";

const BubbleText = ({ text }) => {
  // Split the text into an array of characters, including spaces
  const characters = text.split("");

  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {characters.map((character, idx) => (
        // Render each character or space inside a span with hover effect
        <span className={styles.hoverText} key={idx}>
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
