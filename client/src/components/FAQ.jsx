import { useState, useRef } from 'react';
import './Faq.css';
import propTypes from 'prop-types';

const faqData = [
  {
    question: "How do I submit a paper?",
    answer: "You can submit a paper by going to the Dashboard, selecting a file, and clicking the 'Submit' button."
  },
  {
    question: "What file formats are accepted?",
    answer: "We accept PDF, DOC, and DOCX file formats for paper submissions."
  },
  {
    question: "How long does the review process take?",
    answer: "The review process typically takes 2-4 weeks, depending on the complexity of the paper and reviewer availability."
  },
  // Add more FAQ items as needed
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className={`faq-toggle ${isOpen ? 'open' : ''}`}>+</span>
      </div>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{ height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        <div className="faq-answer-content">
          {answer}
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

FAQItem.propTypes = {
  question: propTypes.string.isRequired,
  answer: propTypes.string.isRequired,
};

export default Faq;
