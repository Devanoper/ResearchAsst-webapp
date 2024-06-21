import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import { useNightMode } from '../NightModeContext';
import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
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
      await axios.post('/api/auth/register', formData);
      alert('Registration successful!');
      navigate('/');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
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
    navigate('/'); // Navigate to '/login' path
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
            name="confirm-password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <button type="submit" className={isSubmitting ? 'submitting' : ''} disabled={isSubmitting}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
      <div className="login-link">
        <p> Already have an account? <button type="button" onClick={handleLoginClick}>Go back to Login</button></p>
      </div>
    </div>
  );
};

export default RegisterForm;
