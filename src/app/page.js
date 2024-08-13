'use client'

import styles from './index.module.css';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';
import FeatureCards from '@/components/FeatureCards';
import ParticlesBackground from '@/components/Particles';

export default function Home() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.particlesBackground}>
        <ParticlesBackground />
      </div>
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.introSection}>
          <h2>
            <span>Looking </span><span>for an AI </span><span>Research Assistant?</span>
          </h2>
        </div>
        <div className={styles.formSection}>
          <LoginForm />
        </div>
        <FeatureCards />
      </div>
    </div>
  );
}
