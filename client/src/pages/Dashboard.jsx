import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Header from '../components/Header';
import DocSubmission from '../components/DocSubmission';
import Chatbot from '../components/Chatbot';
import Faq from '../components/Faq';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    setActiveSection(section);
    navigate(section);
  };

  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-content">
        <nav className="sidebar">
          <ul>
            <li>
              <Link
                to=""
                className={activeSection === 'dashboard' ? 'active' : ''} 
                onClick={() => handleNavigation('')}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="settings" 
                className={activeSection === 'settings' ? 'active' : ''} 
                onClick={() => handleNavigation('settings')}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link 
                to="faq" 
                className={activeSection === 'faq' ? 'active' : ''} 
                onClick={() => handleNavigation('faq')}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        <div className="main-section">
          <Routes>
            <Route path="faq" element={<Faq />} />
            <Route 
              path="*" 
              element={
                <>
                  <div className="chatbot-container">
                    <Chatbot />
                  </div>
                  <div className="doc-submission-container">
                    <DocSubmission />
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
