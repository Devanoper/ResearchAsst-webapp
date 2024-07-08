import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { useNightMode } from '../NightModeContext';
import { useState } from 'react';
import { useMutation } from 'react-query';
import axiosInstance from '../api/axiosInstance';

const login = async (formData) => {
  const response = await axiosInstance.post('/api/auth/login', formData);
  return response.data;
};

const LoginForm = () => {
  const { isNightMode } = useNightMode();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      setSuccessMessage('Login successful!');
      localStorage.setItem('token', data.token);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    },
    onError: (error) => {
      setErrorMessage('Login failed: ' + (error.response?.data?.detail || error.message));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    mutation.mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
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
          <button type="submit" className={`button button-default ${mutation.isLoading ? 'submitting' : ''}`} disabled={mutation.isLoading}>
            {mutation.isLoading ? 'Logging in...' : 'Login'}
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
        <p>Don&apos;t have an account? <button type="button" className="button button-transparent" onClick={handleRegisterClick}>Register here</button></p>
      </div>
    </div>
  );
};

export default LoginForm;
