import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNightMode } from '../NightModeContext';
import ToggleButton from './ToggleButton';
import ProfileIcon from './ProfileIcon';
import './Header.css';

const Header = () => {
  const { isNightMode, toggleNightMode } = useNightMode();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < 10 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const isLogin = location.pathname === '/' || location.pathname === '/register';

return (
  <header className={`header ${isNightMode ? 'night-mode' : ''}`} style={{ top: visible ? '0' : '-80px' }}>
    <div className="header-content">
      <div className="logo">Research Assistant</div>
      <div className="header-right">
        {!isLogin && <ProfileIcon />}
        <div className="toggle-container">
          <ToggleButton isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
        </div>
      </div>
    </div>
  </header>
);

};

export default Header;
