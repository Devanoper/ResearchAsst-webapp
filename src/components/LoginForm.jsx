import './LoginForm.css';
import { useNightMode } from '../NightModeContext';
import { useState } from 'react';

const LoginForm = () => {
  const { isNightMode } = useNightMode();
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between login and register modes
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submit animation
  const [hovered, setHovered] = useState(false); // State for hover effect

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call or form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  const toggleMode = () => {
    setIsRegistering(prevState => !prevState);
  };

  return (
    <div className={`login-form ${isNightMode ? 'night-mode' : ''}`}>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit} className={hovered ? 'hovered' : ''} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        {isRegistering && (
          <>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
          </>
        )}
        <button type="submit" className={isSubmitting ? 'submitting' : ''} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : isRegistering ? 'Register' : 'Login'}
        </button>
        <p>
          {isRegistering ? 'Already have an account? ' : 'New here? '}
          <p>
          <button type="button" className="toggle-button" onClick={toggleMode}>
            {isRegistering ? 'Login' : 'Register'}
          </button>
          </p>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
