'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './dashboard.module.css';
import Header from '../../components/Header';
import DocSubmission from '../../components/DocSubmission';
import Chatbot from '../../components/Chatbot';
import Faq from '../../components/Faq';
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const pathname = usePathname();

  useEffect(() => {
    const path = pathname.split('/').pop();
    setActiveSection(path || 'dashboard');
  }, [pathname]);

  return (
    <>
      <Head>
        <title>Dashboard - AI Research Assistant</title>
        <meta name="description" content="AI Research Assistant Dashboard" />
      </Head>
      <div className={styles.dashboardPage}>
        <Header />
        <div className={styles.dashboardContent}>
          <nav className={styles.sidebar}>
            <ul>
              <li>
                <Link href="/dashboard" className={activeSection === 'dashboard' ? styles.active : ''}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/settings" className={activeSection === 'settings' ? styles.active : ''}>
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/dashboard/faq" className={activeSection === 'faq' ? styles.active : ''}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.mainSection}>
            {activeSection === 'faq' ? (
              <Faq />
            ) : (
              <>
                <div className={styles.chatbotContainer}>
                  <Chatbot />
                </div>
                <div className={styles.docSubmissionContainer}>
                  <DocSubmission />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
