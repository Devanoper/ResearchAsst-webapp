import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import { useNightMode } from '../NightModeContext';
import { useState } from 'react';
import { useMutation } from 'react-query';
import axiosInstance from '../api/axiosInstance';

const register = async (formData) => {
  const params = new URLSearchParams(formData).toString();
  const response = await axiosInstance.post(`/api/auth/register?${params}`);
  return response.data;
};

const RegisterForm = () => {
  const { isNightMode } = useNightMode();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name:'',
    password: '',
    confirmPassword: '',
    email: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const mutation = useMutation(register, {
    onSuccess: () => {
      setSuccessMessage('Registration successful! ...redirecting');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    },
    onError: (error) => {
      setErrorMessage('Registration failed: ' + (error.response?.data?.detail || error.message));
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    mutation.mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
          <button type="submit" className={`button button-default ${mutation.isLoading ? 'submitting' : ''}`} disabled={mutation.isLoading}>
            {mutation.isLoading ? 'Registering...' : 'Register'}
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
        <p>Already have an account? <button type="button" className="button button-transparent" onClick={handleLoginClick}>Go back to Login</button></p>
      </div>
    </div>
  );
};

export default RegisterForm;
