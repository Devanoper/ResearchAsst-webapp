import './FeatureCards.css';
import { useNightMode } from '../NightModeContext';
import { useState } from 'react';

const FeatureCards = () => {
  const { isNightMode } = useNightMode();

  const features = [
    {
      icon: 'feature-icon1.png',
      title: 'Effortless Paper Summarization',
      description: 'Quickly get summaries of complex papers to save time and understand key points.',
    },
    {
      icon: 'feature-icon2.png',
      title: 'Interactive Paper Q&A',
      description: 'Ask questions and get answers about your research papers in real-time.',
    },
    {
      icon: 'feature-icon3.png',
      title: 'Real-time Idea Generation',
      description: 'Generate new research ideas based on the latest papers and trends.',
    },
    {
      icon: 'feature-icon4.png',
      title: 'Advanced Research Assistance',
      description: 'Leverage AI for in-depth research assistance and data analysis.',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`feature-cards-section ${isNightMode ? 'night-mode' : ''}`}>
      <div className="feature-cards-container">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="feature-card-logo">
              <img src={feature.icon} alt={`${feature.title} logo`} />
            </div>
            <div className="feature-card-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
