import { useState } from 'react';
import './FAQ.css';

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

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className={`faq-toggle ${isOpen ? 'open' : ''}`}>+</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function FAQ() {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default FAQ;