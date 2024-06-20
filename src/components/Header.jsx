import { useState, useEffect } from 'react';
import { useNightMode } from '../NightModeContext';
import './Header.css';

const Header = () => {
  const { isNightMode, toggleNightMode } = useNightMode();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < 10 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`header ${isNightMode ? 'night-mode' : ''}`} style={{ top: visible ? '0' : '-80px' }}>
      <div className="header-content">
        <div className="logo">Research Assistant</div>
        <div className="toggle-button">
          <button className="toggle-mode" onClick={toggleNightMode}>
            {isNightMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
