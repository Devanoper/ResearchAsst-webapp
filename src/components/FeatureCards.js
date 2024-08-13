'use client'

import Image from 'next/image';
import styles from './FeatureCards.module.css';
import { useState } from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: '/feature-icon1.png',
      title: 'Effortless Paper Summarization',
      description: 'Quickly get summaries of complex papers to save time and understand key points.',
    },
    {
      icon: '/feature-icon2.png',
      title: 'Interactive Paper Q&A',
      description: 'Ask questions and get answers about your research papers in real-time.',
    },
    {
      icon: '/feature-icon3.png',
      title: 'Real-time Idea Generation',
      description: 'Generate new research ideas based on the latest papers and trends.',
    },
    {
      icon: '/feature-icon4.png',
      title: 'Advanced Research Assistance',
      description: 'Leverage AI for in-depth research assistance and data analysis.',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={styles.featureCardsSection}>
      <div className={styles.featureCardsContainer}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.featureCard} ${hoveredIndex === index ? styles.hovered : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.featureCardLogo}>
              <Image src={feature.icon} alt={`${feature.title} logo`} width={100} height={100} />
            </div>
            <div className={styles.featureCardContent}>
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