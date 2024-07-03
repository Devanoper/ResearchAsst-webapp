import './Register.css';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';
import FeatureCards from '../components/FeatureCards';
import ParticlesBackground from '../components/Particles';

function Register() {
  return (
    <div className="register-page">
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
          <RegisterForm />
        </div>
        <FeatureCards />
      </div>
    </div>
  );
}

export default Register;
