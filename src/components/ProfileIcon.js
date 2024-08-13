'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axiosInstance from '../app/api/axiosInstance';
import styles from './ProfileIcon.module.css';

function ProfileIcon() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');
  const router = useRouter();

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axiosInstance.get('/api/auth/me');
  //       setUsername(response.data.username);
  //     } catch (error) {
  //       console.error('Failed to fetch user data', error);
  //       router.push('/login');
  //     }
  //   };

  //   fetchUserData();
  // }, [router]);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const handleLogout = async () => {
    try {
      await axiosInstance.get('/api/auth/logout');
      localStorage.removeItem('token');
      router.push('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className={styles.profileIconContainer}>
      <button className={styles.profileIcon} onClick={toggleDropdown} aria-haspopup="true" aria-expanded={showDropdown}>
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <circle cx="12" cy="8" r="3" fill="currentColor" />
          <path d="M12 14c-3.33 0-8 1.67-8 5v1h16v-1c0-3.33-4.67-5-8-5z" fill="currentColor" />
        </svg>
      </button>
      {showDropdown && (
        <div className={styles.profileDropdown} onClick={(e) => e.stopPropagation()}>
          <p className={styles.username}>{username}</p>
          <Link href="/profile" className={styles.dropdownLink}>
            Profile
          </Link>
          <button className={styles.dropdownLink} onClick={handleLogout}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default ProfileIcon;
