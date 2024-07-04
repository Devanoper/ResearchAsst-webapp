import { useState } from 'react';
import './Dashboard.css';
import Header from '../components/Header';
import DocSubmission from '../components/DocSubmission';
import Chatbot from '../components/Chatbot';
import FAQ from '../components/FAQ';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-content">
        <nav className="sidebar">
          <ul>
            <li><a href="#" className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>Dashboard</a></li>
            <li><a href="#" className={activeSection === 'settings' ? 'active' : ''} onClick={() => setActiveSection('settings')}>Settings</a></li>
            <li><a href="#" className={activeSection === 'faq' ? 'active' : ''} onClick={() => setActiveSection('faq')}>FAQ</a></li>
          </ul>
        </nav>
        <div className="main-section">
          {activeSection === 'faq' ? (
            <FAQ />
          ) : (
            <>
              <div className="chatbot-container">
                <Chatbot />
              </div>
              <div className="doc-submission-container">
                <DocSubmission />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;