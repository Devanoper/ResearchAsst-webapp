import './Login.css';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import FeatureCards from '../components/FeatureCards';
import ParticlesBackground from '../components/Particles';

function Login() {
  return (
    <div className="login-page">
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
          <LoginForm />
        </div>
        <FeatureCards />
      </div>
    </div>
  );
}

export default Login;
