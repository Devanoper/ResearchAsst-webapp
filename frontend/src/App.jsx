import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import FeatureCards from './components/FeatureCards';
import { useNightMode } from './NightModeContext';

function App() {
  const { isNightMode } = useNightMode();

  return (
    <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
      <Header />
      <div className="main-content">
        <div className="intro-section">
          <h2>Looking for an AI Research Assistant?</h2>
        </div>
        <div className="form-section">
          <LoginForm />
        </div>
      </div>
      <FeatureCards />
    </div>
  );
}

export default App;
