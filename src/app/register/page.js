'use client'

import styles from '@/styles/register.module.css';
import Header from '@/components/Header';
import RegisterForm from '@/components/RegisterForm';
import FeatureCards from '@/components/FeatureCards';
import ParticlesBackground from '@/components/Particles';

export default function Register() {
  return (
    <div className={styles.registerPage}>
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
          <RegisterForm />
        </div>
        <FeatureCards />
      </div>
    </div>
  );
}