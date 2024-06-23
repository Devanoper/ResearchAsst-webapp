import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { useNightMode } from '../NightModeContext';
import { useState } from 'react';
import axios from './axiosConfig';

const LoginForm = () => {
  const { isNightMode } = useNightMode();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('/api/auth/login', formData);
      setSuccessMessage('Login successful!');
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage('Login failed: ' + (error.response?.data?.message || error.message));
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
    navigate('/register');
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
        <div className="button-container">
          <button type="submit" className={`button button-default ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      {errorMessage && (
        <div className="alert error" role="alert" aria-live="assertive">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="alert success" role="alert" aria-live="assertive">
          {successMessage}
        </div>
      )}
      <div className="register-link">
        <p> Don&apos;t have an account? <button type="button" className="button button-transparent" onClick={handleRegisterClick}>Register here</button></p> 
      </div>
    </div>
  );
};

export default LoginForm;
