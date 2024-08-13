'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../app/api/axiosInstance';
import styles from './LoginForm.module.css';

const login = async (formData) => {
  const response = await axiosInstance.post('/api/auth/login', formData);
  return response.data;
};

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setSuccessMessage('Login successful!');
      localStorage.setItem('token', data.token);
      setTimeout(() => {
        router.push('/dashboard');
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

  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
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
        <div className={styles.inputGroup}>
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
        <div className={styles.buttonContainer}>
          <button type="submit" className={`${styles.button} ${styles.buttonDefault} ${mutation.isLoading ? styles.submitting : ''}`} disabled={mutation.isLoading}>
            {mutation.isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      {errorMessage && (
        <div className={`${styles.alert} ${styles.error}`} role="alert" aria-live="assertive">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className={`${styles.alert} ${styles.success}`} role="alert" aria-live="assertive">
          {successMessage}
        </div>
      )}
      <div className={styles.registerLink}>
        <p>Don't have an account? <Link href="/register" className={styles.buttonTransparent}>Register here</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;