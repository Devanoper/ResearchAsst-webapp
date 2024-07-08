import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import './ProfileIcon.css';

function ProfileIcon() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get('/api/auth/me');
        setUsername(response.data.username);
      } catch (error) {
        console.error('Failed to fetch user data', error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const handleLogout = async () => {
    try {
      await axiosInstance.get('/api/auth/logout');
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="profile-icon-container">
      <button className="profile-icon" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={showDropdown}>
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <circle cx="12" cy="8" r="3" fill="currentColor" />
          <path d="M12 14c-3.33 0-8 1.67-8 5v1h16v-1c0-3.33-4.67-5-8-5z" fill="currentColor" />
        </svg>
      </button>
      {showDropdown && (
        <div className="profile-dropdown" onClick={(e) => e.stopPropagation()}>
          <p className="username">{username}</p>
          <a href="/profile" className="dropdown-link">Profile</a>
          <button className="dropdown-link sign-out" onClick={handleLogout}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default ProfileIcon;
