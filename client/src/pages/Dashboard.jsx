import './Dashboard.css';
import Header from '../components/Header';
import DocSubmission from '../components/DocSubmission';
import Chatbot from '../components/Chatbot';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-content">
        <nav className="sidebar">
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
        <div className="main-section">
          <div className="chatbot-section">
            <Chatbot />
          </div>
          <div className="doc-submission-section">
            <DocSubmission />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
