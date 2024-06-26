import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Log</div>
      <nav className={styles.nav}>
        <a href="/login" className={styles.link}>
          LOG IN
        </a>
        <a href="/registration" className={styles.link}>
          REGISTRATION
        </a>
      </nav>
    </header>
  );
};

export default Header;
