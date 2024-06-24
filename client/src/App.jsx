import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import FeatureCards from './components/FeatureCards';
import { useNightMode } from './NightModeContext';
import ParticlesBackground from './components/Particles';

function App() {
  const { isNightMode } = useNightMode();

  return (
    <Router>
      <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
        <div className="particles-background">
          <ParticlesBackground />
        </div>
        <div className="main-content">
          <Header />
          <div className="intro-section">
            <h2>
              <span>Looking </span><span>for an AI </span><span>Research Assistant?</span>
            </h2>
          </div>
          <div className="form-section">
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </div>
        </div>
        <FeatureCards />
      </div>
    </Router>
  );
}

export default App;
