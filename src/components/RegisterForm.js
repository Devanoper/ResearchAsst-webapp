'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useMutation } from 'react-query';
import axiosInstance from '../app/api/axiosInstance';
import styles from './RegisterForm.module.css';

const register = async (formData) => {
  const response = await axiosInstance.post('/api/auth/register', formData);
  return response.data;
};

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const mutation = useMutation(register, {
    onSuccess: () => {
      setSuccessMessage('Registration successful!');
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    },
    onError: (error) => {
      setErrorMessage('Registration failed: ' + (error.response?.data?.detail || error.message));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const { confirmPassword, ...dataToSend } = formData;
    mutation.mutate(dataToSend);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className={styles.registerForm}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
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
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={`${styles.button} ${styles.buttonDefault} ${mutation.isLoading ? styles.submitting : ''}`} disabled={mutation.isLoading}>
            {mutation.isLoading ? 'Registering...' : 'Register'}
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
      <div className={styles.loginLink}>
        <p>Already have an account? <Link href="/login" className={styles.buttonTransparent}>Login here</Link></p>
      </div>
    </div>
  );
};

export default RegisterForm;
