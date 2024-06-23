import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import { useNightMode } from '../NightModeContext';
import { useState } from 'react';
import axios from './axiosConfig';

const RegisterForm = () => {
  const { isNightMode } = useNightMode();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post('/api/auth/register', formData);
      setSuccessMessage('Registration successful!  ....redirecting');
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/');
    } catch (error) {
      setErrorMessage('Registration failed: ' + (error.response?.data?.message || error.message));
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

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className={`register-form ${isNightMode ? 'night-mode' : ''}`}>
      <h2>Register</h2>
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
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
        <button type="submit" className={`button button-default ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
          {isSubmitting ? 'Registering...' : 'Register'}
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
      <div className="login-link">
        <p> Already have an account? <button type="button" className="button button-transparent" onClick={handleLoginClick}>Go back to Login</button></p>
      </div>
    </div>
  );
};

export default RegisterForm;
