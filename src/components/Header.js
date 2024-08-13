'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ProfileIcon from './ProfileIcon';
import styles from './Header.module.css';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < 10 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const isLogin = pathname === '/' || pathname === '/register' || pathname === '/login';

  return (
    <header className={styles.header} style={{ top: visible ? '0' : '-80px' }}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          Research Assistant
        </Link>
        <div className={styles.headerRight}>
          {!isLogin && <ProfileIcon />}
        </div>
      </div>
    </header>
  );
};

export default Header;