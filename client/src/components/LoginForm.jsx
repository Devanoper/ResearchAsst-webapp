import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { useNightMode } from '../NightModeContext';
import { useState } from 'react';
import axios from './axiosConfig'; // Import the configured axios instance

const LoginForm = () => {
  const { isNightMode } = useNightMode();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('/api/auth/login', formData);
      alert('Login successful!');
      // Store the token
      localStorage.setItem('token', response.data.token);
      // Redirect to dashboard or any other authenticated route
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to '/register' path
  };

  return (
    <div className={`login-form ${isNightMode ? 'night-mode' : ''}`}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={isSubmitting ? 'submitting' : ''} disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="register-link">
        <p> Don&apos;t have an account? <button type="button" onClick={handleRegisterClick}>Register here</button></p>
      </div>
    </div>
  );
};

export default LoginForm;
